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
  console.log(`[kilo-extract] Session ${sessionId}: ${observations.length} observations`);

  if (observations.length === 0) {
    return { success: false, error: "No observations found in session" };
  }

  const normalized: KiloExtractResult = {
    decisions: [],
    patterns: [],
    bugs: [],
    architecture: [],
  };

  const allFiles = [...new Set(observations.flatMap((o) => o.files || []))];

  for (const obs of observations) {
    const narrative = obs.narrative || "";
    const title = obs.title || "";
    const type = obs.type || "";
    const files = obs.files || [];
    const lowerTitle = title.toLowerCase();
    const lowerNarrative = narrative.toLowerCase();

    if (extractWhat === "all" || extractWhat === "decisions") {
      if (type === "decision" || lowerTitle.includes("decid") || lowerTitle.includes("chose") ||
          lowerTitle.includes("approach") || lowerTitle.includes("implement") || type === "file_edit") {
        normalized.decisions.push({
          title,
          content: narrative,
          files,
        });
      }
    }

    if (extractWhat === "all" || extractWhat === "patterns") {
      if ((type === "task" || type === "conversation") && narrative.length > 50) {
        normalized.patterns.push({
          title,
          content: narrative.slice(0, 300),
        });
      }
    }

    if (extractWhat === "all" || extractWhat === "bugs") {
      if (type === "error" || lowerTitle.includes("error") || lowerTitle.includes("fail") ||
          lowerNarrative.includes("error") || lowerNarrative.includes("failed")) {
        normalized.bugs.push({
          title,
          content: narrative.slice(0, 300),
          solution: undefined,
        });
      }
    }

    if (extractWhat === "all" || extractWhat === "architecture") {
      if (files.length > 2 || lowerTitle.includes("arch") || lowerTitle.includes("structure") ||
          lowerTitle.includes("file") || type === "file_write") {
        normalized.architecture.push({
          title,
          content: narrative,
          files,
        });
      }
    }
  }

  if (extractWhat === "all" && normalized.decisions.length === 0) {
    for (const obs of observations) {
      if (obs.type === "file_edit" || obs.type === "file_write") {
        normalized.decisions.push({
          title: obs.title || `File modification: ${obs.files?.[0] || "unknown"}`,
          content: obs.narrative || "",
          files: obs.files || [],
        });
      }
    }
  }

  if (extractWhat === "all" && normalized.architecture.length === 0 && allFiles.length > 0) {
    normalized.architecture.push({
      title: `Files involved in session (${allFiles.length} files)`,
      content: `Session touched ${allFiles.length} files across the project.`,
      files: allFiles.slice(0, 30),
    });
  }

  if (extractWhat === "all" && normalized.patterns.length === 0 && observations.length > 0) {
    const sessionSummary = observations
      .slice(0, 5)
      .map((o) => `${o.title}: ${o.narrative?.slice(0, 200)}`)
      .join("\n\n");
    normalized.patterns.push({
      title: `Session overview: (session as any).summary || sessionId`,
      content: sessionSummary,
    });
  }

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
