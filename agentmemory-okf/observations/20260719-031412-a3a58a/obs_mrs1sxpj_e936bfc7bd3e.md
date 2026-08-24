---
type: FileRead
title: Viewed Apple Reminders integration reference (macos-integrations skill)
description: Reference for remindctl CLI tool to manage Apple Reminders from terminal
resource: agentmemory://observation/obs_mrs1sxpj_e936bfc7bd3e
tags: ["Apple Reminders", "remindctl CLI", "macOS TCC permissions", "iCloud sync", "fileread"]
timestamp: 2026-07-19T17:06:55.778451+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 1
confidence: 1
---
# Summary

Viewed reference documentation for Apple Reminders integration using remindctl CLI tool. The skill provides guidance on managing personal to-dos that sync via iCloud to iOS devices, with specific commands for creating reminders, managing lists, and handling the macOS TCC permission gate.

## Facts
- Tool: remindctl installed via brew install steipete/tap/remindctl
- Commands: remindctl add/list/complete/delete with --due and --alarm flags
- Date formats accepted: today, tomorrow, YYYY-MM-DD, YYYY-MM-DD HH:mm, ISO 8601
- --due sets due date/time, --alarm sets notification trigger (can differ)
- TCC permission requires foreground GUI session for authorization prompt

## Concepts
- Apple Reminders
- remindctl CLI
- macOS TCC permissions
- iCloud sync

## Files
- `references/apple-reminders.md`

_Importance: 1 · Confidence: 1_
