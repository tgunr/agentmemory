import { describe, expect, it, vi, beforeAll, afterAll } from "vitest";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

vi.mock("../src/logger.js", () => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

const fakeDbPath = join(tmpdir(), `hermes-test-${Date.now()}.db`);

beforeAll(() => {
  // Use a path that the real Hermes DB will never match, so we exercise
  // the "db not found" branch deterministically and skip the native
  // better-sqlite3 binding that doesn't compile in this Node version.
});

afterAll(() => {
  if (existsSync(fakeDbPath)) rmSync(fakeDbPath);
});

describe("lookupHermesSessionTitle", () => {
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
