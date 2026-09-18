---
type: discovery
title: macOS TCC permissions do not inherit to child processes
description: Testing whether Reminders access granted to a Python interpreter passes to spawned binaries
resource: agentmemory://observation/obs_mrs1mzoc_00046dcc354d
tags: ["macOS TCC permission inheritance", "Apple Events / AppleScript Reminders access", "osascript EventKit workaround", "subprocess TCC identity", "macOS Privacy & Security Reminders", "discovery"]
timestamp: 2026-07-19T17:02:18.392850+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 7
confidence: 1
---
# Summary

Tested whether macOS TCC Reminders permissions granted to a specific Python interpreter would inherit to child processes like remindctl. The remindctl binary was denied access (rc=1), proving TCC does not propagate to spawned children. However, osascript successfully wrote a reminder via AppleScript/Apple Events from the same Python context, providing a viable workaround for Reminders access.

## Facts
- remindctl (/opt/homebrew/bin/remindctl) returned rc=1 with "Reminders access denied" when spawned as subprocess from granted Python interpreter
- osascript EventKit write succeeded (rc=0) from the same granted Python, creating reminder id x-apple-reminder://C8C4BAE6-6E42-4F04-96AB-DB5DBE8EBCD2 in list "Hermes Unfinished"
- Tested Python: /Users/davec/.local/share/uv/python/cpython-3.11.11-macos-aarch64-none/bin/python3.11
- TCC identity does NOT inherit to child processes spawned by the granted interpreter
- osascript bypasses the TCC restriction by using AppleScript/Apple Events to write to Reminders

## Concepts
- macOS TCC permission inheritance
- Apple Events / AppleScript Reminders access
- osascript EventKit workaround
- subprocess TCC identity
- macOS Privacy & Security Reminders

## Files
- `/opt/homebrew/bin/remindctl`
- `/Users/davec/.local/share/uv/python/cpython-3.11.11-macos-aarch64-none/bin/python3.11`

_Importance: 7 · Confidence: 1_
