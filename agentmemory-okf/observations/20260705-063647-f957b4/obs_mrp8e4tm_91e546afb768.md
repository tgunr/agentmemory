---
type: FileRead
title: Read /project slash command handler logic
description: Examining project resolution and session re-homing in use-prompt-actions
resource: agentmemory://observation/obs_mrp8e4tm_91e546afb768
tags: ["Slash commands", "Session management", "Project resolution", "Working directory mapping", "React hooks", "fileread"]
timestamp: 2026-07-17T17:48:03.942854+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The agent read the implementation of the /project slash command within the prompt actions hook. This logic handles resolving the target project by name, determining its working directory, and preparing to re-home the active session to that directory.

## Facts
- File path: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts (692 lines total)
- Read lines 340-400, covering the /project slash command implementation
- Command re-homes the active session to the project's cwd and scopes the sidebar
- Matches project names case-insensitively against explicit ($projects) and auto ($projectTree) projects
- Resolves project path using primary_path for explicit projects or path for auto-projects

## Concepts
- Slash commands
- Session management
- Project resolution
- Working directory mapping
- React hooks

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
