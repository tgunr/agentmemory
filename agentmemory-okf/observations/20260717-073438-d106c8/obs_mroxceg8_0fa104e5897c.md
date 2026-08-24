---
type: FileRead
title: Hermes session lookup failure-path tests
description: Vitest coverage verifies missing or invalid database paths return undefined.
resource: agentmemory://observation/obs_mroxceg8_0fa104e5897c
tags: ["Vitest", "SQLite error handling", "better-sqlite3", "temporary filesystem cleanup", "dynamic import", "fileread"]
timestamp: 2026-07-17T12:38:47.332247+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

The tests validate that Hermes session-title lookup fails safely when its SQLite database cannot be reached or opened. They deliberately target missing-file paths so the helper returns undefined without depending on the native better-sqlite3 binding.

## Facts
- The test file mocks ../src/logger.js and dynamically imports lookupHermesSessionTitle from ../src/state/hermes-sessions.js.
- One test passes /nonexistent/path/to/db.sqlite and expects undefined.
- A second test creates a temporary directory, references empty.db without creating the file, expects undefined, and recursively removes the directory.
- The suite avoids loading incompatible better-sqlite3 native bindings by exercising database-not-found behavior.
- Cleanup removes fakeDbPath if it exists, while the beforeAll callback is empty.

## Concepts
- Vitest
- SQLite error handling
- better-sqlite3
- temporary filesystem cleanup
- dynamic import

## Files
- `/Volumes/AI/agentmemory/test/hermes-sessions.test.ts`
- `../src/logger.js`
- `../src/state/hermes-sessions.js`

_Importance: 3 · Confidence: 1_
