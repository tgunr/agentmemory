import { describe, it, expect, vi, beforeEach } from "vitest";
import { MetricsStore } from "../src/eval/metrics-store.js";
import { KV } from "../src/state/schema.js";

function makeKv() {
  const store = new Map<string, unknown>();
  return {
    store,
    get: vi.fn(async (scope: string, key: string) => store.get(`${scope}:${key}`) ?? null),
    set: vi.fn(async (scope: string, key: string, value: unknown) => {
      store.set(`${scope}:${key}`, value);
      return value;
    }),
    delete: vi.fn(async (scope: string, key: string) => {
      store.delete(`${scope}:${key}`);
    }),
    list: vi.fn(async (scope: string) => {
      const prefix = `${scope}:`;
      return Array.from(store.entries())
        .filter(([k]) => k.startsWith(prefix))
        .map(([, v]) => v);
    }),
  };
}

describe("MetricsStore.reset", () => {
  let kv: ReturnType<typeof makeKv>;
  let store: MetricsStore;

  beforeEach(() => {
    kv = makeKv();
    store = new MetricsStore(kv as never);
  });

  it("clears a single function's persisted metrics + cache", async () => {
    await store.record("mem::compress", 100, true);
    await store.record("mem::compress", 200, false);
    const before = await store.get("mem::compress");
    expect(before?.totalCalls).toBe(2);

    const res = await store.reset("mem::compress");
    expect(res.cleared).toEqual(["mem::compress"]);
    expect(kv.delete).toHaveBeenCalledWith(KV.metrics, "mem::compress");

    const after = await store.get("mem::compress");
    expect(after).toBeNull();
    const persisted = await kv.get(KV.metrics, "mem::compress");
    expect(persisted).toBeNull();
  });

  it("resets all functions when no functionId is given", async () => {
    await store.record("mem::compress", 100, true);
    await store.record("mem::summarize", 50, true);

    const res = await store.reset();
    expect(res.cleared.sort()).toEqual(["mem::compress", "mem::summarize"]);
    expect((await store.getAll()).length).toBe(0);
  });

  it("is safe when there is nothing to reset", async () => {
    const res = await store.reset("mem::ghost");
    expect(res.cleared).toEqual(["mem::ghost"]);
  });
});
