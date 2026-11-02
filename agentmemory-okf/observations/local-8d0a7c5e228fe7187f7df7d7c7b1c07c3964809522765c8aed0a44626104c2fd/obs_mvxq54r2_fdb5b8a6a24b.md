---
type: file_edit
title: Extract tasks with "crs" prefix from Kanban DB
description: Run custom SQL query in Kanban DB
resource: agentmemory://observation/obs_mvxq54r2_fdb5b8a6a24b
tags: ["SQL query", "Kanban DB", "file_edit"]
timestamp: 2026-11-01T11:05:55.785582+00:00
source: agentmemory
session_id: local-8d0a7c5e228fe7187f7df7d7c7b1c07c3964809522765c8aed0a44626104c2fd
importance: 5
confidence: 0.9
---
# Summary

The script ran a custom SQL query on the Kanban DB to extract tasks with the "crs" prefix.

## Facts
- Tool: terminal
- Command: ls ~/.hermes/kanban/boards; for f in ~/.hermes/kanban/boards/*.db; do echo \"== $f\"; sqlite3 \"$f\" \"select id,title,status from tasks where title like '%crs%' limit 5;\" 2>/dev/null; done

## Concepts
- SQL query
- Kanban DB

## Files
- `/Users/davec/.hermes/kanban/boards/*.db`

_Importance: 5 · Confidence: 0.9_
