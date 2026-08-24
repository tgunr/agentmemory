---
type: CommandRun
title: Hermes sessions test fails - NULL vs null ReferenceError
description: Vitest run of test/hermes-sessions.test.ts fails on line 34 due to undefined NULL identifier
resource: agentmemory://observation/obs_mroxs7pk_8ff8aa6e9c9e
tags: ["vitest test failure", "SQL NULL vs JavaScript null", "test fixture setup", "Hermes session title resolution", "ReferenceError debugging", "commandrun"]
timestamp: 2026-07-17T12:51:05.092296+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A vitest run of the Hermes sessions test suite failed entirely at suite setup due to a ReferenceError where `NULL` (SQL keyword) was used instead of JavaScript's `null` when inserting test fixtures. All 10 tests in the suite were skipped as a result. The fix is straightforward: replace `NULL` with `null` in the test setup code on line 34.

## Facts
- Test file: test/hermes-sessions.test.ts
- Failure at line 34:56 - ReferenceError: NULL is not defined
- Code uses `NULL` as a SQL parameter in `.run("20260717_041154_b21ab7", "caller-bbb", "tui", NULL)`
- JavaScript uses lowercase `null`, not SQL-style `NULL`
- All 10 tests were skipped (suite-level failure, tests never ran)
- Test duration: 196ms; 1 test file failed out of 1
- Multiple test cases describe session title lookup behavior: matches by Hermes id, session_key, fallback to explicit title, prefers Hermes title over explicit
- Working directory: /Volumes/AI/agentmemory

## Concepts
- vitest test failure
- SQL NULL vs JavaScript null
- test fixture setup
- Hermes session title resolution
- ReferenceError debugging

## Files
- `test/hermes-sessions.test.ts`

_Importance: 5 · Confidence: 1_
