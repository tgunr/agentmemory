---
type: FileRead
title: Read desktop slash commands specifications file with pagination
description: Paginated read (offset 100, limit 120) of DESKTOP_COMMAND_SPECS array in a TypeScript file
resource: agentmemory://observation/obs_mrp36w64_d8966eb012be
tags: ["slash commands", "desktop application", "command specifications", "Hermes agent", "fileread"]
timestamp: 2026-07-17T15:22:28.055919+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The agent read a portion of a TypeScript file defining slash commands for a desktop application. The file contains an array of command specifications with metadata including names, descriptions, aliases, and surface types (action, picker, or exec). This appears to be part of a Hermes agent system with various commands for session management, model switching, and background tasks.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts
- Read operation used pagination: offset 100, limit 120
- Content shows DESKTOP_COMMAND_SPECS array with slash command definitions
- Commands include: /new, /branch, /yolo, /handoff, /profile, /skin, /title, /help, /browser, /journey
- Command surfaces include: action(), picker(), exec()
- Categories visible: local client actions, overlay pickers, backend-executed commands

## Concepts
- slash commands
- desktop application
- command specifications
- Hermes agent

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
