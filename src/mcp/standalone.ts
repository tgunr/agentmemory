#!/usr/bin/env node

import { InMemoryKV } from "./in-memory-kv.js";
import { createStdioTransport } from "./transport.js";
import { getAllTools } from "./tools-registry.js";
import { getStandalonePersistPath } from "../config.js";
import { VERSION } from "../version.js";
import { generateId } from "../state/schema.js";
import {
  resolveHandle,
  invalidateHandle,
  type Handle,
  type ProxyHandle,
} from "./rest-proxy.js";

const IMPLEMENTED_TOOLS = new Set([
  "memory_save",
  "memory_recall",
  "memory_smart_search",
  "memory_sessions",
  "memory_export",
  "memory_audit",
  "memory_governance_delete",
]);

const SERVER_INFO = {
  name: "agentmemory",
  version: VERSION,
  protocolVersion: "2024-11-05",
};

const kv = new InMemoryKV(getStandalonePersistPath());
let modeAnnounced = false;

function getCurrentSessionId(): string | undefined {
  const fromEnv = process.env["AGENTMEMORY_SESSION_ID"];
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv.trim();
  return undefined;
}

function displayAgentmemoryUrl(): string {
  const raw = process.env["AGENTMEMORY_URL"];
  if (!raw || (raw.startsWith("${") && raw.endsWith("}"))) {
    return "http://localhost:3111";
  }
  return raw;
}

function announceMode(handle: Handle): void {
  if (modeAnnounced) return;
  modeAnnounced = true;
  if (handle.mode === "proxy") {
    process.stderr.write(
      `[@agentmemory/mcp] proxying to agentmemory server at ${handle.baseUrl}\n`,
    );
  } else {
    process.stderr.write(
      `[@agentmemory/mcp] no server reachable at ${displayAgentmemoryUrl()}; falling back to local InMemoryKV\n`,
    );
  }
}

function normalizeList(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((v) => (typeof v === "string" ? v.trim() : ""))
      .filter((v) => v.length > 0);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
  return [];
}

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;
function parseLimit(raw: unknown, fallback = DEFAULT_LIMIT): number {
  if (typeof raw !== "number" && typeof raw !== "string") return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return Math.min(Math.floor(n), MAX_LIMIT);
}

function textResponse(payload: unknown, pretty = false): {
  content: Array<{ type: string; text: string }>;
} {
  return {
    content: [
      { type: "text", text: JSON.stringify(payload, null, pretty ? 2 : 0) },
    ],
  };
}

interface Validated {
  tool: string;
  content?: string;
  type?: string;
  concepts?: string[];
  files?: string[];
  query?: string;
  limit?: number;
  format?: string;
  tokenBudget?: number;
  memoryIds?: string[];
  reason?: string;
}

function validate(toolName: string, args: Record<string, unknown>): Validated {
  if (!IMPLEMENTED_TOOLS.has(toolName)) {
    throw new Error(`Unknown tool: ${toolName}`);
  }
  const v: Validated = { tool: toolName };
  switch (toolName) {
    case "memory_save": {
      const content = args["content"];
      if (typeof content !== "string" || !content.trim()) {
        throw new Error("content is required");
      }
      v.content = content;
      v.type = (args["type"] as string) || "fact";
      v.concepts = normalizeList(args["concepts"]);
      v.files = normalizeList(args["files"]);
      return v;
    }
    case "memory_recall":
    case "memory_smart_search": {
      const query = args["query"];
      if (typeof query !== "string" || !query.trim()) {
        throw new Error("query is required");
      }
      v.query = query.trim();
      v.limit = parseLimit(args["limit"]);
      const fmt = args["format"];
      if (typeof fmt === "string" && fmt.trim()) {
        v.format = fmt.trim().toLowerCase();
      }
      const budget = args["token_budget"];
      if (typeof budget === "number" && Number.isFinite(budget) && budget > 0) {
        v.tokenBudget = Math.floor(budget);
      } else if (typeof budget === "string" && budget.trim()) {
        const n = Number(budget);
        if (Number.isFinite(n) && n > 0) v.tokenBudget = Math.floor(n);
      }
      return v;
    }
    case "memory_sessions": {
      v.limit = parseLimit(args["limit"], 20);
      return v;
    }
    case "memory_governance_delete": {
      const ids = normalizeList(args["memoryIds"]);
      if (ids.length === 0) throw new Error("memoryIds is required");
      v.memoryIds = ids;
      v.reason = (args["reason"] as string) || "plugin skill request";
      return v;
    }
    case "memory_export":
      return v;
    case "memory_audit": {
      v.limit = parseLimit(args["limit"], 50);
      return v;
    }
    default:
      throw new Error(`Unknown tool: ${toolName}`);
  }
}

