---
type: Search
title: Found getAgentId function definition and 15 usage sites
description: Searching for agent ID retrieval pattern across codebase
resource: agentmemory://observation/obs_mroxh8un_27e9f1751443
tags: ["agent scope isolation", "configuration function", "conditional agent ID retrieval", "fallback chains", "search"]
timestamp: 2026-07-17T12:42:33.356394+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Searched for getAgentId function definition and usage across the agentmemory codebase. Found the function is defined in config.ts and imported/used in 6 other files, primarily for agent-scoped memory operations. The pattern shows agent ID is only retrieved when agent scope isolation is enabled, otherwise undefined is used.

## Facts
- getAgentId() defined in config.ts:305, returns string | undefined
- Function used in 6 files: mcp/server.ts, triggers/api.ts, functions/search.ts, functions/remember.ts, functions/observe.ts, functions/smart-search.ts
- Usage pattern: conditionally called when isAgentScopeIsolated() returns true, otherwise undefined
- Often combined with explicit/request agent IDs using fallback chains (e.g., requestAgentId ?? getAgentId())

## Concepts
- agent scope isolation
- configuration function
- conditional agent ID retrieval
- fallback chains

## Files
- `/Volumes/AI/agentmemory/src/config.ts`
- `/Volumes/AI/agentmemory/src/mcp/server.ts`
- `/Volumes/AI/agentmemory/src/triggers/api.ts`
- `/Volumes/AI/agentmemory/src/functions/search.ts`
- `/Volumes/AI/agentmemory/src/functions/remember.ts`
- `/Volumes/AI/agentmemory/src/functions/observe.ts`
- `/Volumes/AI/agentmemory/src/functions/smart-search.ts`

_Importance: 5 · Confidence: 1_
