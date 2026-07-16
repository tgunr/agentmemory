import { describe, expect, it, vi } from "vitest";
import type {
  CompressedObservation,
  RawObservation,
  Session,
} from "../src/types.js";
import { registerEvictFunction } from "../src/functions/evict.js";
import { KV } from "../src/state/schema.js";

vi.mock("../src/logger.js", () => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

type Store = Map<string, Map<string, unknown>>;
type Handler = (payload: unknown) => unknown | Promise<unknown>;

function daysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

function makeSession(id: string): Session {
  return {
    id,
    project: "agentmemory",
    cwd: "/repo/agentmemory",
    startedAt: daysAgo(31),
    status: "active",
    observationCount: 1,
  };
}

function makeObservation(sessionId: string): CompressedObservation {
  return {
    id: "obs_1",
    sessionId,
    timestamp: daysAgo(31),
    type: "decision",
    title: "Chose sqlite storage",
    facts: ["Use sqlite for local state"],
    narrative: "The session chose sqlite for local state.",
    concepts: ["sqlite"],
    files: ["src/state/kv.ts"],
    importance: 8,
  };
}

function makeRawObservation(sessionId: string): RawObservation {
  return {
    id: "raw_1",
    sessionId,
    timestamp: daysAgo(31),
    hookType: "post_tool_use",
    toolName: "Edit",
    raw: { file_path: "src/state/kv.ts" },
  };
}

function mockKV(store: Store, listFailures: Set<string> = new Set()) {
  return {
    get: async <T>(scope: string, key: string): Promise<T | null> =>
      (store.get(scope)?.get(key) as T) ?? null,
    set: async <T>(scope: string, key: string, data: T): Promise<T> => {
      if (!store.has(scope)) store.set(scope, new Map());
      store.get(scope)!.set(key, data);
      return data;
    },
    delete: async (scope: string, key: string): Promise<void> => {
      store.get(scope)?.delete(key);
    },
    list: async <T>(scope: string): Promise<T[]> => {
      if (listFailures.has(scope)) {
        throw new Error(`list failed for ${scope}`);
      }
      const entries = store.get(scope);
      return entries ? (Array.from(entries.values()) as T[]) : [];
    },
  };
}

function mockSdk() {
  const handlers = new Map<string, Handler>();
  const calls: Array<{ function_id: string; payload: unknown }> = [];
  return {
    calls,
    sdk: {
      registerFunction: (functionId: string, handler: Handler) => {
        handlers.set(functionId, handler);
      },
      trigger: async (input: { function_id: string; payload: unknown }) => {
        calls.push(input);
        const handler = handlers.get(input.function_id);
        if (!handler) throw new Error(`missing handler: ${input.function_id}`);
        return handler(input.payload);
      },
    },
  };
}

function storeForObservations(
  sessionId: string,
  observations: Array<CompressedObservation | RawObservation>,
): Store {
  const session = makeSession(sessionId);
  return new Map([
    [KV.sessions, new Map([[session.id, session]])],
    [KV.summaries, new Map()],
    [
      KV.observations(session.id),
      new Map(observations.map((observation) => [observation.id, observation])),
    ],
    [KV.config, new Map()],
    [KV.audit, new Map()],
  ]);
}

function storeForObservedSession(sessionId: string): Store {
  return storeForObservations(sessionId, [makeObservation(sessionId)]);
}

describe("mem::evict stale sessions", () => {
  it("runs session recovery before deleting a stale observed session", async () => {
    const sessionId = "ses_stale";
    const store = storeForObservedSession(sessionId);
    const kv = mockKV(store);
    const { sdk, calls } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);
    sdk.registerFunction("event::session::stopped", async (payload) => {
      expect(payload).toEqual({ sessionId });
      expect(await kv.get(KV.sessions, sessionId)).toMatchObject({
        id: sessionId,
      });
      return { success: true };
    });
    sdk.registerFunction("mem::consolidate-pipeline", () => ({
      success: true,
    }));

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { staleSessions: number };

    expect(result.staleSessions).toBe(1);
    expect(await kv.get(KV.sessions, sessionId)).toBeNull();
    const audits = await kv.list<{
      details: { reason: string };
    }>(KV.audit);
    expect(audits[0].details.reason).toBe(
      "stale_session_recovered_then_evicted",
    );
    expect(calls.map((call) => call.function_id)).toContain(
      "event::session::stopped",
    );
    expect(calls.map((call) => call.function_id)).toContain(
      "mem::consolidate-pipeline",
    );
  });

  it("keeps a stale observed session when recovery fails", async () => {
    const sessionId = "ses_unrecovered";
    const store = storeForObservedSession(sessionId);
    const kv = mockKV(store);
    const { sdk, calls } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);
    sdk.registerFunction("event::session::stopped", () => ({
      success: false,
      error: "no_provider",
    }));

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { staleSessions: number };

    expect(result.staleSessions).toBe(0);
    expect(await kv.get(KV.sessions, sessionId)).toMatchObject({
      id: sessionId,
    });
    expect(calls.map((call) => call.function_id)).toContain(
      "event::session::stopped",
    );
    expect(calls.map((call) => call.function_id)).not.toContain(
      "mem::consolidate-pipeline",
    );
  });

  it("keeps a stale session when observation scanning fails", async () => {
    const sessionId = "ses_scan_failed";
    const store = storeForObservedSession(sessionId);
    const kv = mockKV(store, new Set([KV.observations(sessionId)]));
    const { sdk, calls } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);
    sdk.registerFunction("event::session::stopped", () => ({
      success: true,
    }));

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { staleSessions: number };

    expect(result.staleSessions).toBe(0);
    expect(await kv.get(KV.sessions, sessionId)).toMatchObject({
      id: sessionId,
    });
    expect(calls.map((call) => call.function_id)).not.toContain(
      "event::session::stopped",
    );
  });

  it("keeps a stale session that only has raw observations", async () => {
    const sessionId = "ses_raw_only";
    const store = storeForObservations(sessionId, [
      makeRawObservation(sessionId),
    ]);
    const kv = mockKV(store);
    const { sdk, calls } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);
    sdk.registerFunction("event::session::stopped", () => ({
      success: true,
    }));

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { staleSessions: number };

    expect(result.staleSessions).toBe(0);
    expect(await kv.get(KV.sessions, sessionId)).toMatchObject({
      id: sessionId,
    });
    expect(calls.map((call) => call.function_id)).not.toContain(
      "event::session::stopped",
    );
  });
});

