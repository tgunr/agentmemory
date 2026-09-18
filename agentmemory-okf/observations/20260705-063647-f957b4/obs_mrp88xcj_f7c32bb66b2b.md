---
type: FileRead
title: Read slash.ts hook for prompt actions
description: Inspecting slash command handler context and imports in desktop app
resource: agentmemory://observation/obs_mrp88xcj_f7c32bb66b2b
tags: ["React hooks", "Slash commands", "State management stores", "Command parsing", "fileread"]
timestamp: 2026-07-17T17:44:00.976710+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read the first 40 lines of slash.ts, a React hook file handling slash commands in the Hermes desktop app. The file establishes the SlashActionCtx interface and imports various state management stores and utility functions for command resolution and UI control.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- File contains 632 lines and is 22384 bytes in size
- Defines SlashActionCtx interface with arg, command, and name properties
- Imports multiple state stores (session, profile, composer, notifications, pet-gallery) and command parsing utilities

## Concepts
- React hooks
- Slash commands
- State management stores
- Command parsing

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
