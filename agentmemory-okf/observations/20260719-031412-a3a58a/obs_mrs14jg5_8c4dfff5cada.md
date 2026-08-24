---
type: file_edit
title: Add [Note: prefix filter to session audit script
description: Filtering out system-injected notes from user-role messages
resource: agentmemory://observation/obs_mrs14jg5_8c4dfff5cada
tags: ["Python string filtering", "Session audit logic", "System-injected message filtering", "file_edit"]
timestamp: 2026-07-19T16:47:57.555783+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The unfinished session audit script was updated to ignore system-injected notes that appear as user-role messages. A new filter condition was added for messages starting with "[Note:" alongside existing filters for "[System" and "[IMPORTANT".

## Facts
- File modified: /Users/davec/.hermes/scripts/unfinished_session_audit.py
- Added condition to filter messages starting with "[Note:"
- Added explanatory comment for system-injected notes filtering
- Script filters out short messages and system-injected notes from user-role messages

## Concepts
- Python string filtering
- Session audit logic
- System-injected message filtering

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 4 · Confidence: 1_
