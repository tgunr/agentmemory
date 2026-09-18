---
type: FileRead
title: Read TypeScript type definitions for desktop slash commands
description: Extracted DesktopActionId, DesktopPickerId, and DesktopUnavailableReason types
resource: agentmemory://observation/obs_mrp8cy69_17e3feccca7c
tags: ["TypeScript union types", "desktop slash commands", "UI command routing", "fileread"]
timestamp: 2026-07-17T17:47:08.670123+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read a portion of the desktop slash commands file to understand the available desktop actions, picker IDs, and reasons for command unavailability. This provides context for the desktop UI surfaces and command routing.

## Facts
- File has 450 total lines and is 15896 bytes
- DesktopActionId includes 12 action types: branch, browser, handoff, hatch, help, journey, new, pet, profile, skin, title, yolo
- DesktopPickerId includes model and session
- DesktopUnavailableReason includes advanced, messaging, settings, terminal

## Concepts
- TypeScript union types
- desktop slash commands
- UI command routing

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
