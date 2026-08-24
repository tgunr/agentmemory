---
type: Search
title: Search for trigger registration patterns in api.ts
description: Looking for api_path, function_id, and trigger registration patterns
resource: agentmemory://observation/obs_mroq8y0z_c749ae64d4e8
tags: ["API trigger registration", "SDK trigger API", "function_id namespace pattern", "HTTP trigger configuration", "search"]
timestamp: 2026-07-17T09:20:08.767652+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

Searched the triggers API file for trigger registration patterns. Found sentinel-trigger and sentinel-check implementations showing how triggers are registered with specific API paths and function IDs using the SDK's registerTrigger and registerFunction methods.

## Facts
- Searched file: /Volumes/AI/agentmemory/src/triggers/api.ts
- Pattern: api_path.*trigger|generic.*trigger|/agentmemory/trigger|function_id.*body.function_id|body.function_id
- Found 7 total matches in the file
- Line 2872: trigger call with function_id "mem::sentinel-trigger"
- Line 2875: registerTrigger with api_path "/agentmemory/sentinels/trigger", http_method "POST"
- Line 2877: registerFunction for "api::sentinel-check"
- Trigger pattern uses namespaced function_id format: "mem::" and "api::" prefixes

## Concepts
- API trigger registration
- SDK trigger API
- function_id namespace pattern
- HTTP trigger configuration

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
