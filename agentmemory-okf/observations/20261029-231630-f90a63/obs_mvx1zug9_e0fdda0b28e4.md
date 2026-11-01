---
type: file_edit
title: SQL query fails
description: No such column: last_active
resource: agentmemory://observation/obs_mvx1zug9_e0fdda0b28e4
tags: ["sqlite error handling", "file_edit"]
timestamp: 2026-10-31T23:49:58.373341+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 5
confidence: 0.9
---
# Summary

The SQL query failed due to the last_active column not being found. This is an error that may impact the application.

## Facts
- Command to run: cd ~/.hermes && sqlite3 state.db \"select id, substr(title,1,40), cwd, datetime(last_active,'unixepoch','localtime') from sessions where title like 'p\\_%' escape '\\\\' or title like '%p_4045d7fe%' or title like '%p_b4b1cb2e%' limit 8;

## Concepts
- sqlite error handling

_Importance: 5 · Confidence: 0.9_
