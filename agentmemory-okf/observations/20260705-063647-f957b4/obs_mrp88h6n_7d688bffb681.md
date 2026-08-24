---
type: FileRead
title: Reviewed /project slash command behavior
description: Command re-homes the active session and scopes the sidebar to a project.
resource: agentmemory://observation/obs_mrp88h6n_7d688bffb681
tags: ["slash commands", "project-scoped sessions", "gateway RPC", "case-insensitive project lookup", "session cwd management", "fileread"]
timestamp: 2026-07-17T17:43:40.028535+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The /project action supports both status inspection and switching projects. Switching synchronizes the session cwd through gateway RPC when applicable, updates local cwd state, and changes the sidebar project scope.

## Facts
- Without an argument, /project resolves the active session's project via liveSessionProjectId and displays its explicit project name or tree-node label.
- Project lookup is case-insensitive across explicit project names/slugs and auto-project tree labels; failures report the available project names.
- The target cwd comes from primary_path for explicit projects or path for auto-projects, with an error notification when no path exists.
- For an active session, the command calls requestGateway('session.cwd.set', { session_id: sid, cwd }); otherwise it only updates the draft cwd.
- After changing cwd, it calls enterProject(id) to scope the sidebar and emits success or failure notifications.

## Concepts
- slash commands
- project-scoped sessions
- gateway RPC
- case-insensitive project lookup
- session cwd management

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
