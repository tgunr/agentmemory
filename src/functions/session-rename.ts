import type { ISdk } from "iii-sdk";
import type { StateKV } from "../state/kv.js";
import { KV } from "../state/schema.js";
import type { Session } from "../types.js";
import { recordAudit } from "./audit.js";

export interface SessionRenameInput {
  sessionId: string;
  title: string;
}

export interface SessionRenameOutput {
  success: boolean;
  session: Session;
}

export async function renameSession(
  data: SessionRenameInput,
  kv: StateKV,
): Promise<SessionRenameOutput> {
  if (!data.sessionId || typeof data.sessionId !== "string") {
    throw new Error("sessionId is required and must be a non-empty string");
  }
  if (!data.title || typeof data.title !== "string" || !data.title.trim()) {
    throw new Error("title is required and must be a non-empty string");
  }

  const title = data.title.trim().slice(0, 200);
  const session = await kv.get<Session>(KV.sessions, data.sessionId);

  if (!session) {
    throw new Error(`Session "${data.sessionId}" not found`);
  }

  await kv.update(KV.sessions, data.sessionId, [
    { type: "set", path: "firstPrompt", value: title },
    { type: "set", path: "summary", value: title },
  ]);

  const updated = await kv.get<Session>(KV.sessions, data.sessionId);
  const now = new Date().toISOString();

  await recordAudit({
    type: "session",
    operation: "rename",
    sessionId: data.sessionId,
    timestamp: now,
    details: { title },
  });

  return { success: true, session: updated! };
}

export function registerSessionRenameFunction(sdk: ISdk, kv: StateKV): void {
  sdk.registerFunction(
    "mem::session::rename",
    async (data: SessionRenameInput) => renameSession(data, kv),
  );
}
