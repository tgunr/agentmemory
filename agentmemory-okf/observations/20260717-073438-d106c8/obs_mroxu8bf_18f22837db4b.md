---
type: CommandRun
title: Vitest test run: 1 failed, 1 passed suite
description: Integration test failed due to missing agentmemory service
resource: agentmemory://observation/obs_mroxu8bf_18f22837db4b
tags: ["vitest testing framework", "integration testing", "service dependencies", "test environment setup", "commandrun"]
timestamp: 2026-07-17T12:52:39.191254+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Ran vitest on two test files. The session-end-triggers-graph test suite passed with all tests successful, but the integration test suite failed because the agentmemory service is not running at localhost:3111. The integration test requires the service to be started with docker compose up -d && npm start before running.

## Facts
- Command: npx vitest run test/session-end-triggers-graph.test.ts test/integration.test.ts
- Test results: 1 failed suite, 1 passed suite (2 total files)
- 12 tests passed, 20 tests skipped
- Failure: test/integration.test.ts - agentmemory not running at http://localhost:3111
- Error thrown at test/integration.test.ts:36:13
- Exit code: 0 (despite test failure)

## Concepts
- vitest testing framework
- integration testing
- service dependencies
- test environment setup

## Files
- `test/session-end-triggers-graph.test.ts`
- `test/integration.test.ts`

_Importance: 4 · Confidence: 1_
