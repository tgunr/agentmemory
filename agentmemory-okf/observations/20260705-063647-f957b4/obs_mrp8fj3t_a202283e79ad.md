---
type: FileRead
title: Slash command handler hook in desktop app session hooks
description: Reading slash.ts for slash command dispatch implementation
resource: agentmemory://observation/obs_mrp8fj3t_a202283e79ad
tags: ["React hooks", "slash command dispatcher", "chat runtime", "session management", "fileread"]
timestamp: 2026-07-17T17:49:09.108275+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

This file contains the slash command dispatcher logic extracted from usePromptActions. It handles various slash commands like /model, /palette, /branch, and provides a withSlashOutput helper to manage session resolution and inline output rendering. This is critical for command parsing in the chat interface.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Component: useSlashCommand hook exported from this file
- Imports include: getProfiles, parseCommandDispatch, sessionTitle, desktopSlashCommands, setSessionYolo, command-palette, composer, notifications, pet-gallery, pet-generate, profile, session stores
- Defines SlashActionCtx and SlashCommandDeps interfaces
- Uses React useCallback for memoization

## Concepts
- React hooks
- slash command dispatcher
- chat runtime
- session management

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 5 · Confidence: 1_
