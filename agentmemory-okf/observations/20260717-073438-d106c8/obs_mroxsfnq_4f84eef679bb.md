---
type: CommandRun
title: Vitest run fails due to undefined NULL in hermes-sessions test
description: ReferenceError in SQLite insert statement for sessions table
resource: agentmemory://observation/obs_mroxsfnq_4f84eef679bb
tags: ["Vitest test execution", "SQLite database inserts", "JavaScript ReferenceError", "better-sqlite3 bindings", "commandrun"]
timestamp: 2026-07-17T12:51:15.393614+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Running the hermes-sessions test suite resulted in a ReferenceError because the uppercase variable NULL is not defined in JavaScript. The error occurs during a SQLite insert operation at line 37, requiring the fix of changing NULL to the native null keyword.

## Facts
- Executed vitest on test/hermes-sessions.test.ts in /Volumes/AI/agentmemory
- Test suite failed with ReferenceError: NULL is not defined at line 37
- Error triggered by using uppercase NULL instead of JavaScript null in db.prepare().run() for SQLite INSERT
- 10 tests were skipped as a result of the suite failure

## Concepts
- Vitest test execution
- SQLite database inserts
- JavaScript ReferenceError
- better-sqlite3 bindings

## Files
- `/Volumes/AI/agentmemory/test/hermes-sessions.test.ts`

_Importance: 5 · Confidence: 1_
