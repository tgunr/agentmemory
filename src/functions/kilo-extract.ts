import type { ISdk } from "iii-sdk";
import type { StateKV } from "../state/kv.js";
import type { CompressedObservation, KiloExtractResult } from "../types.js";
import { KV, generateId } from "../state/schema.js";

interface MemoryInput {
  title: string;
  content: string;
  type: string;
  concepts: string[];
  files: string[];
  sessionIds: string[];
}

export async function extractSessionMemories(
  sessionId: string,
  extractWhat: string,
  sdk: ISdk,
  kv: StateKV,
): Promise<{ success: boolean; memories?: KiloExtractResult; savedCount?: number; error?: string }> {
  const session = await kv.get<{ id: string }>(KV.sessions, sessionId);
  if (!session) {
    return { success: false, error: `Session not found: ${sessionId}` };
  }

  const observations = await kv.list<CompressedObservation>(KV.observations(sessionId));

  if (observations.length === 0) {
    return { success: false, error: "No observations found in session" };
  }

  const allNarratives = observations
    .map((o) => `${o.title}: ${o.narrative}`)
    .join("\n\n");

  const allFiles = [...new Set(observations.flatMap((o) => o.files || []))];

  let promptType = "all";
  if (extractWhat === "decisions") promptType = "decisions";
  else if (extractWhat === "patterns") promptType = "patterns";
  else if (extractWhat === "bugs") promptType = "bugs";
  else if (extractWhat === "architecture") promptType = "architecture";

  const extractPrompt = `Extract ${promptType} from this session's observations.

Session observations:
${allNarratives.slice(0, 8000)}

Files modified:
${allFiles.slice(0, 20).join("\n")}

Return ONLY a valid JSON object with this structure:
{
  "decisions": [{"title": "...", "content": "...", "files": ["..."]}],
  "patterns": [{"title": "...", "content": "..."}],
  "bugs": [{"title": "...", "content": "...", "solution": "..."}],
  "architecture": [{"title": "...", "content": "...", "files": ["..."]}]
}

Only fill the arrays relevant to the requested type "${promptType}". Leave others empty.
Return valid JSON only, no markdown formatting, no explanation.`;

  try {
    const result = await sdk.trigger<{
      systemPrompt: string;
      userPrompt: string;
    }, { parsed: unknown }>({
      function_id: "mem::compress",
      payload: {
        systemPrompt: "You are an expert software analyst. Extract structured information from session observations.",
        userPrompt: extractPrompt,
      },
    });

    let parsed: KiloExtractResult;
    if (result && typeof result === "object" && "parsed" in result) {
      parsed = (result as { parsed: KiloExtractResult }).parsed;
    } else {
      parsed = result as unknown as KiloExtractResult;
    }

    if (!parsed || typeof parsed !== "object") {
      return { success: false, error: "Failed to parse extraction result" };
    }

    const normalized: KiloExtractResult = {
      decisions: Array.isArray(parsed.decisions) ? parsed.decisions : [],
      patterns: Array.isArray(parsed.patterns) ? parsed.patterns : [],
      bugs: Array.isArray(parsed.bugs) ? parsed.bugs : [],
      architecture: Array.isArray(parsed.architecture) ? parsed.architecture : [],
    };

    let savedCount = 0;

    for (const decision of normalized.decisions) {
      if (await saveAsMemory(sdk, {
        title: decision.title,
        content: decision.content,
        type: "workflow",
        concepts: [sessionId, "decision"],
        files: decision.files || [],
        sessionIds: [sessionId],
      })) {
        savedCount++;
      }
    }

    for (const pattern of normalized.patterns) {
      if (await saveAsMemory(sdk, {
        title: pattern.title,
        content: pattern.content,
        type: "pattern",
        concepts: [sessionId, "pattern"],
        files: [],
        sessionIds: [sessionId],
      })) {
        savedCount++;
      }
    }

    for (const bug of normalized.bugs) {
      if (await saveAsMemory(sdk, {
        title: bug.title,
        content: `${bug.content}${bug.solution ? `\nSolution: ${bug.solution}` : ""}`,
        type: "bug",
        concepts: [sessionId, "bug"],
        files: [],
        sessionIds: [sessionId],
      })) {
        savedCount++;
      }
    }

    for (const arch of normalized.architecture) {
      if (await saveAsMemory(sdk, {
        title: arch.title,
        content: arch.content,
        type: "architecture",
        concepts: [sessionId, "architecture"],
        files: arch.files || [],
        sessionIds: [sessionId],
      })) {
        savedCount++;
      }
    }

    return {
      success: true,
      memories: normalized,
      savedCount,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to extract memories";
    return { success: false, error: message };
  }
}

async function saveAsMemory(sdk: ISdk, input: MemoryInput): Promise<boolean> {
  try {
    await sdk.trigger({
      function_id: "mem::remember",
      payload: {
        content: input.content,
        type: input.type,
        concepts: input.concepts,
        files: input.files,
      },
    });
    return true;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`[kilo-extract] Failed to save memory: ${msg}`);
    return false;
  }
}
