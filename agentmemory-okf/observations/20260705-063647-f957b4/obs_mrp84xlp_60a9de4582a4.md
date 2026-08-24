---
type: FileRead
title: Read slash command handlers (profile, skin, title)
description: Reviewing implementation of /profile, /skin, and /title commands in use-prompt-actions hook
resource: agentmemory://observation/obs_mrp84xlp_60a9de4582a4
tags: ["Slash commands", "Gateway RPC", "State management", "Session management", "UI theming", "fileread"]
timestamp: 2026-07-17T17:40:54.681579+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The agent read the slash command handlers in the use-prompt-actions hook to understand how /profile, /skin, and /title commands are implemented. This reveals the architecture for switching gateway profiles (which triggers a fresh session draft), changing UI themes, and renaming sessions via direct gateway RPCs rather than REST.

## Facts
- File contains slash command handlers for a desktop app session hook.
- /profile command updates the active gateway profile for new chats by setting $newChatProfile, ensuring the gateway profile, and starting a fresh session draft.
- /skin command handles UI theme changes, falling back to toast notifications if no active session exists.
- /title command renames sessions using the session.title gateway RPC instead of REST endpoints to avoid 404s on runtime IDs.
- Handoff command uses handoffSession and appends system messages on failure.

## Concepts
- Slash commands
- Gateway RPC
- State management
- Session management
- UI theming

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
