---
type: file_edit
title: Retrieve task details
description: Ls and sqlite3 in Kanban database
resource: agentmemory://observation/obs_mvxq51qr_cc50d305c7f6
tags: ["CRS (Componentized Remote Service)", "file_edit"]
timestamp: 2026-11-01T11:05:51.887811+00:00
source: agentmemory
session_id: local-8d0a7c5e228fe7187f7df7d7c7b1c07c3964809522765c8aed0a44626104c2fd
importance: 4
confidence: 1
---
# Summary

A tool edit occurred, utilizing command-line operations in Hermes' Kanban database.

## Facts
- Used command: ls ~/.hermes/kanban 2>/dev/null
- Sqlite3 query: select id,title,status from tasks where title like '%CRS%' or title like '%crs%' limit 10;
- Used command: grep -rl \"crs-swag\\|CRS Swag\" ~/.hermes --include=\"*.yaml\" --include=\"*.json\" -I

## Concepts
- CRS (Componentized Remote Service)

## Files
- `/Users/davec/.hermes/kanban/*.db`

_Importance: 4 · Confidence: 1_
