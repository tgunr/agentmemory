---
type: FileRead
title: Reviewed unfinished session audit script
description: Daily Hermes audit detects recently unanswered user messages across profiles.
resource: agentmemory://observation/obs_mrs1pdf4_a78661e4da53
tags: ["SQLite session audit", "unfinished conversation detection", "Apple Reminders automation", "cron job", "multi-profile scanning", "recency filtering", "fileread"]
timestamp: 2026-07-19T17:04:09.516622+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

The Python audit identifies Hermes conversations where a recent user message never received an assistant response. It filters stale, trivial, and injected system messages so the resulting daily reminder remains actionable.

## Facts
- The script scans ~/.hermes/state.db and state.db files for eight subprofiles: ai, cc, develop, ollama, personal, pveroot, ranch, and shop.
- A session is considered unfinished when its most recent message has role "user", is not trivial or system-generated noise, and occurred within the 30-day recency window.
- SQLite queries retrieve session metadata plus the latest message role, content, and timestamp; database connections use a 15-second timeout.
- The script is intended for a no-agent 2 AM cron, prints a human-readable summary, and uses /opt/homebrew/bin/remindctl with the Apple Reminders list "Hermes Unfinished".
- The read output was truncated near line 98, so the reminder creation and remaining processing logic were not visible.

## Concepts
- SQLite session audit
- unfinished conversation detection
- Apple Reminders automation
- cron job
- multi-profile scanning
- recency filtering

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 3 · Confidence: 1_
