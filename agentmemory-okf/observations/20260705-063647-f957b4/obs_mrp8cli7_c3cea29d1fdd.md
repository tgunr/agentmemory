---
type: FileRead
title: Read slash command handler file (35 of 692 lines)
description: File imports various modules including profile store functions
resource: agentmemory://observation/obs_mrp8cli7_c3cea29d1fdd
tags: ["React hooks", "slash commands", "profile management", "fileread"]
timestamp: 2026-07-17T17:46:52.252940+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Read the beginning of a slash command handler file in a desktop React application. The file imports profile management, session, and command-related modules, suggesting it handles slash command execution for chat sessions with profile integration.

## Facts
- File: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Total lines: 692, size: 25258 bytes, truncated at line 35
- Imports profile functions: $activeGatewayProfile, $newChatProfile, ensureGatewayProfile, normalizeProfileKey
- Imports session stores: $connection, $sessions, $yoloActive, $activeSessionId, setCurrentCwd
- Imports desktop slash command utilities: isDesktopSlashCommand, resolveDesktopCommand, desktopSlashUnavailableMessage

## Concepts
- React hooks
- slash commands
- profile management

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
