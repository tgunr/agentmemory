---
type: Search
title: SDK trigger functions in api.ts
description: Discovering available trigger functions and API endpoints in agentmemory
resource: agentmemory://observation/obs_mroq8too_a05407bb1f77
tags: ["SDK trigger pattern", "Memory compression triggers", "API endpoint registration", "Session lifecycle hooks", "Function IDs (mem::*, api::*)", "search"]
timestamp: 2026-07-17T09:20:03.140918+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

Search revealed the trigger architecture in agentmemory's API layer. The system uses sdk.trigger() to invoke memory operations (observe, context, search, compress) and replay functions. An HTTP-triggered compress-file endpoint is registered at /agentmemory/compress-file.

## Facts
- File: /Volumes/AI/agentmemory/src/triggers/api.ts
- 209 total matches found (results truncated)
- Trigger functions identified: mem::reset-metrics, mem::observe, mem::context, mem::search, mem::compress-file, mem::replay::load, mem::replay::import-jsonl
- API trigger registered: api::compress-file at /agentmemory/compress-file (POST)
- Session lifecycle triggers present (session-stopped)
- Uses sdk.trigger() pattern with function_id and payload parameters

## Concepts
- SDK trigger pattern
- Memory compression triggers
- API endpoint registration
- Session lifecycle hooks
- Function IDs (mem::*, api::*)

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 6 · Confidence: 1_
