---
type: file_edit
title: Hermes state.db tables and sessions
description: No context available
resource: agentmemory://observation/obs_mrtrets4_fb5d88a07e9f
tags: ["sqlite3", "file_edit"]
timestamp: 2026-07-20T21:51:33.696653+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 8
confidence: 1
---
# Summary

The tool edited a database file for the Hermes state database. The edit included executing SQL queries to list tables and sessions in the most recent session.

## Facts
- DB=~/.hermes/state.db\necho "=== current/most-recent session in Hermes state.db ==="
- import sqlite3, json\ndb=sqlite3.connect('/Users/davec/.hermes/state.db')
- db.execute("SELECT name FROM sqlite_master WHERE type='table'")

## Concepts
- sqlite3

## Files
- `/Users/davec/.hermes/state.db`

_Importance: 8 · Confidence: 1_
