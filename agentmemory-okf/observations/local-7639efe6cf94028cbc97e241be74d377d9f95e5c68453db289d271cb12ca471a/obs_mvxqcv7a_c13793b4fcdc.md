---
type: file_edit
title: sqlite3 error
description: Error opening database file
resource: agentmemory://observation/obs_mvxqcv7a_c13793b4fcdc
tags: ["database error", "file_edit"]
timestamp: 2026-11-01T11:11:56.658447+00:00
source: agentmemory
session_id: local-7639efe6cf94028cbc97e241be74d377d9f95e5c68453db289d271cb12ca471a
importance: 6
confidence: 0.9
---
# Summary

The sqlite3 command failed to open the database file &quot;/Volumes/davec/.hermes/projects.db&quot; due to an error opening the file.

## Facts
- command: sqlite3 -header -column /Volumes/davec/.hermes/projects.db "select id,slug,name,primary_path,archived from projects where lower(name) like '%home%';" 2>&1

## Concepts
- database error

## Files
- `/Volumes/davec/.hermes/projects.db`

_Importance: 6 · Confidence: 0.9_
