---
type: file_edit
title: SQLite query execution
description: Executing queries on projects.db
resource: agentmemory://observation/obs_mvxntotn_70502b9e07e0
tags: ["SQL query execution", "file_edit"]
timestamp: 2026-11-01T10:01:02.694384+00:00
source: agentmemory
session_id: local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6
importance: 6
confidence: 0.9
---
# Summary

The agent executed SQLite queries on a database file.

## Facts
- Tool used: terminal
- Command executed: {\'command\':&#39;cd ~/.hermes && sqlite3 projects.db \\'select count(*), sum(archived) from projects\&#39;; echo ---; sqlite3 projects.db \\'select id,slug,name,archived from projects where archived=1\&#39;; echo ---META---; sqlite3 projects.db \\'select * from project_meta\&#39;;}

## Concepts
- SQL query execution

## Files
- `.hermes/projects.db`

_Importance: 6 · Confidence: 0.9_
