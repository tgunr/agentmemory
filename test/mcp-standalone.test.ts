import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

vi.mock("../src/logger.js", () => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

vi.mock("node:fs", () => ({
  existsSync: vi.fn().mockReturnValue(false),
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
  mkdirSync: vi.fn(),
}));

vi.mock("../src/mcp/transport.js", () => ({
  createStdioTransport: vi.fn(() => ({ start: vi.fn(), stop: vi.fn() })),
}));

vi.mock("../src/config.js", () => ({
  getStandalonePersistPath: vi.fn(() => "/tmp/test-standalone.json"),
}));

import {
  getAllTools,
  CORE_TOOLS,
  V040_TOOLS,
} from "../src/mcp/tools-registry.js";
import { InMemoryKV } from "../src/mcp/in-memory-kv.js";
import { handleToolCall } from "../src/mcp/standalone.js";
import {
  resetHandleForTests,
  setLivezProbe,
} from "../src/mcp/rest-proxy.js";
import { writeFileSync } from "node:fs";

// Issue #449: hard-coded fetch() against :3111 in the livez probe was racing
// with vitest's mock setup, making this file the "10-11 pre-existing failures"
// referenced in the last 5 release notes. Stub the probe with an instant
// ok:false response so the shim takes the deterministic InMemoryKV fallback
// path on every test. Guard the real network with a fetch trap so any
// regression that bypasses the DI seam fails loudly instead of timing out.
const instantLocalFallbackProbe = vi.fn(async () => ({
  ok: false,
  status: 0,
  statusText: "stubbed: forced local fallback",
}));

const fetchTrap = vi.fn(async (url: unknown) => {
  throw new Error(
    `unexpected real fetch() call in mcp-standalone.test.ts: ${String(url)} — the livez probe DI stub should have absorbed this`,
  );
});

describe("Tools Registry", () => {
  it("getAllTools returns all tools with unique names", () => {
    const tools = getAllTools();
    expect(tools.length).toBeGreaterThanOrEqual(41);
    const names = new Set(tools.map((t) => t.name));
    expect(names.size).toBe(tools.length);
    for (const required of [
      "memory_verify",
      "memory_lesson_save",
      "memory_lesson_recall",
      "memory_obsidian_export",
      "memory_save",
      "memory_recall",
    ]) {
      expect(tools.some((t) => t.name === required)).toBe(true);
    }
  });

  it("CORE_TOOLS has 14 items", () => {
    expect(CORE_TOOLS.length).toBe(14);
  });

  it("V040_TOOLS has 8 items", () => {
    expect(V040_TOOLS.length).toBe(8);
  });

  it("all tools have required name, description, inputSchema fields", () => {
    const tools = getAllTools();
    for (const tool of tools) {
      expect(tool.name).toBeDefined();
      expect(typeof tool.name).toBe("string");
      expect(tool.name.length).toBeGreaterThan(0);
      expect(tool.description).toBeDefined();
      expect(typeof tool.description).toBe("string");
      expect(tool.inputSchema).toBeDefined();
      expect(tool.inputSchema.type).toBe("object");
      expect(tool.inputSchema.properties).toBeDefined();
    }
  });
});

describe("InMemoryKV", () => {
  let kv: InMemoryKV;

  beforeEach(() => {
    kv = new InMemoryKV();
  });

  it("get/set/list/delete operations work", async () => {
    await kv.set("scope1", "key1", { value: "hello" });
    const result = await kv.get<{ value: string }>("scope1", "key1");
    expect(result).toEqual({ value: "hello" });

    const list = await kv.list("scope1");
    expect(list.length).toBe(1);

    await kv.delete("scope1", "key1");
    const afterDelete = await kv.get("scope1", "key1");
    expect(afterDelete).toBeNull();
  });

  it("list returns empty array for unknown scope", async () => {
    const result = await kv.list("nonexistent");
    expect(result).toEqual([]);
  });

  it("persist writes JSON", async () => {
    const kvWithPersist = new InMemoryKV("/tmp/test-kv.json");
    await kvWithPersist.set("scope1", "key1", { data: "test" });
    kvWithPersist.persist();

    expect(writeFileSync).toHaveBeenCalledWith(
      "/tmp/test-kv.json",
      expect.any(String),
      "utf-8",
    );
    const written = vi.mocked(writeFileSync).mock.calls[0][1] as string;
    const parsed = JSON.parse(written);
    expect(parsed.scope1.key1).toEqual({ data: "test" });
  });

  it("set overwrites existing values", async () => {
    await kv.set("scope1", "key1", "first");
    await kv.set("scope1", "key1", "second");
    const result = await kv.get("scope1", "key1");
    expect(result).toBe("second");
    const list = await kv.list("scope1");
    expect(list.length).toBe(1);
  });
});

describe("handleToolCall", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.mocked(writeFileSync).mockClear();
    instantLocalFallbackProbe.mockClear();
    fetchTrap.mockClear();
    // Order matters: resetHandleForTests() restores the default probe and
    // clears the cached handle. Install the stub AFTER the reset so the
    // shim's next resolveHandle() call hits the stubbed instant-fail path
    // instead of the real 2s AbortController fetch.
    resetHandleForTests();
    setLivezProbe(instantLocalFallbackProbe);
    (globalThis as { fetch: typeof fetch }).fetch = fetchTrap as unknown as typeof fetch;
  });

  afterEach(() => {
    (globalThis as { fetch: typeof fetch }).fetch = originalFetch;
    resetHandleForTests();
  });

  it("livez probe stub is invoked instead of the real fetch (issue #449)", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "regression guard" }, kv);
    expect(instantLocalFallbackProbe).toHaveBeenCalledTimes(1);
    expect(fetchTrap).not.toHaveBeenCalled();
  });

  it("memory_save persists to disk immediately after saving", async () => {
    const kv = new InMemoryKV("/tmp/test-handle.json");
    const result = await handleToolCall(
      "memory_save",
      { content: "Test memory content" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.saved).toMatch(/^mem_/);
    expect(writeFileSync).toHaveBeenCalledWith(
      "/tmp/test-handle.json",
      expect.any(String),
      "utf-8",
    );
  });

  it("memory_save without persist path does not call writeFileSync", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "No persist path" }, kv);
    expect(writeFileSync).not.toHaveBeenCalled();
  });

  it("memory_save throws when content is missing", async () => {
    const kv = new InMemoryKV();
    await expect(
      handleToolCall("memory_save", {}, kv),
    ).rejects.toThrow("content is required");
  });

  it("memory_save rejects non-string content safely (no runtime TypeError)", async () => {
    const kv = new InMemoryKV();
    // These would have crashed on .trim() before the type-guard fix.
    for (const bogus of [42, {}, [], null, undefined, true]) {
      await expect(
        handleToolCall("memory_save", { content: bogus }, kv),
      ).rejects.toThrow("content is required");
    }
  });

  it("memory_recall returns matching memories", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "TypeScript is great" }, kv);
    await handleToolCall("memory_save", { content: "Python is also great" }, kv);
    const result = await handleToolCall(
      "memory_recall",
      { query: "typescript" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
    expect(parsed.results[0].content).toBe("TypeScript is great");
  });

  it("memory_save accepts concepts/files as arrays (plugin skill format, #139)", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall(
      "memory_save",
      {
        content: "Use HMAC for API auth",
        concepts: ["hmac", "api-auth", "security"],
        files: ["src/auth.ts", "src/middleware.ts"],
      },
      kv,
    );
    const saved = JSON.parse(result.content[0].text);
    const mem = await kv.get<{ concepts: string[]; files: string[] }>(
      "mem:memories",
      saved.saved,
    );
    expect(mem?.concepts).toEqual(["hmac", "api-auth", "security"]);
    expect(mem?.files).toEqual(["src/auth.ts", "src/middleware.ts"]);
  });

  it("memory_save still accepts concepts/files as comma-separated strings (legacy)", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall(
      "memory_save",
      {
        content: "JWT refresh rotation",
        concepts: "jwt, refresh, rotation",
        files: "src/auth.ts",
      },
      kv,
    );
    const saved = JSON.parse(result.content[0].text);
    const mem = await kv.get<{ concepts: string[]; files: string[] }>(
      "mem:memories",
      saved.saved,
    );
    expect(mem?.concepts).toEqual(["jwt", "refresh", "rotation"]);
    expect(mem?.files).toEqual(["src/auth.ts"]);
  });

  it("memory_smart_search falls back to substring match in the standalone shim (#139)", async () => {
    const kv = new InMemoryKV();
    await handleToolCall(
      "memory_save",
      { content: "Use bcrypt for password hashing" },
      kv,
    );
    await handleToolCall(
      "memory_save",
      { content: "Use argon2id for new projects" },
      kv,
    );
    const result = await handleToolCall(
      "memory_smart_search",
      { query: "bcrypt", limit: 5 },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
    expect(parsed.results[0].content).toBe("Use bcrypt for password hashing");
  });

  it("memory_smart_search rejects empty query to prevent match-all in forget flow (#139)", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "anything" }, kv);
    await expect(
      handleToolCall("memory_smart_search", {}, kv),
    ).rejects.toThrow("query is required");
    await expect(
      handleToolCall("memory_smart_search", { query: "" }, kv),
    ).rejects.toThrow("query is required");
    await expect(
      handleToolCall("memory_smart_search", { query: "   " }, kv),
    ).rejects.toThrow("query is required");
  });

  it("memory_smart_search searches files and concepts, not just title/content (#139)", async () => {
    const kv = new InMemoryKV();
    await handleToolCall(
      "memory_save",
      {
        content: "generic note",
        concepts: ["oauth", "token-rotation"],
        files: ["src/auth/refresh.ts"],
      },
      kv,
    );
    await handleToolCall("memory_save", { content: "unrelated" }, kv);

    // Find by file path
    const byFile = JSON.parse(
      (
        await handleToolCall(
          "memory_smart_search",
          { query: "src/auth/refresh.ts" },
          kv,
        )
      ).content[0].text,
    );
    expect(byFile.results).toHaveLength(1);
    expect(byFile.results[0].files).toContain("src/auth/refresh.ts");

    // Find by concept
    const byConcept = JSON.parse(
      (
        await handleToolCall(
          "memory_smart_search",
          { query: "token-rotation" },
          kv,
        )
      ).content[0].text,
    );
    expect(byConcept.results).toHaveLength(1);
  });

  it("memory_sessions honours the limit arg (#139)", async () => {
    const kv = new InMemoryKV();
    for (let i = 0; i < 5; i++) {
      await kv.set("mem:sessions", `ses_${i}`, {
        id: `ses_${i}`,
        project: "demo",
      });
    }
    const result = await handleToolCall(
      "memory_sessions",
      { limit: 2 },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.sessions).toHaveLength(2);
  });

  it("parseLimit clamps bad/malicious limit values to a safe range", async () => {
    const kv = new InMemoryKV();
    for (let i = 0; i < 150; i++) {
      await handleToolCall("memory_save", { content: `mem ${i}` }, kv);
    }

    // Negative / NaN / Infinity / string / object — all should fall back
    // to the default (10) for memory_smart_search.
    for (const bogus of [-1, NaN, Infinity, "abc", {}, true]) {
      const r = await handleToolCall(
        "memory_smart_search",
        { query: "mem", limit: bogus },
        kv,
      );
      expect(JSON.parse(r.content[0].text).results).toHaveLength(10);
    }

    // An absurdly large limit gets clamped to MAX_LIMIT (100).
    const huge = await handleToolCall(
      "memory_smart_search",
      { query: "mem", limit: 99999 },
      kv,
    );
    expect(JSON.parse(huge.content[0].text).results).toHaveLength(100);
  });

  it("memory_governance_delete removes memories by id array (#139)", async () => {
    const kv = new InMemoryKV();
    const a = JSON.parse(
      (await handleToolCall("memory_save", { content: "one" }, kv)).content[0]
        .text,
    );
    const b = JSON.parse(
      (await handleToolCall("memory_save", { content: "two" }, kv)).content[0]
        .text,
    );
    const c = JSON.parse(
      (await handleToolCall("memory_save", { content: "three" }, kv)).content[0]
        .text,
    );
    const result = await handleToolCall(
      "memory_governance_delete",
      { memoryIds: [a.saved, c.saved] },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.deleted).toBe(2);
    expect(parsed.requested).toBe(2);

    const remaining = await kv.list<Record<string, unknown>>("mem:memories");
    expect(remaining).toHaveLength(1);
    expect((remaining[0] as { id: string }).id).toBe(b.saved);
  });

  it("memory_governance_delete accepts CSV-string memoryIds too", async () => {
    const kv = new InMemoryKV();
    const saved = JSON.parse(
      (await handleToolCall("memory_save", { content: "x" }, kv)).content[0]
        .text,
    );
    const result = await handleToolCall(
      "memory_governance_delete",
      { memoryIds: saved.saved, reason: "test csv" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.deleted).toBe(1);
    expect(parsed.reason).toBe("test csv");
  });

  it("memory_governance_delete throws when memoryIds is missing or empty", async () => {
    const kv = new InMemoryKV();
    await expect(
      handleToolCall("memory_governance_delete", {}, kv),
    ).rejects.toThrow("memoryIds is required");
    await expect(
      handleToolCall("memory_governance_delete", { memoryIds: [] }, kv),
    ).rejects.toThrow("memoryIds is required");
  });

  it("memory_governance_delete silently skips unknown ids", async () => {
    const kv = new InMemoryKV();
    const saved = JSON.parse(
      (await handleToolCall("memory_save", { content: "real" }, kv)).content[0]
        .text,
    );
    const result = await handleToolCall(
      "memory_governance_delete",
      { memoryIds: [saved.saved, "mem_does_not_exist"] },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.deleted).toBe(1);
    expect(parsed.requested).toBe(2);
  });

  it("memory_export returns version, memories, and sessions", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "export test memory" }, kv);
    await kv.set("mem:sessions", "ses_export_test", { id: "ses_export_test" });
    const result = await handleToolCall("memory_export", {}, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed).toHaveProperty("version");
    expect(parsed).toHaveProperty("memories");
    expect(parsed).toHaveProperty("sessions");
    expect(Array.isArray(parsed.memories)).toBe(true);
    expect(Array.isArray(parsed.sessions)).toBe(true);
    expect(parsed.memories.length).toBeGreaterThanOrEqual(1);
    const found = parsed.memories.find((m: { content: string }) =>
      m.content === "export test memory",
    );
    expect(found).toBeDefined();
  });

  it("memory_export returns empty arrays when no data exists", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall("memory_export", {}, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.memories).toEqual([]);
    expect(parsed.sessions).toEqual([]);
  });

  it("memory_audit returns entries from the audit log", async () => {
    const kv = new InMemoryKV();
    await kv.set("mem:audit", "audit_1", {
      id: "audit_1",
      operation: "save",
      timestamp: "2026-01-01T00:00:00.000Z",
      memoryId: "mem_test",
    });
    await kv.set("mem:audit", "audit_2", {
      id: "audit_2",
      operation: "delete",
      timestamp: "2026-01-02T00:00:00.000Z",
      memoryId: "mem_test",
    });
    const result = await handleToolCall("memory_audit", {}, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed).toHaveProperty("entries");
    expect(Array.isArray(parsed.entries)).toBe(true);
    expect(parsed.entries).toHaveLength(2);
  });

  it("memory_audit honours limit argument", async () => {
    const kv = new InMemoryKV();
    for (let i = 0; i < 5; i++) {
      await kv.set("mem:audit", `audit_${i}`, {
        id: `audit_${i}`,
        operation: "test",
        timestamp: `2026-01-0${i + 1}T00:00:00.000Z`,
      });
    }
    const result = await handleToolCall("memory_audit", { limit: 2 }, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.entries).toHaveLength(2);
  });

  it("memory_save with explicit type stores the type value", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall(
      "memory_save",
      { content: "typed memory", type: "pattern" },
      kv,
    );
    const saved = JSON.parse(result.content[0].text);
    const mem = await kv.get<{ type: string }>("mem:memories", saved.saved);
    expect(mem?.type).toBe("pattern");
  });

  it("memory_save defaults type to fact when not provided", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall(
      "memory_save",
      { content: "default type memory" },
      kv,
    );
    const saved = JSON.parse(result.content[0].text);
    const mem = await kv.get<{ type: string }>("mem:memories", saved.saved);
    expect(mem?.type).toBe("fact");
  });

  it("memory_save stores sessionIds when AGENTMEMORY_SESSION_ID is set", async () => {
    const kv = new InMemoryKV();
    const originalSessionId = process.env["AGENTMEMORY_SESSION_ID"];
    try {
      process.env["AGENTMEMORY_SESSION_ID"] = "test-session-123";
      const result = await handleToolCall(
        "memory_save",
        { content: "session-tracked memory" },
        kv,
      );
      const saved = JSON.parse(result.content[0].text);
      const mem = await kv.get<{ sessionIds: string[] }>(
        "mem:memories",
        saved.saved,
      );
      expect(mem?.sessionIds).toContain("test-session-123");
    } finally {
      if (originalSessionId !== undefined) {
        process.env["AGENTMEMORY_SESSION_ID"] = originalSessionId;
      } else {
        delete process.env["AGENTMEMORY_SESSION_ID"];
      }
    }
  });

  it("memory_save stores empty sessionIds when AGENTMEMORY_SESSION_ID is not set", async () => {
    const kv = new InMemoryKV();
    const originalSessionId = process.env["AGENTMEMORY_SESSION_ID"];
    try {
      delete process.env["AGENTMEMORY_SESSION_ID"];
      const result = await handleToolCall(
        "memory_save",
        { content: "no session memory" },
        kv,
      );
      const saved = JSON.parse(result.content[0].text);
      const mem = await kv.get<{ sessionIds: string[] }>(
        "mem:memories",
        saved.saved,
      );
      expect(mem?.sessionIds).toEqual([]);
    } finally {
      if (originalSessionId !== undefined) {
        process.env["AGENTMEMORY_SESSION_ID"] = originalSessionId;
      }
    }
  });

  it("normalizeList handles null, undefined, number, and object values", async () => {
    const kv = new InMemoryKV();
    // Non-string, non-array concepts/files should produce empty arrays
    for (const bogus of [null, undefined, 42, {}, true]) {
      const result = await handleToolCall(
        "memory_save",
        { content: "normalize test", concepts: bogus, files: bogus },
        kv,
      );
      const saved = JSON.parse(result.content[0].text);
      const mem = await kv.get<{ concepts: string[]; files: string[] }>(
        "mem:memories",
        saved.saved,
      );
      expect(mem?.concepts).toEqual([]);
      expect(mem?.files).toEqual([]);
    }
  });

  it("normalizeList handles arrays with mixed types", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall(
      "memory_save",
      {
        content: "mixed array test",
        concepts: ["valid", 42, null, "  ", "also-valid"],
        files: ["src/test.ts", undefined as unknown as string, "", "src/real.ts"],
      },
      kv,
    );
    const saved = JSON.parse(result.content[0].text);
    const mem = await kv.get<{ concepts: string[]; files: string[] }>(
      "mem:memories",
      saved.saved,
    );
    expect(mem?.concepts).toEqual(["valid", "also-valid"]);
    expect(mem?.files).toEqual(["src/test.ts", "src/real.ts"]);
  });

  it("memory_recall searches sessionIds field", async () => {
    const kv = new InMemoryKV();
    await kv.set("mem:memories", "mem_session_search", {
      id: "mem_session_search",
      content: "session-specific memory",
      title: "session-specific memory",
      concepts: [],
      files: [],
      sessionIds: ["unique-session-id-abc123"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      strength: 7,
      version: 1,
      isLatest: true,
      type: "fact",
    });
    const result = await handleToolCall(
      "memory_recall",
      { query: "unique-session-id-abc123" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
    expect(parsed.results[0].id).toBe("mem_session_search");
  });

  it("memory_recall with string limit parses it as a number", async () => {
    const kv = new InMemoryKV();
    for (let i = 0; i < 15; i++) {
      await handleToolCall("memory_save", { content: `recall item ${i}` }, kv);
    }
    const result = await handleToolCall(
      "memory_recall",
      { query: "recall item", limit: "3" as unknown as number },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(3);
  });

  it("memory_recall with format argument lowercases it", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "format test" }, kv);
    const result = await handleToolCall(
      "memory_recall",
      { query: "format", format: "COMPACT" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.mode).toBe("compact");
  });

  it("memory_smart_search with token_budget as string parses it", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "token budget test" }, kv);
    const result = await handleToolCall(
      "memory_smart_search",
      { query: "token", token_budget: "500" as unknown as number },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
  });

  it("memory_recall returns all matching memories when query has no words", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "hello world" }, kv);
    const result = await handleToolCall(
      "memory_recall",
      { query: "hello" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
  });

  it("memory_recall with no matches returns empty results", async () => {
    const kv = new InMemoryKV();
    await handleToolCall("memory_save", { content: "typescript code" }, kv);
    const result = await handleToolCall(
      "memory_recall",
      { query: "rust programming" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toEqual([]);
  });

  it("handleToolsList with AGENTMEMORY_DEBUG=true logs debug output", async () => {
    const { handleToolsList } = await import("../src/mcp/standalone.js");
    const originalFetch = globalThis.fetch;
    const originalDebug = process.env["AGENTMEMORY_DEBUG"];
    try {
      process.env["AGENTMEMORY_DEBUG"] = "true";
      const writes: string[] = [];
      const origStderrWrite = process.stderr.write.bind(process.stderr);
      process.stderr.write = ((chunk: string | Uint8Array) => {
        writes.push(typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf8"));
        return true;
      }) as typeof process.stderr.write;

      const fn = vi.fn(async () => {
        throw new Error("ECONNREFUSED");
      });
      (globalThis as { fetch: typeof fetch }).fetch = fn as unknown as typeof fetch;

      const result = await handleToolsList();
      const tools = result.tools as Array<{ name: string }>;
      expect(tools).toHaveLength(7);

      const joined = writes.join("");
      expect(joined).toMatch(/tools\/list: returning 7 local fallback tools/);
    } finally {
      process.stderr.write = process.stderr.write;
      globalThis.fetch = originalFetch;
      if (originalDebug !== undefined) {
        process.env["AGENTMEMORY_DEBUG"] = originalDebug;
      } else {
        delete process.env["AGENTMEMORY_DEBUG"];
      }
    }
  });

  it("memory_save with whitespace-only content throws validation error", async () => {
    const kv = new InMemoryKV();
    await expect(
      handleToolCall("memory_save", { content: "   " }, kv),
    ).rejects.toThrow("content is required");
    await expect(
      handleToolCall("memory_save", { content: "\n\t" }, kv),
    ).rejects.toThrow("content is required");
  });

  it("memory_recall with whitespace-only query throws validation error", async () => {
    const kv = new InMemoryKV();
    await expect(
      handleToolCall("memory_recall", { query: "   " }, kv),
    ).rejects.toThrow("query is required");
    await expect(
      handleToolCall("memory_recall", { query: "" }, kv),
    ).rejects.toThrow("query is required");
  });

  it("memory_recall searches id field for exact ID lookups", async () => {
    const kv = new InMemoryKV();
    await kv.set("mem:memories", "mem_exact_id", {
      id: "mem_exact_id",
      content: "id searchable memory",
      title: "id searchable memory",
      concepts: [],
      files: [],
      sessionIds: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      strength: 7,
      version: 1,
      isLatest: true,
      type: "fact",
    });
    const result = await handleToolCall(
      "memory_recall",
      { query: "mem_exact_id" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
    expect(parsed.results[0].id).toBe("mem_exact_id");
  });

  it("memory_recall handles entries with missing fields gracefully", async () => {
    const kv = new InMemoryKV();
    await kv.set("mem:memories", "mem_partial", {
      id: "mem_partial",
      content: "partial entry",
    });
    const result = await handleToolCall(
      "memory_recall",
      { query: "partial" },
      kv,
    );
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.results).toHaveLength(1);
    expect(parsed.results[0].content).toBe("partial entry");
  });

  it("memory_sessions with no sessions returns empty array", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall("memory_sessions", {}, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.sessions).toEqual([]);
  });

  it("memory_sessions returns sessions sorted by insertion order", async () => {
    const kv = new InMemoryKV();
    await kv.set("mem:sessions", "ses_first", { id: "ses_first", order: 1 });
    await kv.set("mem:sessions", "ses_second", { id: "ses_second", order: 2 });
    await kv.set("mem:sessions", "ses_third", { id: "ses_third", order: 3 });
    const result = await handleToolCall("memory_sessions", { limit: 10 }, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.sessions).toHaveLength(3);
    expect(parsed.sessions[0].id).toBe("ses_first");
  });

  it("memory_audit with no entries returns empty array", async () => {
    const kv = new InMemoryKV();
    const result = await handleToolCall("memory_audit", {}, kv);
    const parsed = JSON.parse(result.content[0].text);
    expect(parsed.entries).toEqual([]);
  });
});
