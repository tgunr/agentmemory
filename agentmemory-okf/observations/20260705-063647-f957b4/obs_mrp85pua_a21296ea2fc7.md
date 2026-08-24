---
type: FileRead
title: Read slash.ts hook file for slash command handling
description: File imports profile management and slash command utilities for session actions
resource: agentmemory://observation/obs_mrp85pua_a21296ea2fc7
tags: ["React hooks", "slash commands", "profile management", "session state", "fileread"]
timestamp: 2026-07-17T17:41:31.278996+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Read the slash.ts file which contains React hooks for handling slash commands in the desktop app's session context. The file appears to be part of a profile fix effort, importing both profile management and slash command execution modules. This is likely where slash command handlers interact with profile state.

## Facts
- File path: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- 635 total lines, 22KB, truncated at line 35
- Imports profile-related modules: $activeGatewayProfile, $newChatProfile, ensureGatewayProfile, normalizeProfileKey from '@/store/profile'
- Imports session management: $connection, $sessions, $yoloActive, setModelPickerOpen, setSessionPickerOpen, setSessions, setYoloActive
- Imports slash command utilities: parseCommandDispatch, parseSlashCommand, isDesktopSlashCommand, resolveDesktopCommand

## Concepts
- React hooks
- slash commands
- profile management
- session state

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 5 · Confidence: 1_
