---
type: file_edit
title: SQLite Parsing Error
description: No such column: project_id in SQLite SELECT query.
resource: agentmemory://observation/obs_ms7dj4z8_0cb5275268ce
tags: ["SQL syntax", "file_edit"]
timestamp: 2026-07-30T10:31:46.673552+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 5
confidence: 0.9
---
# Summary

The terminal tool executed an SQL query using sqlite3, which resulted in a parser error due to the presence of a quoted project_id value. This is a non-critical, but notable issue.

## Facts
- sqlite3 error occurred while parsing command line argument
- cmd line argument: project_id = 'p_dbc42c8a'

## Concepts
- SQL syntax

## Files
- `~/.hermes/profiles/cc/projects.db`

_Importance: 5 · Confidence: 0.9_
