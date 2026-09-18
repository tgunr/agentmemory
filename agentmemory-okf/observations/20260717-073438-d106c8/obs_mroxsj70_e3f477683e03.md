---
type: file_edit
title: Fix NULL to null in hermes-sessions test
description: Replace SQL-style NULL with JavaScript null in test fixture
resource: agentmemory://observation/obs_mroxsj70_e3f477683e03
tags: ["TypeScript null vs SQL NULL", "SQLite test fixtures", "session_key null handling", "better-sqlite3 prepared statements", "file_edit"]
timestamp: 2026-07-17T12:51:19.977051+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Fixed a TypeScript compilation error where SQL-style NULL was used instead of JavaScript null in a test fixture. The test inserts a session record with a null session_key to test title lookup by session_key only. The LSP diagnostic confirmed the fix resolved the "Cannot find name 'NULL'" error.

## Facts
- Changed NULL to null in .run() call for session ID "20260716_151225_199ae8"
- File is a test file for hermes-sessions functionality
- LSP diagnostic confirmed NULL was not a valid identifier (TS2304)
- The insert statement targets sessions table with columns: id, session_key, source, title
- This session has null session_key but a title ("Title by session_key only")

## Concepts
- TypeScript null vs SQL NULL
- SQLite test fixtures
- session_key null handling
- better-sqlite3 prepared statements

## Files
- `/Volumes/AI/agentmemory/test/hermes-sessions.test.ts`

_Importance: 4 · Confidence: 1_
