---
type: file_edit
title: Add projectIdForCwd import to slash.ts
description: Import update for project store helpers
resource: agentmemory://observation/obs_mrp8eo6a_1d4ae937b5c7
tags: ["import update", "project store", "slash commands", "projectIdForCwd", "file_edit"]
timestamp: 2026-07-17T17:48:29.023155+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Added projectIdForCwd to the projects store import in the slash command hook. This prepares the file to resolve a project ID from the current working directory. The file had only been partially read previously, so care is needed before further overwrites.

## Facts
- Patched slash.ts import from @/store/projects
- Added projectIdForCwd to existing imports: $projects, $projectTree, enterProject
- Patch succeeded; lint skipped (LSP handles .ts)
- Warning: file was last read with offset/limit pagination (partial view)

## Concepts
- import update
- project store
- slash commands
- projectIdForCwd

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
