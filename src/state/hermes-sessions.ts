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
 * Look up a single Hermes session's title by id. Returns undefined if the
 * session is not in the Hermes DB or the DB is unreachable — both are
 * non-fatal, callers fall back to whatever title the hook payload supplied.
 */
export function lookupHermesSessionTitle(
  sessionId: string,
  dbPath: string | undefined,
): string | undefined {
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
      .prepare("SELECT title FROM sessions WHERE id = ?")
      .get(sessionId) as { title?: string | null } | undefined;
    if (!row || typeof row.title !== "string" || row.title.trim().length === 0) {
      return undefined;
    }
    return row.title.trim().slice(0, 200);
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
