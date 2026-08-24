---
type: CommandRun
title: Failed tests in embedding-provider test suite
description: No API keys set causes LocalEmbeddingProvider to return null
resource: agentmemory://observation/obs_mshixqtq_0c5b7bfe6b8e
tags: ["tests", "embedding providers", "commandrun"]
timestamp: 2026-08-06T13:00:48.009617+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 6
confidence: 1
---
# Summary

The test suite for embedding-provider returned an error due to an expected null value. The test failed because no API keys were set.

## Facts
- Total time taken by the test: 3ms
- Total number of tests failed: 7
- Total command execution time: 60 seconds

## Concepts
- tests
- embedding providers

## Files
- `/Volumes/AI/agentmemory/test/embedding-provider.test.ts`

_Importance: 6 · Confidence: 1_
