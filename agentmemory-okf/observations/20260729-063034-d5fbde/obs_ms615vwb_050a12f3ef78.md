---
type: file_edit
title: Update and query database values in Hermes profiles CC state.db
description: Modifying and retrieving session data via sqlite3 commands.
resource: agentmemory://observation/obs_ms615vwb_050a12f3ef78
tags: ["sqlite3 commands", "Hermes profiles CC database", "file_edit"]
timestamp: 2026-07-29T11:57:46.808895+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 6
confidence: 0.9
---
# Summary

A database update and query operation was performed using the terminal on state.db for Hermes profiles CC.

## Facts
- Command: sqlite3 ~/.hermes/profiles/cc/state.db "UPDATE sessions SET title = 'eufy project setup + sidebar hierarchy feature fork' WHERE id = '20260729_063034_d5fbde';" && 
                    sqlite3 ~/.hermes/profiles/cc/state.db "SELECT id, title FROM sessions WHERE id = '20260729_063034_d5fbde';"

## Concepts
- sqlite3 commands
- Hermes profiles CC database

## Files
- `/home/user/.hermes/profiles/cc/state.db`

_Importance: 6 · Confidence: 0.9_
