---
type: Error
title: SQLite query failed - missing last_active column in sessions table
description: Python script to enumerate sessions across databases failed on schema mismatch
resource: agentmemory://observation/obs_mrq9iaoi_041751a68ebd
tags: ["SQLite schema", "database migration", "sessions table", "error"]
timestamp: 2026-07-18T11:07:03.951462+00:00
source: agentmemory
session_id: 20260718_060537_d8b058
importance: 6
confidence: 1
---
# Summary

A Python diagnostic script failed when querying the sessions table because the expected last_active column doesn't exist. This reveals the database schema differs from what the script assumes, requiring either schema modification or query adjustment to handle the discrepancy.

## Facts
- state.db contains 158 sessions
- sessions table missing last_active column
- sqlite3.OperationalError raised at script line 16
- script attempted SELECT with columns: id,title,message_count,last_active

## Concepts
- SQLite schema
- database migration
- sessions table

## Files
- `state.db`

_Importance: 6 · Confidence: 1_
