import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mockSdk, mockKV } from "./helpers/mocks.js";
import { registerApiTriggers } from "../src/triggers/api.js";
import { setVectorIndex, setEmbeddingProvider } from "../src/functions/search.js";
import { VectorIndex } from "../src/state/vector-index.js";

describe("/agentmemory/livez and /agentmemory/config/flags", () => {
  let sdk: ReturnType<typeof mockSdk>;
  let kv: ReturnType<typeof mockKV>;

  beforeEach(() => {
    sdk = mockSdk();
    kv = mockKV();
    setVectorIndex(null);
    setEmbeddingProvider(null);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    setVectorIndex(null);
    setEmbeddingProvider(null);
  });

  it("livez includes vector.size", async () => {
    registerApiTriggers(sdk as never, kv as never);
    const res = await sdk.trigger({ function_id: "api::liveness", payload: undefined });
    expect((res as { status_code: number }).status_code).toBe(200);
    const body = (res as { body: Record<string, unknown> }).body;
    expect(body.status).toBe("ok");
    expect(body.vector).toEqual({ size: 0 });
  });

  it("livez reflects non-zero vector index size", async () => {
    const idx = new VectorIndex();
    idx.add("o1", "s1", new Float32Array([0.1, 0.2, 0.3]));
    idx.add("o2", "s1", new Float32Array([0.2, 0.3, 0.4]));
    idx.add("o3", "s1", new Float32Array([0.3, 0.4, 0.5]));
    setVectorIndex(idx);
    registerApiTriggers(sdk as never, kv as never);
    const res = await sdk.trigger({ function_id: "api::liveness", payload: undefined });
    const body = (res as { body: Record<string, unknown> }).body;
    expect(body.vector).toEqual({ size: 3 });
  });

  it("config/flags reports embeddingEnabled=false when no provider is configured", async () => {
    vi.stubEnv("EMBEDDING_PROVIDER", "");
    vi.stubEnv("OPENAI_API_KEY", "");
    vi.stubEnv("GEMINI_API_KEY", "");
    vi.stubEnv("VOYAGE_API_KEY", "");
    vi.stubEnv("COHERE_API_KEY", "");
    vi.stubEnv("OPENROUTER_API_KEY", "");
    registerApiTriggers(sdk as never, kv as never);
    const res = await sdk.trigger({ function_id: "api::config-flags", payload: {} });
    const body = (res as { body: Record<string, unknown> }).body;
    expect(body.embeddingProvider).toBe("none");
    expect(body.embeddingEnabled).toBe(false);
  });

  it("config/flags reports embeddingEnabled=true when a provider is configured", async () => {
    vi.stubEnv("EMBEDDING_PROVIDER", "local");
    registerApiTriggers(sdk as never, kv as never);
    const res = await sdk.trigger({ function_id: "api::config-flags", payload: {} });
    const body = (res as { body: Record<string, unknown> }).body;
    expect(body.embeddingProvider).toBe("embeddings");
    expect(body.embeddingEnabled).toBe(true);
  });
});
