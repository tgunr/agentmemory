---
type: file_edit
title: Copy and query DB with sqlite3
description: Executing commands within a Hermes project
resource: agentmemory://observation/obs_mvxqcxx6_9f4687c40359
tags: ["SQLite query patterns", "file_edit"]
timestamp: 2026-11-01T11:12:00.178062+00:00
source: agentmemory
session_id: local-7639efe6cf94028cbc97e241be74d377d9f95e5c68453db289d271cb12ca471a
importance: 7
confidence: 0.9
---
# Summary

The code within a Hermes project executes SQLite queries, copies data, and interacts with the file system.

## Facts
- Command: ls -la /Volumes/davec/.hermes/products.db*; cp /Volumes/davec/.hermes/products.db /tmp/hermes-samba-projects.db && sqlite3 -header -column /tmp/hermes-samba-projects.db \"select id,slug,name,primary_path,archived from projects;\"
- Output: /Volumes/davec/.hermes/products.db

## Concepts
- SQLite query patterns

## Files
- `/Volumes/davec/.hermes/projects.db`
- `/tmp/hermes-samba-projects.db`

_Importance: 7 · Confidence: 0.9_
