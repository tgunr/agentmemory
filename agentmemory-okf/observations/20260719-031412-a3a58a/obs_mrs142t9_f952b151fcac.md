---
type: file_write
title: Created unfinished session audit script for Hermes
description: Python script scans Hermes session DBs for unfinished sessions and creates Apple Reminders
resource: agentmemory://observation/obs_mrs142t9_f952b151fcac
tags: ["SQLite session auditing", "Apple Reminders integration (remindctl)", "cron job automation", "Hermes profile management", "Python subprocess for CLI tools", "file_write"]
timestamp: 2026-07-19T16:47:35.992990+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 6
confidence: 1
---
# Summary

A Python audit script was created to detect unfinished Hermes chat sessions where the user's last message was never answered by the assistant. It scans all profile SQLite databases, identifies these orphaned sessions, and creates a summary reminder in Apple Reminders. The script is intended to run on a nightly 2AM cron schedule.

## Facts
- Script written to /Users/davec/.hermes/scripts/unfinished_session_audit.py (5792 bytes)
- Scans 8 sub-profiles (ai, cc, develop, ollama, personal, pveroot, ranch, shop) plus default profile
- Uses SQLite to query state.db for sessions where last message role is "user" (assistant never responded)</out>
    <fact>Filters noise messages (system-generated, <10 chars) and clips content to 300 chars
- Creates Apple Reminders via /opt/homebrew/bin/remindctl in list "Hermes Unfinished"
- Designed to run via 2AM cron with no_agent=True
- Hermes home directory: ~/.hermes, DBs at ~/.hermes/state.db and ~/.hermes/profiles/{name}/state.db

## Concepts
- SQLite session auditing
- Apple Reminders integration (remindctl)
- cron job automation
- Hermes profile management
- Python subprocess for CLI tools

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 6 · Confidence: 1_
