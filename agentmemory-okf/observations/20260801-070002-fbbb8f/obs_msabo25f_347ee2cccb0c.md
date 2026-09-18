---
type: file_edit
title: Error accessing recent sessions in SQLite database
description: No data was returned due to formatting error
resource: agentmemory://observation/obs_msabo25f_347ee2cccb0c
tags: ["sqlite3", "file_edit"]
timestamp: 2026-08-01T12:02:55.583517+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 4
confidence: 0.9
---
# Summary

The bot attempted to retrieve recent sessions with project info from a SQLite database, but encountered an error due to format specification mismatch when printing data. The output of the failed command has been logged.

## Facts
- Python3 is executing a command on the local terminal.

## Concepts
- sqlite3

## Files
- `~/.hermes/state.db`

_Importance: 4 · Confidence: 0.9_
