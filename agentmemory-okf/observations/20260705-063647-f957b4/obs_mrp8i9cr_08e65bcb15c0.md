---
type: FileRead
title: Read desktop slash commands definitions (lines 128-147)
description: Examining slash command registry in desktop app
resource: agentmemory://observation/obs_mrp8i9cr_08e65bcb15c0
tags: ["slash commands", "CDP browser connection", "memory graph", "session management", "command registry pattern", "fileread"]
timestamp: 2026-07-17T17:51:16.440510+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Read a portion of the desktop slash commands registry file. This defines the command structure for the desktop app's slash command system, showing commands for browser CDP management, journey/memory graph, model switching, and session resumption. Commands use either action() or picker() surface types.

## Facts
- File has 457 total lines, 16079 bytes
- /browser command manages browser CDP connection with connect|disconnect|status actions, local gateway only
- /journey command opens memory graph (skills + memories over time), aliases: /learning, /memory-graph
- /model command switches model for session, hidden, uses picker('model')
- /resume command resumes saved session, aliases: /sessions, /switch, uses picker('session'), accepts args
- Commands use action() and picker() surface types
- Commands support name, description, aliases, surface, args, and hidden properties

## Concepts
- slash commands
- CDP browser connection
- memory graph
- session management
- command registry pattern

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 4 · Confidence: 1_
