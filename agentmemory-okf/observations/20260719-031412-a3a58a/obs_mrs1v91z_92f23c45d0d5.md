---
type: file_edit
title: Failed patch: macOS TCC pitfalls for Reminders automation
description: Attempted to document remindctl vs osascript TCC binding behavior
resource: agentmemory://observation/obs_mrs1v91z_92f23c45d0d5
tags: ["macOS TCC permissions", "EventKit automation", "Apple Reminders integration", "osascript AppleScript bridge", "remindctl binary", "background curator workflow", "read-before-write requirement", "TCC identity binding", "file_edit"]
timestamp: 2026-07-19T17:08:43.794272+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 7
confidence: 1
---
# Summary

Attempted to patch the macos-integrations skill's apple-reminders reference file with detailed documentation about macOS TCC permission pitfalls. The patch explains why remindctl fails in automation contexts (TCC binds to the binary itself, not the invoking interpreter) and provides a verified osascript-based solution with environment variable passing. The operation failed because the system enforces a read-before-write requirement for skill patches.

## Facts
- Tool: skill_manage with action=patch on references/apple-reminders.md in skill 'macos-integrations'
- Operation failed: system refused patch because file content was not loaded in current review turn
- Error: _read_before_write_required=true - must call skill_view() before patching
- Content being added documents TCC binds to DIRECT EventKit caller binary, not invoking shell/python
- remindctl (compiled Mach-O binary) fails in automation because it's a separate ungranted TCC identity
- osascript (AppleScript) is reliable automation path - inherits granting identity of invoking process
- AppleScript Allow prompt only surfaces in foreground GUI session; one-time human setup required
- Reminder data must pass through environment variables via 'system attribute', never shell-quoted into -e
- Included verified osascript recipe: creates list if absent, dedupes by name prefix, adds reminder with due date
- TCC binds to specific binary path+hash; use pgrep/lsof to find granted interpreter path for re-exec

## Concepts
- macOS TCC permissions
- EventKit automation
- Apple Reminders integration
- osascript AppleScript bridge
- remindctl binary
- background curator workflow
- read-before-write requirement
- TCC identity binding

## Files
- `references/apple-reminders.md`

_Importance: 7 · Confidence: 1_
