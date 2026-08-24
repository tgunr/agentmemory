---
type: file_edit
title: DB Error During Search
description: Parse error on SQLite query execution
resource: agentmemory://observation/obs_ms7d6szf_47c9acc9d60f
tags: ["sqlite syntax errors", "file_edit"]
timestamp: 2026-07-30T10:22:11.255669+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 6
confidence: 1
---
# Summary

The tool executed an SQL query on the Hermes projects database, resulting in a parse error due to unrecognized columns. This error impacts the project's functionality.

## Facts
- db: ~/.hermes/profiles/ai/projects.db
- query: SELECT * FROM discovered_repos WHERE path LIKE '%uv%' OR path LIKE '%UV;%
- error: no such column: path

## Concepts
- sqlite syntax errors

_Importance: 6 · Confidence: 1_
