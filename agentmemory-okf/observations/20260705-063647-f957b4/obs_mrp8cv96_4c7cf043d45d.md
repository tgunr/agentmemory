---
type: FileRead
title: Read desktop slash commands logic (lines 280-294)
description: Examining command gating and extension resolution
resource: agentmemory://observation/obs_mrp8cv96_4c7cf043d45d
tags: ["Slash commands", "Command routing", "Desktop application logic", "fileread"]
timestamp: 2026-07-17T17:47:04.886218+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read a snippet of the desktop slash commands library to understand how extension commands and standard desktop commands are gated and resolved. This provides context for the command routing logic in the desktop application.

## Facts
- File path: /tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts
- File contains 450 total lines (15896 bytes)
- isDesktopSlashExtensionCommand returns true if the normalized command is not a known Hermes slash command
- isDesktopSlashCommand gates execution using resolveDesktopCommand

## Concepts
- Slash commands
- Command routing
- Desktop application logic

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
