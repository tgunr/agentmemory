---
type: Search
title: Search for "mem:metrics" in TypeScript files
description: Locating usage of mem:metrics key in schema and tests
resource: agentmemory://observation/obs_mropzfef_85e8721f0e8e
tags: ["key-value store", "state schema", "metrics tracking", "sentinel tests", "search"]
timestamp: 2026-07-17T09:12:44.725065+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Searched the codebase to locate the definition and usage of the "mem:metrics" key. Identified its declaration in the state schema and its application in sentinel tests for storing API call metrics in a key-value store.

## Facts
- Searched *.ts files in /Volumes/AI/agentmemory for pattern "mem:metrics"
- Found 3 total matches across 2 files
- /Volumes/AI/agentmemory/src/state/schema.ts defines metrics: "mem:metrics" on line 9
- /Volumes/AI/agentmemory/test/sentinels.test.ts uses kv.set("mem:metrics", "api_calls", ...) on lines 569 and 593

## Concepts
- key-value store
- state schema
- metrics tracking
- sentinel tests

## Files
- `/Volumes/AI/agentmemory/src/state/schema.ts`
- `/Volumes/AI/agentmemory/test/sentinels.test.ts`

_Importance: 3 · Confidence: 1_
