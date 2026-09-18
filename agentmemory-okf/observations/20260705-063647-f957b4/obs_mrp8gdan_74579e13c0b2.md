---
type: FileRead
title: Read slash command handlers in use-prompt-actions
description: Examining project CWD setting and skin command logic
resource: agentmemory://observation/obs_mrp8gdan_74579e13c0b2
tags: ["React hooks", "Slash commands", "Gateway RPC", "State management", "Working directory (CWD)", "fileread"]
timestamp: 2026-07-17T17:49:48.236918+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The agent read a section of the slash command hook to understand how project CWDs are set and how the skin command is initiated. This reveals the integration between local UI state (setCurrentCwd, enterProject) and the backend gateway (session.cwd.set).

## Facts
- File is a 701-line TypeScript hook for slash commands in the Hermes desktop app
- Lines 365-389 handle setting a session's CWD via requestGateway('session.cwd.set') and updating local state
- Lines 391-395 begin the 'skin' slash command handler using handleSkinCommand
- Project display name is resolved from .name, .label, or id fallback

## Concepts
- React hooks
- Slash commands
- Gateway RPC
- State management
- Working directory (CWD)

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
