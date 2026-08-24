---
type: FileRead
title: Read slash command handler hook
description: useSlashCommand hook for desktop session slash commands
resource: agentmemory://observation/obs_mrp84rc2_61563bdfaae5
tags: ["React hooks", "slash commands", "command dispatch", "state management", "TypeScript interfaces", "fileread"]
timestamp: 2026-07-17T17:40:46.559415+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The agent read the slash.ts file to examine the useSlashCommand hook implementation. This hook is a core component responsible for parsing, dispatching, and executing slash commands within the desktop session context, managing session resolution and UI feedback.

## Facts
- File path: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Exports useSlashCommand React hook taking a SlashCommandDeps dependency object
- Defines SlashActionCtx interface for invocation context and withSlashOutput helper for inline UI rendering
- Integrates with multiple stores including session, composer, profile, notifications, and pet-generate

## Concepts
- React hooks
- slash commands
- command dispatch
- state management
- TypeScript interfaces

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
