---
type: file_write
title: Create reminders_osascript.py for TCC-robust Apple Reminders integration
description: Python script using osascript to bypass TCC permission issues with Reminders
resource: agentmemory://observation/obs_mrs1um3x_f6b6ac4ab8be
tags: ["macOS TCC permissions", "AppleScript automation", "osascript subprocess", "re-execution pattern", "EventKit integration", "file_write"]
timestamp: 2026-07-19T17:08:14.059038+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 8
confidence: 1
---
# Summary

Created a Python script for Apple Reminders integration that uses osascript to work around macOS TCC (Transparency, Consent, Control) permission restrictions. Unlike compiled binaries like remindctl, osascript inherits the TCC-granting identity of the calling process, making it reliable for reminders automation. The script handles re-execution under the correct interpreter and safely passes user data through environment variables.

## Facts
- File written to: /Users/davec/.hermes/skills/apple/macos-integrations/scripts/reminders_osascript.py
- Skill name: macos-integrations
- Uses osascript/AppleScript instead of compiled remindctl binary for TCC inheritance
- Implements re-execution pattern to run under TCC-granted Python interpreter
- Passes data via environment variables (HM_TITLE, HM_NOTES, HM_LIST, etc.) to avoid shell quoting
- Includes dedupe_prefix feature to delete existing reminders before adding new ones

## Concepts
- macOS TCC permissions
- AppleScript automation
- osascript subprocess
- re-execution pattern
- EventKit integration

## Files
- `/Users/davec/.hermes/skills/apple/macos-integrations/scripts/reminders_osascript.py`

_Importance: 8 · Confidence: 1_
