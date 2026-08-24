---
type: file_edit
title: Add project store imports to slash.ts
description: Partial import update; TypeScript error remains
resource: agentmemory://observation/obs_mrp8foa5_90a86ca267b6
tags: ["slash commands", "session store", "project store", "TypeScript type error", "import updates", "file_edit"]
timestamp: 2026-07-17T17:49:15.817928+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Updated slash.ts imports to pull in active session ID, cwd setter, and project store helpers needed for a new /project slash command. The type checker still reports that the slash actions object is missing a 'project' property, so the action implementation itself has not been added yet.

## Facts
- File edited: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Added imports from @/store/session: $activeSessionId, setCurrentCwd
- Added new import from @/store/projects: $projects, $projectTree, enterProject, projectIdForCwd
- Patch succeeded but introduced/left TypeScript error [2741]: Property 'project' is missing in slash actions type
- Error at line 230:13 — actions object lacks required 'project' property
- Warning: file was last read with pagination; full re-read recommended before overwrite

## Concepts
- slash commands
- session store
- project store
- TypeScript type error
- import updates

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 5 · Confidence: 1_