describe("mem::evict empty sessions", () => {
  function emptySession(id: string, ageMs: number): Session {
    return {
      id,
      project: "agentmemory",
      cwd: "/repo/agentmemory",
      startedAt: new Date(Date.now() - ageMs).toISOString(),
      status: "active",
      observationCount: 0,
    };
  }

  it("deletes an empty session past the grace window", async () => {
    const sessionId = "ses_empty_old";
    const store = new Map([
      [
        KV.sessions,
        new Map([[sessionId, emptySession(sessionId, 2 * 60 * 60 * 1000)]]),
      ],
      [KV.summaries, new Map()],
      [KV.audit, new Map()],
    ]);
    const kv = mockKV(store);
    const { sdk } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { emptySessions: number };

    expect(result.emptySessions).toBe(1);
    expect(await kv.get(KV.sessions, sessionId)).toBeNull();
    const audits = await kv.list<{ details: { reason: string } }>(KV.audit);
    expect(audits[0].details.reason).toBe("empty_session");
  });

  it("keeps an empty session inside the grace window", async () => {
    const sessionId = "ses_empty_recent";
    const store = new Map([
      [
        KV.sessions,
        new Map([[sessionId, emptySession(sessionId, 30 * 60 * 1000)]]),
      ],
      [KV.summaries, new Map()],
      [KV.audit, new Map()],
    ]);
    const kv = mockKV(store);
    const { sdk } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { emptySessions: number };

    expect(result.emptySessions).toBe(0);
    expect(await kv.get(KV.sessions, sessionId)).toMatchObject({
      id: sessionId,
    });
  });

  it("keeps an empty session that has a summary", async () => {
    const sessionId = "ses_empty_with_summary";
    const store = new Map([
      [
        KV.sessions,
        new Map([[sessionId, emptySession(sessionId, 24 * 60 * 60 * 1000)]]),
      ],
      [
        KV.summaries,
        new Map([[sessionId, { sessionId, title: "old summary" }]]),
      ],
      [KV.audit, new Map()],
    ]);
    const kv = mockKV(store);
    const { sdk } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { emptySessions: number };

    expect(result.emptySessions).toBe(0);
    expect(await kv.get(KV.sessions, sessionId)).toMatchObject({
      id: sessionId,
    });
  });

  it("respects emptySessionGraceMs=0 to clear all empty sessions", async () => {
    // Slightly past 0 so the strict > check passes; with graceMs=0, anything
    // older than 0ms is fair game.
    const recent = emptySession("ses_recent", 5);
    const old = emptySession("ses_old", 5 * 60 * 1000);
    const store = new Map<string, Map<string, unknown>>([
      [KV.sessions, new Map([[recent.id, recent], [old.id, old]])],
      [KV.summaries, new Map()],
      [KV.audit, new Map()],
      [
        KV.config,
        new Map([["eviction", { emptySessionGraceMs: 0 }]]),
      ],
    ]);
    const kv = mockKV(store);
    const { sdk } = mockSdk();

    registerEvictFunction(sdk as never, kv as never);

    const result = (await sdk.trigger({
      function_id: "mem::evict",
      payload: {},
    })) as { emptySessions: number };

    expect(result.emptySessions).toBe(2);
    expect(await kv.get(KV.sessions, "ses_recent")).toBeNull();
    expect(await kv.get(KV.sessions, "ses_old")).toBeNull();
  });
});