async function handleProxy(
  v: Validated,
  handle: ProxyHandle,
): Promise<{ content: Array<{ type: string; text: string }> }> {
  const sessionId = getCurrentSessionId();
  switch (v.tool) {
    case "memory_save": {
      const body: Record<string, unknown> = {
        content: v.content,
        title: v.title,
        type: v.type,
        concepts: v.concepts,
        files: v.files,
      };
      if (sessionId) body["sessionId"] = sessionId;
      const result = await handle.call("/agentmemory/remember", {
        method: "POST",
        body: JSON.stringify(body),
      });
      return textResponse(result);
    }
    case "memory_recall": {
      const body: Record<string, unknown> = {
        query: v.query,
        limit: v.limit,
        format: v.format ?? "full",
      };
      if (v.tokenBudget != null) body["token_budget"] = v.tokenBudget;
      if (sessionId) body["sessionId"] = sessionId;
      const result = await handle.call("/agentmemory/search", {
        method: "POST",
        body: JSON.stringify(body),
      });
      return textResponse(result, true);
    }
    case "memory_smart_search": {
      const body: Record<string, unknown> = { query: v.query, limit: v.limit };
      if (v.format != null) body["format"] = v.format;
      if (v.tokenBudget != null) body["token_budget"] = v.tokenBudget;
      if (sessionId) body["sessionId"] = sessionId;
      const result = await handle.call("/agentmemory/smart-search", {
        method: "POST",
        body: JSON.stringify(body),
      });
      return textResponse(result, true);
    }
    case "memory_sessions": {
      const result = await handle.call(
        `/agentmemory/sessions?limit=${v.limit}`,
        { method: "GET" },
      );
      return textResponse(result, true);
    }
    case "memory_governance_delete": {
      const result = await handle.call("/agentmemory/governance/memories", {
        method: "DELETE",
        body: JSON.stringify({ memoryIds: v.memoryIds, reason: v.reason }),
      });
      return textResponse(result);
    }
    case "memory_export": {
      const result = await handle.call("/agentmemory/export", { method: "GET" });
      return textResponse(result, true);
    }
    case "memory_audit": {
      const result = await handle.call(
        `/agentmemory/audit?limit=${v.limit}`,
        { method: "GET" },
      );
      return textResponse(result, true);
    }
    case "memory_find_session": {
      const body: Record<string, unknown> = { query: v.query, limit: v.limit };
      const result = await handle.call("/agentmemory/find-session", {
        method: "POST",
        body: JSON.stringify(body),
      });
      return textResponse(result, true);
    }
    default:
      throw new Error(`Unknown tool: ${v.tool}`);
  }
}

