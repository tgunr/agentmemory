import { describe, expect, it, vi, beforeAll, afterAll } from "vitest";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import Database from "better-sqlite3";

vi.mock("../src/logger.js", () => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

const fakeDbPath = join(tmpdir(), `hermes-test-${Date.now()}.db`);

let realDb: string;

beforeAll(() => {
  // Build a real SQLite db mirroring the Hermes `sessions` schema so we can
  // exercise the title-resolution paths against actual rows.
  const dir = mkdtempSync(join(tmpdir(), "hermes-real-"));
  realDb = join(dir, "state.db");
  const db = new Database(realDb);
  db.exec(`
    CREATE TABLE sessions (
      id TEXT PRIMARY KEY,
      session_key TEXT,
      source TEXT,
      title TEXT
    );
  `);
  db.prepare(
    "INSERT INTO sessions (id, session_key, source, title) VALUES (?, ?, ?, ?)",
  ).run("20260717_073438_d106c8", "caller-aaa", "tui", "Hermes real title");
  db.prepare(
    "INSERT INTO sessions (id, session_key, source, title) VALUES (?, ?, ?, ?)",
  ).run("20260717_041154_b21ab7", "caller-bbb", "tui", null);
  db.prepare(
    "INSERT INTO sessions (id, session_key, source, title) VALUES (?, ?, ?, ?)",
  ).run("20260716_151225_199ae8", null, "tui", "Title by session_key only");
  db.close();
});

afterAll(() => {
  if (existsSync(fakeDbPath)) rmSync(fakeDbPath);
  if (realDb && existsSync(realDb)) {
    rmSync(realDb, { force: true });
    rmSync(join(realDb, ".."), { recursive: true, force: true });
  }
});

describe("lookupHermesSessionTitle (legacy)", () => {
  it("returns undefined when the db path is unreachable", async () => {
    const { lookupHermesSessionTitle } = await import(
      "../src/state/hermes-sessions.js"
    );
    expect(
      lookupHermesSessionTitle("ses_1", "/nonexistent/path/to/db.sqlite"),
    ).toBeUndefined();
  });

  it("returns undefined for an empty (non-existent) db file", async () => {
    const dir = mkdtempSync(join(tmpdir(), "hermes-test-"));
    const emptyDb = join(dir, "empty.db");
    try {
      const { lookupHermesSessionTitle } = await import(
        "../src/state/hermes-sessions.js"
      );
      // Empty file is not a valid SQLite db, so better-sqlite3 will throw —
      // the helper should swallow and return undefined.
      expect(lookupHermesSessionTitle("ses_1", emptyDb)).toBeUndefined();
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("lookupHermesSessionByKey", () => {
  it("matches by Hermes id and returns the title", async () => {
    const { lookupHermesSessionByKey } = await import(
      "../src/state/hermes-sessions.js"
    );
    const row = lookupHermesSessionByKey("20260717_073438_d106c8", realDb);
    expect(row?.title).toBe("Hermes real title");
    expect(row?.id).toBe("20260717_073438_d106c8");
  });

  it("matches by session_key (caller-supplied id)", async () => {
    const { lookupHermesSessionByKey } = await import(
      "../src/state/hermes-sessions.js"
    );
    const row = lookupHermesSessionByKey("caller-aaa", realDb);
    expect(row?.title).toBe("Hermes real title");
    expect(row?.sessionKey).toBe("caller-aaa");
  });

  it("returns undefined title when the row has no title", async () => {
    const { lookupHermesSessionByKey } = await import(
      "../src/state/hermes-sessions.js"
    );
    const row = lookupHermesSessionByKey("20260717_041154_b21ab7", realDb);
    expect(row).toBeDefined();
    expect(row?.title).toBeUndefined();
  });

  it("returns undefined for an unknown key", async () => {
    const { lookupHermesSessionByKey } = await import(
      "../src/state/hermes-sessions.js"
    );
    expect(lookupHermesSessionByKey("nope_zzz", realDb)).toBeUndefined();
  });
});

describe("resolveSessionTitle", () => {
  it("prefers the Hermes title over an explicit title", async () => {
    const { resolveSessionTitle } = await import(
      "../src/state/hermes-sessions.js"
    );
    expect(
      resolveSessionTitle(
        "20260717_073438_d106c8",
        realDb,
        "explicit fallback",
      ),
    ).toBe("Hermes real title");
  });

  it("falls back to the explicit title when no Hermes title exists", async () => {
    const { resolveSessionTitle } = await import(
      "../src/state/hermes-sessions.js"
    );
    expect(
      resolveSessionTitle(
        "20260717_041154_b21ab7",
        realDb,
        "explicit fallback",
      ),
    ).toBe("explicit fallback");
  });

  it("falls back to the explicit title when the key is unknown", async () => {
    const { resolveSessionTitle } = await import(
      "../src/state/hermes-sessions.js"
    );
    expect(resolveSessionTitle("unknown_zzz", realDb, "only explicit")).toBe(
      "only explicit",
    );
  });

  it("returns undefined when neither Hermes nor explicit title is available", async () => {
    const { resolveSessionTitle } = await import(
      "../src/state/hermes-sessions.js"
    );
    expect(resolveSessionTitle("unknown_zzz", realDb, undefined)).toBeUndefined();
  });
});
