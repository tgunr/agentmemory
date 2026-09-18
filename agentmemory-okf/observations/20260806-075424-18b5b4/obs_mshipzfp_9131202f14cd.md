---
type: CommandRun
title: Run of pnpm tests failed
description: Tests failed due to assertion errors and unexpected behavior
resource: agentmemory://observation/obs_mshipzfp_9131202f14cd
tags: ["Testing Concurrency", "Test Fixtures", "API Calls", "Data Validation", "commandrun"]
timestamp: 2026-08-06T12:54:45.921866+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 4
confidence: 0.9
---
# Summary

The terminal tool executed pnpm run test with the timeout set to 120 seconds. However, instead of passing all tests, pnpm run test resulted in a majority of test failures due to assertion errors and unexpected behavior. Specifically, summary files exhibit two false positives, multiple false negatives for chunking and retries. The test logs indicate issues surrounding provider error propagation, expected vs. received states, API call attachments, session rendering, and revalidation.

## Facts
- The summary file contains two false positives and multiple false negatives
- Several test cases fail due to incorrect implementation or unexpected behavior

## Concepts
- Testing Concurrency
- Test Fixtures
- API Calls
- Data Validation

## Files
- `/Volumes/AI/agentmemory/test/viewer-session-id.test.ts`
- `/Volumes/AI/agentmemory/test/mem::summarize.test.ts`
- `/Volumes/AI/agentmemory/test/summarize.test.ts`

_Importance: 4 · Confidence: 0.9_
