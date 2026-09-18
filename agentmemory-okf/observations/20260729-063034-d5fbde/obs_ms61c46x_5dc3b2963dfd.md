---
type: file_edit
title: parse sqlite session data
description: retrieve sessions from .hermes/profiles/cc/state.db under
resource: agentmemory://observation/obs_ms61c46x_5dc3b2963dfd
tags: ["sqlite query optimization", "data processing with Python", "file_edit"]
timestamp: 2026-07-29T12:02:37.495180+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 6
confidence: 1
---
# Summary

The tool executed a custom script to parse SQLite session data from the Hermes profile database.

## Facts
- command: sqlite3 with argument for filtering sessions by cwd
- output format: list of session data objects with cid, cwd, and title
- exit code: successful execution (0)

## Concepts
- sqlite query optimization
- data processing with Python

## Files
- `.hermes/profiles/cc/state.db`

_Importance: 6 · Confidence: 1_
