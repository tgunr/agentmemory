---
type: FileRead
title: Read /project slash command implementation
description: Lines 343-397 of use-prompt-actions/slash.ts
resource: agentmemory://observation/obs_mrp8ejiu_c13306985dc6
tags: ["Slash commands", "Session management", "Project resolution", "Working directory mapping", "React hooks", "fileread"]
timestamp: 2026-07-17T17:48:22.995502+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The agent is reading the implementation of the /project slash command in a desktop app's session hooks. This code handles parsing the project argument, matching it against explicit and auto-discovered projects, and resolving the target working directory (cwd) for the active session.

## Facts
- File contains 692 total lines; read lines 343-397
- Implements /project slash command to re-home active session to project cwd
- Without arguments, displays current project status using projectIdForCwd
- Matches target name case-insensitively against $projects (explicit) and $projectTree (auto)
- Extracts project cwd from primary_path (explicit) or path (auto) properties

## Concepts
- Slash commands
- Session management
- Project resolution
- Working directory mapping
- React hooks

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
