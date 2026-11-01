---
type: file_edit
title: Extract root database holders
description: Lsof output for database files.
resource: agentmemory://observation/obs_mvwx8580_c1bea0d2fcae
tags: ["Database files", "file_edit"]
timestamp: 2026-10-31T21:36:27.495745+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 4
confidence: 0.9
---
# Summary

Executed lsof command to extract root database holders from the state database. The output included several entries for the same database, with repeating FD entries.

## Facts
- Lsof output
- Database file system details

## Concepts
- Database files

## Files
- `/Users/davec/.hermes/state.db`

_Importance: 4 · Confidence: 0.9_