async function handleLocal(
  v: Validated,
  kvInstance: InMemoryKV,
): Promise<{ content: Array<{ type: string; text: string }> }> {
  const sessionId = getCurrentSessionId();
  switch (v.tool) {
    case "memory_save": {
      const id = generateId("mem");
      const isoNow = new Date().toISOString();
      await kvInstance.set("mem:memories", id, {
        id,
        type: v.type,
        title: (v.content || "").slice(0, 80),
        content: v.content,
        concepts: v.concepts,
        files: v.files,
        createdAt: isoNow,
        updatedAt: isoNow,
        strength: 7,
        version: 1,
        isLatest: true,
        sessionIds: sessionId ? [sessionId] : [],
      });
      kvInstance.persist();
      return textResponse({ saved: id });
    }

    case "memory_recall":
    case "memory_smart_search": {
      const query = (v.query || "").toLowerCase();
      const limit = v.limit ?? DEFAULT_LIMIT;
      const all =
        await kvInstance.list<Record<string, unknown>>("mem:memories");
      const results = all
        .filter((m) => {
          const text = [
            typeof m["title"] === "string" ? m["title"] : "",
            typeof m["content"] === "string" ? m["content"] : "",
            Array.isArray(m["files"]) ? m["files"].join(" ") : "",
            Array.isArray(m["concepts"]) ? m["concepts"].join(" ") : "",
            Array.isArray(m["sessionIds"]) ? m["sessionIds"].join(" ") : "",
            typeof m["id"] === "string" ? m["id"] : "",
          ]
            .join(" ")
            .toLowerCase();
          return query.split(/\s+/).every((word) => text.includes(word));
        })
        .slice(0, limit);
      return textResponse({ mode: "compact", results }, true);
    }

    case "memory_sessions": {
      const sessions =
        await kvInstance.list<Record<string, unknown>>("mem:sessions");
      const limit = v.limit ?? 20;
      return textResponse({ sessions: sessions.slice(0, limit) }, true);
    }

    case "memory_governance_delete": {
      let deleted = 0;
      for (const id of v.memoryIds || []) {
        const existing = await kvInstance.get("mem:memories", id);
        if (existing) {
          await kvInstance.delete("mem:memories", id);
          deleted++;
        }
      }
      kvInstance.persist();
      return textResponse({
        deleted,
        requested: (v.memoryIds || []).length,
        reason: v.reason,
      });
    }

    case "memory_export": {
      const memories = await kvInstance.list("mem:memories");
      const sessions = await kvInstance.list("mem:sessions");
      return textResponse({ version: VERSION, memories, sessions }, true);
    }

    case "memory_audit": {
      const all = await kvInstance.list("mem:audit");
      const limit = parseInt(v.limit || "20", 10);
      return textResponse(JSON.stringify({ entries: all.slice(-limit) }, null, 2));
    }
    case "memory_find_session": {
      const query = (v.query || "").toLowerCase();
      const limit = parseInt(v.limit || "10", 10);
      const sessions = await kvInstance.list<Record<string, unknown>>("mem:sessions");
      const matches = sessions.filter(function(s) {
        var project = String(s.project || "").split("/").pop().toLowerCase();
        var cwd = String(s.cwd || "").split("/").pop().toLowerCase();
        var prompt = String(s.firstPrompt || "").toLowerCase();
        var id = String(s.id || "").toLowerCase();
        return project.includes(query) || cwd.includes(query) || prompt.includes(query) || id.includes(query);
      }).slice(0, limit);
      const result = matches.map(function(s) {
        return { sessionId: s.id, project: String(s.project || "").split("/").pop() || s.cwd || "", observations: s.observationCount || 0, status: s.status || "unknown" };
      });
      return textResponse(JSON.stringify({ query, found: result.length, sessions: result }, null, 2));
    }
    default:
      throw new Error(`Unknown tool: ${v.tool}`);
  }
}

async function handleProxyGeneric(
  toolName: string,
  args: Record<string, unknown>,
  handle: ProxyHandle,
): Promise<{ content: Array<{ type: string; text: string }> }> {
  const sessionId = getCurrentSessionId();
  const augmentedArgs = sessionId ? { ...args, sessionId } : args;
  const result = (await handle.call("/agentmemory/mcp/call", {
    method: "POST",
    body: JSON.stringify({ name: toolName, arguments: augmentedArgs }),
  })) as { content?: Array<{ type: string; text: string }> } | null;
  if (result && Array.isArray(result.content)) {
    return { content: result.content };
  }
  return textResponse(result, true);
}

export async function handleToolCall(
  toolName: string,
  args: Record<string, unknown>,
  kvInstance: InMemoryKV = kv,
): Promise<{ content: Array<{ type: string; text: string }> }> {
  const handle = await resolveHandle();
  announceMode(handle);

  if (!IMPLEMENTED_TOOLS.has(toolName)) {
    if (handle.mode === "proxy") {
      try {
        return await handleProxyGeneric(toolName, args, handle);
      } catch (err) {
        process.stderr.write(
          `[@agentmemory/mcp] proxy call failed for ${toolName}: ${err instanceof Error ? err.message : String(err)}\n`,
        );
        invalidateHandle();
        throw err;
      }
    }
    throw new Error(
      `Unknown tool: ${toolName} (local fallback supports only ${[...IMPLEMENTED_TOOLS].join(", ")}; start an agentmemory server and set AGENTMEMORY_URL to use the full tool set)`,
    );
  }

  const validated = validate(toolName, args);
  if (handle.mode === "proxy") {
    try {
      return await handleProxy(validated, handle);
    } catch (err) {
      process.stderr.write(
        `[@agentmemory/mcp] proxy call failed for ${toolName}: ${err instanceof Error ? err.message : String(err)}; invalidating handle and falling back to local KV\n`,
      );
      invalidateHandle();
    }
  }
  return handleLocal(validated, kvInstance);
}

