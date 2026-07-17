import Database from "better-sqlite3";
import { homedir } from "node:os";
import { join } from "node:path";
import type { CompressedObservation, Session } from "../types.js";
import { KV } from "./schema.js";
import { logger } from "../logger.js";
import type { StateKV } from "./kv.js";

/**
 * Configuration for Hermes session source.
 * By default reads from ~/.hermes/profiles/ai/state.db.
 */
const DEFAULT_HERMES_DB = join(homedir(), ".hermes", "profiles", "ai", "state.db");

/**
 * Look up a single Hermes session row by id OR session_key. Returns the
 * row (with a normalized title) or undefined if not present / DB unreachable.
 * Both outcomes are non-fatal — callers fall back to whatever title the
 * hook payload supplied.
 *
 * agentmemory sessions can be keyed either by the Hermes `id`
 * (e.g. `20260717_073438_d106c8`) or by `session_key` (the caller's own
 * opaque id, e.g. a Kilo Code `ses_xxx` id). We match on either so that
 * the title lookup succeeds regardless of which id the hook forwarded.
 */
export function lookupHermesSessionByKey(
  sessionId: string,
  dbPath: string | undefined,
): { title?: string; id?: string; sessionKey?: string } | undefined {
  const path = dbPath || DEFAULT_HERMES_DB;
  let db: Database.Database;
  try {
    db = new Database(path, { readonly: true });
  } catch (err) {
    logger.info("Could not open Hermes session DB for title lookup", {
      dbPath: path,
      error: String(err),
    });
    return undefined;
  }
  try {
    const row = db
      .prepare(
        "SELECT id, session_key, title FROM sessions WHERE id = ? OR session_key = ? LIMIT 1",
      )
      .get(sessionId, sessionId) as
      | { id?: string | null; session_key?: string | null; title?: string | null }
      | undefined;
    if (!row) return undefined;
    const title =
      typeof row.title === "string" && row.title.trim().length > 0
        ? row.title.trim().slice(0, 200)
        : undefined;
    return {
      id: typeof row.id === "string" ? row.id : undefined,
      sessionKey: typeof row.session_key === "string" ? row.session_key : undefined,
      title,
    };
  } catch (err) {
    logger.info("Hermes session title lookup failed", {
      sessionId,
      error: String(err),
    });
    return undefined;
  } finally {
    db.close();
  }
}

/**
 * Resolve the best display title for an agentmemory session, preferring the
 * Hermes/Kilo session title over any explicitly supplied hook title.
 *
 * Priority:
 *   1. Hermes/Kilo session title (looked up by id or session_key)
 *   2. `explicitTitle` from the hook payload (already validated non-empty)
 *
 * Returns undefined when nothing is available — callers should then fall
 * back to the first user prompt or the project name.
 */
export function resolveSessionTitle(
  sessionId: string,
  dbPath: string | undefined,
  explicitTitle?: string,
): string | undefined {
  const trimmedExplicit =
    typeof explicitTitle === "string" ? explicitTitle.trim().slice(0, 200) : "";
  const hermes = lookupHermesSessionByKey(sessionId, dbPath);
  const hermesTitle = hermes?.title;
  if (hermesTitle) return hermesTitle;
  return trimmedExplicit.length > 0 ? trimmedExplicit : undefined;
}

/**
 * @deprecated use resolveSessionTitle / lookupHermesSessionByKey. Kept for
 * backward compatibility with existing call sites and tests.
 */
export function lookupHermesSessionTitle(
  sessionId: string,
  dbPath: string | undefined,
): string | undefined {
  return lookupHermesSessionByKey(sessionId, dbPath)?.title;
}

/**
 * Convert Unix timestamp (seconds) to ISO 8601 string.
 */
function tsToIso(ts: number | null | undefined): string | undefined {
  if (ts == null) return undefined;
  const d = new Date(ts * 1000);
  return d.toISOString();
}

/**
 * Look up agentmemory's own observation count for a session from the KV store.
 * Returns 0 if the session has no observations or KV lookup fails.
 */
async function lookupObservationCount(
  kv: StateKV,
  sessionId: string,
): Promise<number> {
  try {
    const observations = await kv.list<CompressedObservation>(
      KV.observations(sessionId),
    );
    return observations.length;
  } catch (err) {
    logger.info("Could not fetch observation count for session", {
      sessionId,
      error: String(err),
    });
    return 0;
  }
}

/**
 * Convert a Hermes SQLite session row to agentmemory Session format.
 * Hermes schema: id, source, user_id, started_at, ended_at, cwd, git_branch, model, title
 */
function hermesToAgentmemory(row: Record<string, unknown>): Session {
  return {
    id: String(row.id || ""),
    project: String(row.cwd || "/"),
    cwd: String(row.cwd || ""),
    startedAt: tsToIso(row.started_at as number) || new Date().toISOString(),
    endedAt: tsToIso(row.ended_at as number),
    status: row.ended_at ? "completed" : "active",
    observationCount: 0, // populated by enrichWithObservationCounts
    model: row.model as string | undefined,
    firstPrompt: row.title as string | undefined,
  };
}

/**
 * Enrich sessions with observation counts from agentmemory's KV store.
 * If the session already had observations recorded by agentmemory (via its
 * own hooks), the count will reflect them. Otherwise it stays 0.
 */
async function enrichWithObservationCounts(
  kv: StateKV,
  sessions: Session[],
): Promise<Session[]> {
  return Promise.all(
    sessions.map(async (s) => ({
      ...s,
      observationCount: await lookupObservationCount(kv, s.id),
    })),
  );
}

export async function readHermesSessions(
  kv: StateKV,
  dbPath: string | undefined,
  limit: number = 100,
): Promise<Session[]> {
  // Use default path if not explicitly configured
  const path = dbPath || DEFAULT_HERMES_DB;
  let db: Database.Database;
  try {
    db = new Database(path, { readonly: true });
  } catch (err) {
    logger.warn("Could not open Hermes session DB", { dbPath: path, error: String(err) });
    return [];
  }

  let sessions: Session[] = [];
  try {
    // Hermes sessions schema: id, source, user_id, started_at, ended_at, cwd, git_branch, model, title
    const rows = db
      .prepare(
        `SELECT id, source, cwd, started_at, ended_at, model, title
         FROM sessions
         ORDER BY started_at DESC
         LIMIT @limit`,
      )
      .all({ limit }) as Record<string, unknown>[];

    sessions = rows.map(hermesToAgentmemory);
  } catch (err) {
    logger.warn("Could not read Hermes sessions", { error: String(err) });
    return [];
  } finally {
    db.close();
  }

  // Enrich with observation counts from agentmemory's own KV store
  return enrichWithObservationCounts(kv, sessions);
}
