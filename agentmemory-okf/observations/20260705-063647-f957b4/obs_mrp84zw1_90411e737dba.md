---
type: FileRead
title: Slash command handlers in desktop app
description: Reading use-prompt-actions/slash.ts lines 391-470
resource: agentmemory://observation/obs_mrp84zw1_90411e737dba
tags: ["slash commands", "command handlers", "reactive stores", "overlay UI", "CDP connection", "gateway mode", "desktop app hooks", "fileread"]
timestamp: 2026-07-17T17:40:57.645844+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Reading slash command implementation in desktop app session hooks. The file defines handlers for various slash commands that trigger UI overlays and manage features like memory graph visualization, pet generation, and browser CDP connections. Commands are context-aware, checking for remote vs local gateway connections.

## Facts
- File contains 635 total lines (22581 bytes), reading lines 391-470
- Implements slash command handlers: /journey, /hatch, /pet, /browser
- /journey opens memory graph overlay via openMemoryGraph()
- /hatch opens pet generator overlay with optional concept argument
- /pet supports subcommands: list/gallery/browse/all (opens command palette), scale (resizes floating pet via setPetScale)
- /browser manages CDP connection with connect/disconnect/status actions, gated to local gateway connections only
- Uses reactive stores ($petGenInput, $connection) and overlay functions (openMemoryGraph, openPetGenerate, openCommandPalettePage)
- Checks connection mode to prevent remote gateway from managing local browser

## Concepts
- slash commands
- command handlers
- reactive stores
- overlay UI
- CDP connection
- gateway mode
- desktop app hooks

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 2 · Confidence: 1_
