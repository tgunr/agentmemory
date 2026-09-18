---
type: file_edit
title: Failed SQL query execution
description: No such table: project_folders
resource: agentmemory://observation/obs_ms7d5z10_ccab685b07e6
tags: ["SQL syntax error handling failures", "file_edit"]
timestamp: 2026-07-30T10:21:32.432555+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 8
confidence: 0.9
---
# Summary

The tool (terminal) failed to execute the provided SQLite shell script due to a missing table named "project_folders"

## Facts
- Hermes profile default projects database connection attempted
- SQLite3 error occurred while executing a command line SQL statement

## Concepts
- SQL syntax error handling failures

## Files
- `.hermes/profiles/default/projects.db`

_Importance: 8 · Confidence: 0.9_
