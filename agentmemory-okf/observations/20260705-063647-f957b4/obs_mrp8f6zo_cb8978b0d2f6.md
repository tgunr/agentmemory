---
type: FileRead
title: Read slash command handler for project management
description: Examining /project slash command implementation in session hooks
resource: agentmemory://observation/obs_mrp8f6zo_cb8978b0d2f6
tags: ["React hooks", "slash commands", "project management", "session management", "TypeScript", "desktop application", "gateway requests", "fileread"]
timestamp: 2026-07-17T17:48:53.408913+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read implementation of /project slash command handler in the session hooks. The command allows users to switch the active session's working directory to a project's root, with support for both explicitly defined projects and auto-detected projects. The handler includes case-insensitive name matching, proper error notifications, and gateway requests to persist the cwd change.

## Facts
- File contains slash command handlers in use-prompt-actions hook
- /project command re-homes active session to project's cwd and scopes sidebar
- Project lookup is case-insensitive, matches against explicit projects (.name/.slug) and auto-projects (.label)
- Explicit projects have primary_path, auto-projects have path property
- Uses requestGateway('session.cwd.set') to update session working directory
- Shows toast notification when no active session exists
- Error handling includes notifyError for failed operations

## Concepts
- React hooks
- slash commands
- project management
- session management
- TypeScript
- desktop application
- gateway requests

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
