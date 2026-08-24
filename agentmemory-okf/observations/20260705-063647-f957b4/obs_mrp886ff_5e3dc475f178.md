---
type: FileRead
title: Reviewed slash action dependencies
description: Imports and context declaration in the desktop prompt slash-action hook
resource: agentmemory://observation/obs_mrp886ff_5e3dc475f178
tags: ["slash command handlers", "profile state management", "session store", "TypeScript imports", "fileread"]
timestamp: 2026-07-17T17:43:26.088161+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The import section of the slash-action hook was inspected to identify its store and utility dependencies. It shows profile-aware slash command handling and broad coordination with session, project, composer, and notification state.

## Facts
- The file imports project, composer, notification, profile, pet generation, command palette, and session store APIs.
- Profile APIs include $activeGatewayProfile, $newChatProfile, ensureGatewayProfile, and normalizeProfileKey.
- Session store imports are split across two declarations, with $activeSessionId and setPetScale separate from connection, session picker, model picker, CWD, and YOLO APIs.
- The file defines SlashActionCtx and imports GatewayRequest, isSessionIdCandidate, renderCommandsCatalog, and slashStatusText from ./utils.
- The source contains 703 lines and is 25,500 bytes; only lines 16-40 were read.

## Concepts
- slash command handlers
- profile state management
- session store
- TypeScript imports

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
