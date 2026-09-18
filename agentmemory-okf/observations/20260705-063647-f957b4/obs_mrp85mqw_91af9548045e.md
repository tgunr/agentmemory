---
type: file_edit
title: Add /project slash command to desktop commands
description: Inserted between /profile and /skin
resource: agentmemory://observation/obs_mrp85mqw_91af9548045e
tags: ["slash commands", "desktop command registry", "action surface", "session project re-homing", "file_edit"]
timestamp: 2026-07-17T17:41:27.266923+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Registered a new desktop slash command /project that moves a session into a project by re-homing cwd and scoping the sidebar. It uses the action('project') surface with args enabled, matching the existing command registration pattern.

## Facts
- File: /Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts
- Added command: name '/project', description 'Move this session into a project (re-home its cwd + scope the sidebar)'
- surface: action('project'), args: true
- Inserted after /profile and before /skin
- Patch succeeded; lint skipped (LSP handles .ts)
- Warning: file was last read with offset/limit pagination — re-read whole file before overwriting

## Concepts
- slash commands
- desktop command registry
- action surface
- session project re-homing

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 5 · Confidence: 1_
