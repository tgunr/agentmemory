---
type: file_edit
title: Add /project slash command to switch session cwd and sidebar scope
description: Implements project switching via gateway RPC and sidebar scoping
resource: agentmemory://observation/obs_mrp868kd_df76dd087c8c
tags: ["Slash commands", "Gateway RPC", "Session management", "Project switching", "Working directory (cwd)", "file_edit"]
timestamp: 2026-07-17T17:41:55.545855+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

A new `/project` slash command was added to allow users to switch the active session's working directory and scope the sidebar to a specific project. The command resolves the project by name, updates the session via a gateway RPC (`session.cwd.set`), and handles both explicit and auto-generated projects.

## Facts
- Added `project` handler to slash commands in use-prompt-actions/slash.ts
- Bare `/project` shows current project status via `copy.projectStatus`
- Matches target name case-insensitively against explicit projects and auto-projects (tree nodes)
- Resolves cwd from `primary_path` (explicit) or `path` (auto)
- Uses `requestGateway('session.cwd.set', ...)` to re-home active session
- Falls back to `setCurrentCwd(cwd)` if no active session exists
- Calls `enterProject(id)` to scope the sidebar

## Concepts
- Slash commands
- Gateway RPC
- Session management
- Project switching
- Working directory (cwd)

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 6 · Confidence: 1_
