---
type: CommandRun
title: Vitest run shows better-sqlite3 native bindings missing
description: hermes-sessions.test.ts fails due to missing .node binary for better-sqlite3@12.11.1
resource: agentmemory://observation/obs_mroxr3pr_b9f9132f1fe2
tags: ["vitest test runner", "better-sqlite3 native bindings", "node-gyp native module compilation", "SQLite database testing", "darwin arm64 platform", "commandrun"]
timestamp: 2026-07-17T12:50:13.258573+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Ran vitest on two test suites. copilot-plugin.test.ts passed all 16 tests, but hermes-sessions.test.ts failed because better-sqlite3 native bindings are not compiled for the current platform (darwin/arm64, Node v127). The .node binary needs to be rebuilt via node-gyp or pnpm rebuild.

## Facts
- Command run in /Volumes/AI/agentmemory with 300s timeout
- test/copilot-plugin.test.ts passed (16 tests, 238ms)
- test/hermes-sessions.test.ts failed: better-sqlite3 native bindings not found
- better-sqlite3@12.11.1 .node binary missing for darwin/arm64 Node v127
- Error occurs at test/hermes-sessions.test.ts:20 when instantiating new Database()
- Test results: 1 failed | 1 passed; 16 passed | 10 skipped (26 total)
- Total duration: 377ms

## Concepts
- vitest test runner
- better-sqlite3 native bindings
- node-gyp native module compilation
- SQLite database testing
- darwin arm64 platform

## Files
- `test/hermes-sessions.test.ts`
- `test/copilot-plugin.test.ts`

_Importance: 5 · Confidence: 1_
