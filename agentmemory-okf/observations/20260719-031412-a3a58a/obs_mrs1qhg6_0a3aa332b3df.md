---
type: file_write
title: Write unfinished session audit script for Hermes
description: Daily cron script scans session DBs and creates Apple Reminders for unfinished conversations
resource: agentmemory://observation/obs_mrs1qhg6_0a3aa332b3df
tags: ["macOS TCC (Transparency Consent Control) security model", "Apple Reminders automation via osascript", "SQLite session database scanning", "Python interpreter re-execution for TCC identity inheritance", "Cron job scheduling for automated audits", "Environment variable data passing for shell injection safety", "Hermes profile system with sub-profiles", "file_write"]
timestamp: 2026-07-19T17:05:01.395502+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 7
confidence: 1
---
# Summary

A Python audit script was created for the Hermes application that scans all profile session databases nightly to find conversations where the assistant never closed the loop (last message is from the user). It creates Apple Reminders via osascript, carefully working around macOS TCC security constraints by re-executing under the specific uv-managed Python interpreter that holds the Reminders access grant. The script is designed for cron execution and filters out noise/system messages to keep reminders actionable.

## Facts
- Script written to /Users/davec/.hermes/scripts/unfinished_session_audit.py (8925 bytes)
- Scans SQLite session databases across 8 sub-profiles (ai, cc, develop, ollama, personal, pveroot, ranch, shop) plus default profile
- Identifies "unfinished" sessions where the most recent message role is "user" (assistant never responded)
- Uses 30-day activity window to keep reminders actionable and self-aging
- Creates Apple Reminders via osascript (not remindctl) due to macOS TCC binding to the direct EventKit caller
- Re-execs under GRANTED_PY interpreter (/Users/davec/.local/share/uv/python/cpython-3.11.11-macos-aarch64-none/bin/python3.11) which holds the TCC Reminders grant
- Passes data to osascript through environment variables to safely handle quotes/newlines in chat text
- Filters noise messages: short content (&lt;10 chars), [System], [IMPORTANT], [Note:] prefixed messages
- Designed to run from 2AM cron with no_agent=True
- Reminders list name: "Hermes Unfinished"

## Concepts
- macOS TCC (Transparency Consent Control) security model
- Apple Reminders automation via osascript
- SQLite session database scanning
- Python interpreter re-execution for TCC identity inheritance
- Cron job scheduling for automated audits
- Environment variable data passing for shell injection safety
- Hermes profile system with sub-profiles

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 7 · Confidence: 1_
