---
type: Search
title: Search for MetricsStore references across codebase
description: Found 4 matches in source files
resource: agentmemory://observation/obs_mropywpd_44321837b2f5
tags: ["MetricsStore", "module imports", "eval/metrics-store", "search"]
timestamp: 2026-07-17T09:12:20.494232+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

Search found MetricsStore imported in four locations: main index.ts, and three function/trigger files. This reveals the metrics store module is used across the core application, compression functions, API triggers, and summarization functions.

## Facts
- total_count: 4 matches found
- /Volumes/AI/agentmemory/src/index.ts imports MetricsStore at line 96
- /Volumes/AI/agentmemory/src/functions/compress.ts imports MetricsStore type at line 23
- /Volumes/AI/agentmemory/src/triggers/api.ts imports MetricsStore type at line 7
- /Volumes/AI/agentmemory/src/functions/summarize.ts imports MetricsStore type at line 20
- All imports reference "./eval/metrics-store.js" or "../eval/metrics-store.js"

## Concepts
- MetricsStore
- module imports
- eval/metrics-store

## Files
- `/Volumes/AI/agentmemory/src/index.ts`
- `/Volumes/AI/agentmemory/src/functions/compress.ts`
- `/Volumes/AI/agentmemory/src/triggers/api.ts`
- `/Volumes/AI/agentmemory/src/functions/summarize.ts`

_Importance: 4 · Confidence: 1_
