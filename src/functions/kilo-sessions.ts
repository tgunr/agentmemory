import { homedir } from "os";
import { join } from "path";
import { access, readFile, stat } from "fs/promises";
import type { KiloLocalSessionEntry, KiloCloudSessionEntry, KiloSessionPreview } from "../types.js";

interface GlobalState {
  taskHistory?: KiloLocalSessionEntry[];
}

interface TaskMetadata {
  filesInContext?: Array<{ path: string }>;
  read?: string[];
  edited?: string[];
  created?: string[];
}

interface ApiMessage {
  role?: string;
  content?: string | Array<{ type?: string; text?: string }>;
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

export async function listLocalSessions(options?: { limit?: number; workspace?: string }): Promise<{ success: boolean; sessions: KiloLocalSessionEntry[]; error?: string }> {
  const dataDir = await getKiloDataDir();
  if (!dataDir) {
    return { success: false, sessions: [], error: "Kilo data directory not found" };
  }

  const globalStatePath = join(dataDir, "global", "global-state.json");
  if (!(await fileExists(globalStatePath))) {
    return { success: false, sessions: [], error: "global-state.json not found" };
  }

  const globalState = await readJsonFile<GlobalState>(globalStatePath);
  if (!globalState || !globalState.taskHistory) {
    return { success: true, sessions: [] };
  }

  let sessions = [...globalState.taskHistory];

  if (options?.workspace) {
    const ws = options.workspace.toLowerCase();
    sessions = sessions.filter((s) => s.workspace.toLowerCase().includes(ws));
  }

  sessions.sort((a, b) => b.ts - a.ts);

  if (options?.limit && options.limit > 0) {
    sessions = sessions.slice(0, options.limit);
  }

  return { success: true, sessions };
}

export async function previewLocalSession(sessionId: string): Promise<{ success: boolean; preview?: KiloSessionPreview; error?: string }> {
  const dataDir = await getKiloDataDir();
  if (!dataDir) {
    return { success: false, error: "Kilo data directory not found" };
  }

  const sessionDir = join(dataDir, "global", "tasks", sessionId);
  if (!(await fileExists(sessionDir))) {
    return { success: false, error: `Session directory not found: ${sessionDir}` };
  }

  const metadataPath = join(sessionDir, "task_metadata.json");
  const metadata = await readJsonFile<TaskMetadata>(metadataPath);

  const apiHistoryPath = join(sessionDir, "api_conversation_history.json");
  const apiHistory = await readJsonFile<ApiMessage[]>(apiHistoryPath);

  const messagesPath = join(sessionDir, "ui_messages.json");
  const uiMessages = await readJsonFile<unknown[]>(messagesPath);

  const globalStatePath = join(dataDir, "global", "global-state.json");
  const globalState = await readJsonFile<GlobalState>(globalStatePath);
  const sessionEntry = globalState?.taskHistory?.find((s) => s.id === sessionId);

  const title = sessionEntry?.task?.slice(0, 200) || "Untitled Session";
  const workspace = sessionEntry?.workspace || "";
  const mode = sessionEntry?.mode;
  const createdAt = sessionEntry ? new Date(sessionEntry.ts).toISOString() : new Date().toISOString();

  const filesModified = new Set<string>();
  if (metadata?.filesInContext) {
    for (const f of metadata.filesInContext) {
      if (f.path) filesModified.add(f.path);
    }
  }
  if (metadata?.edited) {
    for (const f of metadata.edited) {
      filesModified.add(f);
    }
  }
  if (metadata?.created) {
    for (const f of metadata.created) {
      filesModified.add(f);
    }
  }

  let firstPrompt: string | undefined;
  let toolCallCount = 0;
  let errors: string[] = [];

  if (apiHistory && Array.isArray(apiHistory)) {
    for (const msg of apiHistory) {
      if (msg.role === "user" && !firstPrompt) {
        if (typeof msg.content === "string") {
          firstPrompt = msg.content.slice(0, 200);
        } else if (Array.isArray(msg.content)) {
          for (const part of msg.content) {
            if (part.type === "text" && part.text) {
              firstPrompt = part.text.slice(0, 200);
              break;
            }
          }
        }
      }
      if (msg.role === "assistant") {
        toolCallCount++;
      }
    }
  }

  const messageCount = (apiHistory?.length ?? 0) + (uiMessages?.length ?? 0);

  const preview: KiloSessionPreview = {
    id: sessionId,
    source: "local",
    title,
    workspace,
    createdAt,
    updatedAt: createdAt,
    mode,
    tokensIn: sessionEntry?.tokensIn,
    tokensOut: sessionEntry?.tokensOut,
    totalCost: sessionEntry?.totalCost,
    size: sessionEntry?.size,
    firstPrompt,
    messageCount,
    fileCount: filesModified.size,
    toolCallCount,
    filesModified: Array.from(filesModified).slice(0, 50),
    errors,
  };

  return { success: true, preview };
}

export async function listCloudSessions(options?: { limit?: number }): Promise<{ success: boolean; sessions: KiloCloudSessionEntry[]; error?: string }> {
  const dataDir = await getKiloDataDir();
  if (!dataDir) {
    return { success: false, sessions: [], error: "Kilo data directory not found" };
  }

  const configPath = join(dataDir, "config.json");
  const config = await readJsonFile<Record<string, unknown>>(configPath);
  const token = config?.["kilocodeToken"] as string | undefined;

  if (!token) {
    return { success: false, sessions: [], error: "No Kilo cloud token found in config" };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const url = new URL("https://app.kilo.ai/api/kilo/cloud-sessions");
    url.searchParams.set("limit", String(options?.limit ?? 50));

    const response = await fetch(url.toString(), {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return { success: false, sessions: [], error: `Cloud API error: ${response.status} ${response.statusText}` };
    }

    const data = await response.json() as Record<string, unknown>;
    const cliSessions = (data["cliSessions"] ?? []) as KiloCloudSessionEntry[];

    return { success: true, sessions: cliSessions };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch cloud sessions";
    return { success: false, sessions: [], error: message };
  }
}

export async function previewCloudSession(sessionId: string): Promise<{ success: boolean; preview?: KiloSessionPreview; error?: string }> {
  const dataDir = await getKiloDataDir();
  if (!dataDir) {
    return { success: false, error: "Kilo data directory not found" };
  }

  const configPath = join(dataDir, "config.json");
  const config = await readJsonFile<Record<string, unknown>>(configPath);
  const token = config?.["kilocodeToken"] as string | undefined;

  if (!token) {
    return { success: false, error: "No Kilo cloud token found" };
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
      return { success: false, error: `Cloud API error: ${response.status} ${response.statusText}` };
    }

    const data = await response.json() as Record<string, unknown>;
    const info = data["info"] as Record<string, unknown> | undefined;
    const messages = data["messages"] as unknown[] | undefined;

    const title = (info?.["title"] as string) || sessionId;
    const directory = (info?.["directory"] as string) || "";
    const createdTime = info?.["time"] as Record<string, unknown> | undefined;
    const createdAt = (createdTime?.["created"] as string) || new Date().toISOString();

    const filesModified = new Set<string>();
    let firstPrompt: string | undefined;
    let toolCallCount = 0;
    let messageCount = 0;

    if (messages && Array.isArray(messages)) {
      messageCount = messages.length;
      for (const msg of messages) {
        const m = msg as Record<string, unknown>;
        const parts = m["parts"] as unknown[] | undefined;
        if (parts && Array.isArray(parts)) {
          for (const part of parts) {
            const p = part as Record<string, unknown>;
            const partType = p["type"] as string | undefined;
            if (partType === "prompt" && !firstPrompt) {
              const content = p["content"] as string | undefined;
              if (content) {
                firstPrompt = content.slice(0, 200);
              }
            }
            if (partType === "tool_use") {
              toolCallCount++;
            }
            if (partType === "file_edit" || partType === "file") {
              const filePath = p["file_path"] as string | undefined;
              if (filePath) {
                filesModified.add(filePath);
              }
            }
          }
        }
      }
    }

    const preview: KiloSessionPreview = {
      id: sessionId,
      source: "cloud",
      title,
      workspace: directory,
      createdAt,
      updatedAt: createdAt,
      firstPrompt,
      messageCount,
      fileCount: filesModified.size,
      toolCallCount,
      filesModified: Array.from(filesModified).slice(0, 50),
    };

    return { success: true, preview };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch cloud session";
    return { success: false, error: message };
  }
}
