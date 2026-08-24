---
type: FileRead
title: Read desktop slash command type definitions
description: TypeScript types for Hermes desktop command system (lines 30-64 of 450)
resource: agentmemory://observation/obs_mrp8crui_7df63b762bf5
tags: ["TypeScript discriminated unions", "slash command routing", "desktop command surface", "action/picker/exec/unavailable pattern", "fileread"]
timestamp: 2026-07-17T17:47:00.470739+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Reading TypeScript type definitions for the Hermes desktop slash command system. The file defines a discriminated union type (DesktopCommandSurface) that determines how commands are handled: locally via actions, through overlay pickers, executed on backend, or marked unavailable for desktop. This is the core type system for routing slash commands in the desktop application.

## Facts
- File: /tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts
- DesktopActionId includes: branch, browser, handoff, hatch, help, journey, new, pet, profile, skin, title, yolo
- DesktopPickerId: 'model' | 'session' for overlay pickers
- DesktopUnavailableReason: 'advanced' | 'messaging' | 'settings' | 'terminal'
- DesktopCommandSurface is discriminated union with kinds: action, picker, exec, unavailable
- File has 450 total lines, 15896 bytes

## Concepts
- TypeScript discriminated unions
- slash command routing
- desktop command surface
- action/picker/exec/unavailable pattern

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
