---
type: file_edit
title: Fix TS compilation error: SQL NULL to JS null
description: Replaced uppercase NULL with lowercase null in SQLite test insert
resource: agentmemory://observation/obs_mroxsbor_f8665ab9e345
tags: ["TypeScript type checking", "SQLite parameterized queries", "JavaScript null vs SQL NULL", "Test database fixtures", "file_edit"]
timestamp: 2026-07-17T12:51:10.247521+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Fixed a TypeScript compilation error in a test file where the SQL keyword NULL was incorrectly used instead of the JavaScript null literal in a SQLite parameterized query. This correction allows the test suite to compile and execute the database fixture setup properly.

## Facts
- Changed NULL to null in .run() arguments for SQLite insert in test file
- Resolves TypeScript error TS2304: Cannot find name 'NULL'
- Query inserts into 'sessions' table with id, session_key, source, title

## Concepts
- TypeScript type checking
- SQLite parameterized queries
- JavaScript null vs SQL NULL
- Test database fixtures

## Files
- `/Volumes/AI/agentmemory/test/hermes-sessions.test.ts`

_Importance: 4 · Confidence: 1_
