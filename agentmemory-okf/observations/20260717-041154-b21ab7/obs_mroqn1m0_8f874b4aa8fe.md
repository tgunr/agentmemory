---
type: CommandRun
title: npm test run shows 10 failed tests across 4 files
description: Viewer session test fails because two requests were recorded instead of one
resource: agentmemory://observation/obs_mroqn1m0_8f874b4aa8fe
tags: ["automated testing", "request interception", "bearer token authentication", "viewer session API middleware", "test assertion failure", "commandrun"]
timestamp: 2026-07-17T09:31:06.594732+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

The test suite revealed a failure in the viewer session rendering test, where an API health check triggered two intercepted requests instead of the expected single authenticated request. This indicates an extra unintended request or a duplicate request capture in the viewer bearer attachment flow.

## Facts
- Command: `cd /Volumes/AI/agentmemory && unset PYTHONPATH && npm test 2>&1 | tail -25`
- Test result: 4 failed test files, 10 failed tests, 1419 passed tests out of 1429
- Failing test: `test/viewer-session-id.test.ts` line 191 in `attaches the saved viewer bearer to API calls`
- Assertion: expected `requests` array to have length 1 but got 2
- Expected API call Authorization header to be `Bearer viewe…` (saved viewer bearer token)
- Exit code 0 despite test failures (pipeline captured output)

## Concepts
- automated testing
- request interception
- bearer token authentication
- viewer session API middleware
- test assertion failure

## Files
- `/Volumes/AI/agentmemory/test/viewer-session-id.test.ts`

_Importance: 5 · Confidence: 1_
