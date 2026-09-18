---
type: Observation
title: skill_manage
description: {"action":"write_file","file_content":"# AgentMemory compression responsiveness (local Ollama)\n\n## The UI banner\n`Se…
resource: agentmemory://observation/obs_mrtgrs9c_f2bc99c78a0d
tags: ["observation"]
timestamp: 2026-07-20T16:53:42.476356+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"action":"write_file","file_content":"# AgentMemory compression responsiveness (local Ollama)\n\n## The UI banner\n`Set AGENTMEMORY_AUTO_COMPRESS=true and provide an LLM key.` is a **nag, not an error**.\n- The system runs fine on **synthetic compression** (zero-LLM) — search/indexing still work.\n- `OPENAI_API_KEY` is already set and active (`~/.agentmemory/.env` line 189, uncommented); graph e…

## Files
- `references/compression-tuning.md`

_Importance: 5 · Confidence: 0.3_
