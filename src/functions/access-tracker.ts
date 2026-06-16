import { KV } from "../state/schema.js";
import type { IKVStore } from "../state/kv.js";
import { withKeyedLock } from "../state/keyed-mutex.js";
import { logger } from "../logger.js";

const RECENT_CAP = 20;

export interface AccessLog {
  memoryId: string;
  count: number;
  lastAt: string;
  recent: number[];
}

export function emptyAccessLog(memoryId: string): AccessLog {
  return { memoryId, count: 0, lastAt: "", recent: [] };
}

export function normalizeAccessLog(raw: unknown): AccessLog {
  const r = (raw ?? {}) as Partial<AccessLog>;
  const rawCount =
    typeof r.count === "number" && Number.isFinite(r.count) ? r.count : 0;
  const count = Math.max(0, Math.floor(rawCount));
  const rawRecent = Array.isArray(r.recent)
    ? r.recent.filter(
        (x): x is number => typeof x === "number" && Number.isFinite(x),
      )
    : [];
  const recent =
    rawRecent.length > RECENT_CAP ? rawRecent.slice(-RECENT_CAP) : rawRecent;
  return {
    memoryId: typeof r.memoryId === "string" ? r.memoryId : "",
    count: Math.max(count, recent.length),
    lastAt: typeof r.lastAt === "string" ? r.lastAt : "",
    recent,
  };
}

export async function getAccessLog(
  kv: IKVStore,
  memoryId: string,
): Promise<AccessLog> {
  try {
    const raw = await kv.get<AccessLog>(KV.accessLog, memoryId);
    if (!raw) return emptyAccessLog(memoryId);
    const normalized = normalizeAccessLog(raw);
    if (!normalized.memoryId) normalized.memoryId = memoryId;
    return normalized;
  } catch {
    return emptyAccessLog(memoryId);
  }
}

export async function recordAccess(
  kv: IKVStore,
  memoryId: string,
  timestampMs?: number,
): Promise<void> {
  if (!memoryId) return;
  const ts = timestampMs ?? Date.now();
  try {
    await withKeyedLock(`mem:access:${memoryId}`, async () => {
      const existing = await getAccessLog(kv, memoryId);
      existing.count += 1;
      existing.lastAt = new Date(ts).toISOString();
      existing.recent.push(ts);
      if (existing.recent.length > RECENT_CAP) {
        existing.recent = existing.recent.slice(-RECENT_CAP);
      }
      await kv.set(KV.accessLog, memoryId, existing);
    });
  } catch (err) {
    try {
      logger.warn("recordAccess failed", {
        memoryId,
        error: err instanceof Error ? err.message : String(err),
      });
    } catch {}
  }
}

export async function recordAccessBatch(
  kv: IKVStore,
  memoryIds: string[],
  timestampMs?: number,
): Promise<void> {
  if (!memoryIds || memoryIds.length === 0) return;
  const ts = timestampMs ?? Date.now();
  const unique = Array.from(new Set(memoryIds.filter(Boolean)));
  await Promise.allSettled(unique.map((id) => recordAccess(kv, id, ts)));
}

export async function deleteAccessLog(
  kv: IKVStore,
  memoryId: string,
): Promise<void> {
  if (!memoryId) return;
  try {
    await withKeyedLock(`mem:access:${memoryId}`, async () => {
      await kv.delete(KV.accessLog, memoryId);
    });
  } catch {}
}

