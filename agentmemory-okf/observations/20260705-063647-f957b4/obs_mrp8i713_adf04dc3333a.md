---
type: FileRead
title: Read desktop-slash-commands.ts for DesktopActionId
description: Understanding slash command architecture and action IDs
resource: agentmemory://observation/obs_mrp8i713_adf04dc3333a
tags: ["TypeScript string literal unions", "Command dispatcher pattern", "Slash commands", "React hooks", "fileread"]
timestamp: 2026-07-17T17:51:13.427161+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The agent read a portion of the desktop slash commands file to understand the architecture for adding new commands. The file defines a DesktopActionId union type and explains that new commands require adding an ID to this type and a corresponding handler in the use-prompt-actions dispatcher.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts
- Total lines in file: 457
- DesktopActionId is a TypeScript string literal union type
- Defined action IDs: branch, browser, handoff, hatch, help, journey, new, pet, profile, project, skin, title, yolo
- Command handlers are dispatched via the use-prompt-actions hook, keyed by the action ID

## Concepts
- TypeScript string literal unions
- Command dispatcher pattern
- Slash commands
- React hooks

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 4 · Confidence: 1_