export async function handleToolsList(): Promise<{ tools: unknown[] }> {
  const debug = process.env["AGENTMEMORY_DEBUG"] === "1" || process.env["AGENTMEMORY_DEBUG"] === "true";
  const handle = await resolveHandle();
  announceMode(handle);
  if (debug) {
    process.stderr.write(
      `[@agentmemory/mcp] tools/list: handle.mode=${handle.mode}${handle.mode === "proxy" ? ` baseUrl=${handle.baseUrl}` : ""}\n`,
    );
  }
  if (handle.mode === "proxy") {
    try {
      const remote = (await handle.call("/agentmemory/mcp/tools", {
        method: "GET",
      })) as { tools?: unknown } | null;
      if (debug) {
        const shape = remote === null
          ? "null"
          : typeof remote !== "object"
            ? typeof remote
            : `keys=${Object.keys(remote as object).join(",")} toolsType=${Array.isArray((remote as { tools?: unknown }).tools) ? `array(len=${((remote as { tools: unknown[] }).tools).length})` : typeof (remote as { tools?: unknown }).tools}`;
        process.stderr.write(
          `[@agentmemory/mcp] tools/list: remote response shape: ${shape}\n`,
        );
      }
      if (remote && Array.isArray(remote.tools)) {
        if (debug) {
          process.stderr.write(
            `[@agentmemory/mcp] tools/list: returning ${remote.tools.length} tools from server\n`,
          );
        }
        return { tools: remote.tools };
      }
      process.stderr.write(
        `[@agentmemory/mcp] tools/list: server returned unexpected shape (no .tools array); falling back to local IMPLEMENTED_TOOLS list. Set AGENTMEMORY_DEBUG=1 to inspect response.\n`,
      );
    } catch (err) {
      process.stderr.write(
        `[@agentmemory/mcp] tools/list proxy failed: ${err instanceof Error ? err.message : String(err)}; falling back to local list\n`,
      );
      invalidateHandle();
    }
  }
  const fallback = getAllTools().filter((t) => IMPLEMENTED_TOOLS.has(t.name));
  if (debug) {
    process.stderr.write(
      `[@agentmemory/mcp] tools/list: returning ${fallback.length} local fallback tools (${fallback.map((t) => t.name).join(",")})\n`,
    );
  }
  return { tools: fallback };
}

const transport = createStdioTransport(async (method, params) => {
  switch (method) {
    case "initialize":
      return {
        protocolVersion: SERVER_INFO.protocolVersion,
        capabilities: { tools: { listChanged: false } },
        serverInfo: {
          name: SERVER_INFO.name,
          version: SERVER_INFO.version,
        },
      };

    case "notifications/initialized":
      return {};

    case "tools/list":
      return handleToolsList();

    case "tools/call": {
      const toolName = params.name as string;
      const toolArgs = (params.arguments as Record<string, unknown>) || {};
      try {
        return await handleToolCall(toolName, toolArgs);
      } catch (err) {
        return {
          content: [
            {
              type: "text",
              text: `Error: ${err instanceof Error ? err.message : String(err)}`,
            },
          ],
          isError: true,
        };
      }
    }

    default:
      throw new Error(`Unknown method: ${method}`);
  }
});

const activeSessionId = getCurrentSessionId();
if (activeSessionId) {
  process.stderr.write(
    `[@agentmemory/mcp] Session: ${activeSessionId}\n`,
  );
}
process.stderr.write(
  `[@agentmemory/mcp] Standalone MCP server v${SERVER_INFO.version} starting...\n`,
);
transport.start();

process.on("SIGINT", () => {
  kv.persist();
  process.exit(0);
});
process.on("SIGTERM", () => {
  kv.persist();
  process.exit(0);
});
