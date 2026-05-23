import { homedir } from "os";
import { join } from "path";
import { access, readFile, stat } from "fs/promises";
import type { StateKV } from "../state/kv.js";
import type { Session, CompressedObservation } from "../types.js";
import type { KiloSessionImportOptions } from "../types.js";
import { KV, generateId } from "../state/schema.js";

interface GlobalState {
  taskHistory?: Array<{
    id: string;
    task: string;
    ts: number;
    workspace: string;
    mode?: string;
    tokensIn?: number;
    tokensOut?: number;
  }>;
}

interface TaskMetadata {
  filesInContext?: Array<{ path: string }>;
  edited?: string[];
  created?: string[];
}

interface ApiMessage {
  role?: string;
  content?: string | Array<{ type?: string; text?: string; name?: string }>;
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function readJsonFile<T>(path: string): Promise<T | null> {
  try {
    const content = await readFile(path, "utf-8");
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

async function getKiloDataDir(): Promise<string | null> {
  const home = homedir();
  const candidates = [
    join(home, ".kilocode", "cli"),
    join(home, ".kilo", "cli"),
    join(home, ".opencode", "cli"),
  ];
  for (const p of candidates) {
    try {
      const s = await stat(p);
      if (s.isDirectory()) return p;
    } catch {
      // continue
    }
  }
  return null;
}

export async function importLocalSession(
  sessionId: string,
  options: KiloSessionImportOptions,
  kv: StateKV,
): Promise<{ success: boolean; agentmemorySessionId?: string; observationsCreated?: number; error?: string }> {
  const dataDir = await getKiloDataDir();
  const sessionDir = join(dataDir, "global", "tasks", sessionId);

  if (!(await fileExists(sessionDir))) {
    return { success: false, error: `Session directory not found: ${sessionDir}` };
  }

  const globalStatePath = join(dataDir, "global", "global-state.json");
  const globalState = await readJsonFile<GlobalState>(globalStatePath);
  const sessionEntry = globalState?.taskHistory?.find((s) => s.id === sessionId);

  const project = sessionEntry?.workspace || "";
  const cwd = sessionEntry?.workspace || process.cwd();
  const title = sessionEntry?.task?.slice(0, 200) || sessionId;

  const agentmemorySessionId = `kilo_${sessionId}`;

  const existingSession = await kv.get<Session>(KV.sessions, agentmemorySessionId);
  if (existingSession) {
    return { success: false, error: `Session already exists in AgentMemory: ${agentmemorySessionId}` };
  }

  const session: Session = {
    id: agentmemorySessionId,
    project,
    cwd,
    startedAt: sessionEntry ? new Date(sessionEntry.ts).toISOString() : new Date().toISOString(),
    status: "completed",
    observationCount: 0,
    summary: title,
    firstPrompt: title,
  };

  await kv.set(KV.sessions, agentmemorySessionId, session);

  let observationsCreated = 0;

  if (options.saveObservations) {
    const apiHistoryPath = join(sessionDir, "api_conversation_history.json");
    const apiHistory = await readJsonFile<ApiMessage[]>(apiHistoryPath);

    if (apiHistory && Array.isArray(apiHistory)) {
      for (let i = 0; i < apiHistory.length; i++) {
        const msg = apiHistory[i];
        if (!msg.role) continue;

        const content = typeof msg.content === "string" ? msg.content : "";
        if (!content || content.length < 10) continue;

        const obsType = msg.role === "user" ? "conversation" as const :
          msg.role === "assistant" ? "conversation" as const : "other" as const;

        const observation: CompressedObservation = {
          id: generateId(),
          sessionId: agentmemorySessionId,
          timestamp: session.startedAt,
          type: obsType,
          title: `${msg.role} message ${i + 1}`,
          narrative: content.slice(0, 500),
          facts: content.length > 200 ? [content.slice(0, 200)] : [content],
          concepts: [],
          files: [],
          importance: msg.role === "user" ? 0.7 : 0.3,
        };

        await kv.set(KV.observations(agentmemorySessionId), observation.id, observation);
        observationsCreated++;
      }
    }

    const metadataPath = join(sessionDir, "task_metadata.json");
    const metadata = await readJsonFile<TaskMetadata>(metadataPath);

    if (metadata) {
      const filesModified = new Set<string>();
      if (metadata.filesInContext) {
        for (const f of metadata.filesInContext) {
          if (f.path) filesModified.add(f.path);
        }
      }
      if (metadata.edited) {
        for (const f of metadata.edited) filesModified.add(f);
      }
      if (metadata.created) {
        for (const f of metadata.created) filesModified.add(f);
      }

      if (filesModified.size > 0) {
        const filesObs: CompressedObservation = {
          id: generateId(),
          sessionId: agentmemorySessionId,
          timestamp: session.startedAt,
          type: "file_write",
          title: `Files modified in session (${filesModified.size} files)`,
          narrative: `Session modified ${filesModified.size} files across the project.`,
          facts: Array.from(filesModified).slice(0, 20),
          concepts: [],
          files: Array.from(filesModified).slice(0, 50),
          importance: 0.6,
        };
        await kv.set(KV.observations(agentmemorySessionId), filesObs.id, filesObs);
        observationsCreated++;
      }
    }
  }

  await kv.update(KV.sessions, agentmemorySessionId, [
    { type: "set", path: "observationCount", value: observationsCreated },
  ]);

  return {
    success: true,
    agentmemorySessionId,
    observationsCreated,
  };
}

export async function importCloudSession(
  sessionId: string,
  options: KiloSessionImportOptions,
  kv: StateKV,
): Promise<{ success: boolean; agentmemorySessionId?: string; observationsCreated?: number; error?: string }> {
  const dataDir = await getKiloDataDir();
  const configPath = join(dataDir, "config.json");
  const config = await readJsonFile<Record<string, unknown>>(configPath);
  const token = config?.["kilocodeToken"] as string | undefined;

  if (!token) {
    return { success: false, error: "No Kilo cloud token found" };
  }

  const agentmemorySessionId = `kilo_cloud_${sessionId}`;

  const existingSession = await kv.get<Session>(KV.sessions, agentmemorySessionId);
  if (existingSession) {
    return { success: false, error: `Session already exists in AgentMemory: ${agentmemorySessionId}` };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const url = `https://ingest.kilosessions.ai/api/session/${sessionId}/export`;
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return { success: false, error: `Cloud API error: ${response.status}` };
    }

    const data = await response.json() as Record<string, unknown>;
    const info = data["info"] as Record<string, unknown> | undefined;
    const messages = data["messages"] as unknown[] | undefined;

    const title = (info?.["title"] as string) || sessionId;
    const directory = (info?.["directory"] as string) || "";
    const createdTime = info?.["time"] as Record<string, unknown> | undefined;
    const startedAt = (createdTime?.["created"] as string) || new Date().toISOString();

    const session: Session = {
      id: agentmemorySessionId,
      project: directory,
      cwd: directory || process.cwd(),
      startedAt,
      status: "completed",
      observationCount: 0,
      summary: title,
      firstPrompt: title,
    };

    await kv.set(KV.sessions, agentmemorySessionId, session);

    let observationsCreated = 0;

    if (options.saveObservations && messages && Array.isArray(messages)) {
      for (const msg of messages) {
        const m = msg as Record<string, unknown>;
        const parts = m["parts"] as unknown[] | undefined;

        if (parts && Array.isArray(parts)) {
          for (const part of parts) {
            const p = part as Record<string, unknown>;
            const partType = p["type"] as string | undefined;
            const content = p["content"] as string | undefined;

            if (content && content.length > 10) {
              const obsType = partType === "prompt" ? "conversation" as const :
                partType === "tool_use" ? "task" as const :
                partType === "file_edit" ? "file_edit" as const :
                partType === "error" ? "error" as const : "other" as const;

              const observation: CompressedObservation = {
                id: generateId(),
                sessionId: agentmemorySessionId,
                timestamp: startedAt,
                type: obsType,
                title: `${partType || "message"}`,
                narrative: content.slice(0, 500),
                facts: [content.slice(0, 200)],
                concepts: [],
                files: [],
                importance: obsType === "error" ? 0.8 : 0.4,
              };

              await kv.set(KV.observations(agentmemorySessionId), observation.id, observation);
              observationsCreated++;
            }
          }
        }
      }
    }

    await kv.update(KV.sessions, agentmemorySessionId, [
      { type: "set", path: "observationCount", value: observationsCreated },
    ]);

    return {
      success: true,
      agentmemorySessionId,
      observationsCreated,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to import cloud session";
    return { success: false, error: message };
  }
}
