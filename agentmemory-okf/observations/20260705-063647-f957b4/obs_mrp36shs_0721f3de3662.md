---
type: FileRead
title: Desktop slash commands TypeScript definitions read
description: File truncated at 100 lines of 450 total lines
resource: agentmemory://observation/obs_mrp36shs_0721f3de3662
tags: ["slash commands", "command dispatcher pattern", "TypeScript interfaces", "DesktopCommandSurface union type", "source of truth architecture", "fileread"]
timestamp: 2026-07-17T15:22:23.292095+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Read TypeScript definitions for desktop slash command system in Hermes agent. The file defines the core types and interfaces that govern how commands are catalogued, dispatched, and rendered in the desktop UI. Key architectural pattern is the DesktopCommandSurface union type that eliminates parallel block-lists across the codebase.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts
- File size: 15,896 bytes
- Total lines: 450 lines (read operation truncated)
- Defines interfaces: CommandsCatalogSection, CommandsCatalogLike, DesktopSlashCompletion, DesktopThemeCommandOption
- Defines types: DesktopActionId (branch, browser, handoff, hatch, help, journey, new, pet, profile, skin, title, yolo)
- DesktopActionId maps to handlers in use-prompt-actions dispatcher
- DesktopCommandSurface discriminates: action, picker, exec, unavailable kinds
- DESKTOP_COMMAND_SPECS constant is the single source of truth for all desktop slash commands

## Concepts
- slash commands
- command dispatcher pattern
- TypeScript interfaces
- DesktopCommandSurface union type
- source of truth architecture

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 4 · Confidence: 1_
