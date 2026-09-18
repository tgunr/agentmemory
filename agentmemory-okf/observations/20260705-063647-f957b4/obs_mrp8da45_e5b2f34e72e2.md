---
type: file_edit
title: Add /project slash command to desktop registry
description: desktop-slash-commands.ts after /profile
resource: agentmemory://observation/obs_mrp8da45_e5b2f34e72e2
tags: ["slash commands", "desktop command registry", "session project re-homing", "file_edit"]
timestamp: 2026-07-17T17:47:24.146018+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Registered a new /project desktop slash command that moves a session into a project by re-homing its cwd and scoping the sidebar. The command accepts args and is wired via action('project'), placed after /profile in the command list.

## Facts
- Added /project command with description: 'Move this session into a project (re-home its cwd + scope the sidebar)'
- surface: action('project'), args: true
- Inserted between /profile and /skin entries
- File: /tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts
- Patch succeeded; warning that file was last read with offset/limit pagination

## Concepts
- slash commands
- desktop command registry
- session project re-homing

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 5 · Confidence: 1_
