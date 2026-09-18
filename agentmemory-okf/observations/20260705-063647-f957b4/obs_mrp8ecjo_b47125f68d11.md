---
type: FileRead
title: Reading slash command handler interface definition
description: Examining SlashActionCtx interface and imports in use-prompt-actions hook
resource: agentmemory://observation/obs_mrp8ecjo_b47125f68d11
tags: ["TypeScript interfaces", "Slash commands", "React hooks", "State management stores", "Command handlers", "fileread"]
timestamp: 2026-07-17T17:48:13.952336+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Reading the slash command handler file to understand the SlashActionCtx interface structure and its dependencies. This interface defines the context object passed to slash command handlers, containing the command name, arguments, and whether to record input. The file imports state management functions from session and projects stores.

## Facts
- File has 692 total lines, 25258 bytes
- Reading lines 30-44 showing imports and interface definition
- Imports from @/store/session: setSessions, setYoloActive
- Imports from @/store/projects: $projects, $projectTree, enterProject
- Defines SlashActionCtx interface with properties: arg, command, name, recordInput
- Imports types: BrowserManageResponse, SessionTitleResponse, SlashExecResponse
- Imports utilities: GatewayRequest, isSessionIdCandidate, renderCommandsCatalog, slashStatusText

## Concepts
- TypeScript interfaces
- Slash commands
- React hooks
- State management stores
- Command handlers

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 2 · Confidence: 1_
