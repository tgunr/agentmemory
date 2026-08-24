---
type: Search
title: Search slash commands for action/profile patterns
description: Found 20 matches in desktop-slash-commands.ts
resource: agentmemory://observation/obs_mrp363j3_45e76b9eaa20
tags: ["slash commands", "action dispatch", "command surface", "DesktopActionId", "command aliases", "search"]
timestamp: 2026-07-17T15:21:50.939086+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Searched the desktop slash commands file to understand the action dispatch system. Found that slash commands are structured with a surface property mapping to DesktopActionId, which is handled by a dispatcher in use-prompt-actions. Commands like /new, /profile, /skin are defined with metadata and action mappings.

## Facts
- DesktopActionId type defined at line 31 with union of action identifiers
- Available actions: new, branch, yolo, handoff, profile, skin, title, help, browser, journey, pet, hatch
- Commands use DesktopCommandSurface with kind: 'action' and action: DesktopActionId
- Each command has name, description, optional aliases, surface, and optional args
- Helper function action(id) creates DesktopCommandSurface objects

## Concepts
- slash commands
- action dispatch
- command surface
- DesktopActionId
- command aliases

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
