---
type: Search
title: Find test files importing vi from vitest
description: Regex search for vitest mock imports in test directory
resource: agentmemory://observation/obs_mroqmay1_88e427ee3504
tags: ["vitest", "vi mocking", "test imports", "unit testing", "search"]
timestamp: 2026-07-17T09:30:32.037107+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Searched for test files that import the vi mocking utility from vitest. Found 3 test files all importing vi along with standard test lifecycle and assertion functions. This identifies which test files use vitest mocking capabilities.

## Facts
- Search path: /Volumes/AI/agentmemory/test
- Pattern: import \{.*vi,.*\} from "vitest"
- 3 total matches found
- /Volumes/AI/agentmemory/test/embedding-provider.test.ts imports: describe, it, expect, vi, beforeEach, afterEach
- /Volumes/AI/agentmemory/test/working-memory.test.ts imports: describe, it, expect, vi, beforeEach
- /Volumes/AI/agentmemory/test/multimodal.test.ts imports: describe, it, expect, vi, afterAll, beforeEach

## Concepts
- vitest
- vi mocking
- test imports
- unit testing

## Files
- `/Volumes/AI/agentmemory/test/embedding-provider.test.ts`
- `/Volumes/AI/agentmemory/test/working-memory.test.ts`
- `/Volumes/AI/agentmemory/test/multimodal.test.ts`

_Importance: 3 · Confidence: 1_
