---
type: Search
title: Search api.ts for index removal and validation patterns
description: Found 48 matches for validation, search index, and stream constants
resource: agentmemory://observation/obs_mroqb38h_d9c1db205d63
tags: ["API parameter validation", "vector index removal", "search index management", "type-safe string extraction", "streaming configuration", "search"]
timestamp: 2026-07-17T09:21:48.828580+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

Searched the triggers API file for patterns related to data validation, search index removal, and streaming. Found widespread use of a custom asNonEmptyString helper for type-safe parameter extraction across numerous endpoints, alongside specific calls to remove observations from both text and vector search indexes when deleting data.

## Facts
- File searched: /Volumes/AI/agentmemory/src/triggers/api.ts
- Total matches found: 48
- asNonEmptyString helper defined at line 113 and used extensively for type-safe extraction of request body and query parameters
- getSearchIndex().remove() and vectorIndexRemove() called together at lines 1684-1685 to delete observations from both indexes
- STREAM.name and STREAM.viewerGroup constants referenced at lines 1695-1696 for streaming configuration

## Concepts
- API parameter validation
- vector index removal
- search index management
- type-safe string extraction
- streaming configuration

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
