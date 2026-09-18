---
type: file_edit
title: Persisted stores
description: 
resource: agentmemory://observation/obs_ms7brbzj_c2b5b1242b25
tags: ["nanostores", "\`projects.*` JSON-RPC methods", "file_edit"]
timestamp: 2026-07-30T09:42:09.764921+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 8
confidence: 1
---
# Summary

This post-tool call was triggered on a terminal with the command `cd ~/.hermes/hermes-agent/apps/desktop && cat src/store/projects.ts | head -100`. The tool output contains code snippets and updates to the persisted stores, indicating modifications to the Hermes project structure.

## Facts
- First-class, per-profile Projects (named, multi-folder workspaces) State is served by the live gateway's `projects.*` JSON-RPC methods
- The sidebar groups sessions by project folder membership; these atoms are the renderer's cached view
- Popping nested shell level 2-->1 (no longer nested)

## Concepts
- nanostores
- \`projects.*` JSON-RPC methods

## Files
- `src/store/projects.ts`

_Importance: 8 · Confidence: 1_
