---
type: Search
title: Search for search/vector index functions in search.ts
description: Found exports for getSearchIndex and vectorIndexRemove, plus imports from state modules
resource: agentmemory://observation/obs_mroqa99c_44193196c1ff
tags: ["Search index management", "Vector index management", "TypeScript exports", "Codebase exploration", "search"]
timestamp: 2026-07-17T09:21:09.981187+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 2
confidence: 1
---
# Summary

A search was performed in search.ts to locate API trigger registrations and vector/search index management functions. The search confirmed the presence of getSearchIndex and vectorIndexRemove exports, along with their respective state module imports, but did not find registerApiTriggers.

## Facts
- File searched: /Volumes/AI/agentmemory/src/functions/search.ts
- Imports SearchIndex from '../state/search-index.js' and VectorIndex from '../state/vector-index.js'
- Exports getSearchIndex() at line 17 and vectorIndexRemove(id: string) at line 38
- getSearchIndex() is used internally at lines 222 and 334
- Pattern registerApiTriggers was not found in the file

## Concepts
- Search index management
- Vector index management
- TypeScript exports
- Codebase exploration

## Files
- `/Volumes/AI/agentmemory/src/functions/search.ts`

_Importance: 2 · Confidence: 1_
