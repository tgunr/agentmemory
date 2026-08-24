---
type: file_edit
title: Add 'project' to DesktopActionId union type
description: Extending slash command action IDs to include project action
resource: agentmemory://observation/obs_mrp8d2hr_f72eab2ba089
tags: ["TypeScript union types", "Slash commands", "Desktop action IDs", "file_edit"]
timestamp: 2026-07-17T17:47:14.266881+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The 'project' action ID was added to the DesktopActionId union type to support a new project-related slash command in the desktop app. This is a type-level change that enables the project action to be recognized by the slash command system.

## Facts
- Added 'project' to the DesktopActionId union type in desktop-slash-commands.ts
- The union type now includes: branch, browser, handoff, hatch, help, journey, new, pet, profile, project, skin, title, yolo
- File was previously read with offset/limit pagination (partial view) — warning issued to re-read before overwriting
- Lint was skipped because LSP server handles .ts files

## Concepts
- TypeScript union types
- Slash commands
- Desktop action IDs

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 4 · Confidence: 1_
