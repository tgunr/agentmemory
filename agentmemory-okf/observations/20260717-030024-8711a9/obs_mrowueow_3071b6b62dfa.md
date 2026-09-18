---
type: FileRead
title: Reading API trigger registration file
description: Agent memory system API endpoints for graph, recompress, delete, and consolidation
resource: agentmemory://observation/obs_mrowueow_3071b6b62dfa
tags: ["API triggers", "SDK registration pattern", "KV store operations", "search index management", "vector index", "authentication middleware", "observation lifecycle", "fileread"]
timestamp: 2026-07-17T12:24:47.832871+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

Reading the API trigger registration file to understand the agent memory system's HTTP endpoints. This section shows backfill/purge helpers including recompress (re-runs compression on stored observations) and observations-delete (removes observations from all indexes). These endpoints use the SDK's function registration pattern with authentication and interact with KV storage, search indexes, and vector indexes.

## Facts
- File has 3282 total lines, reading lines 1642-1716
- Registers API endpoints: /agentmemory/graph/build, /agentmemory/recompress, /agentmemory/observations/delete
- api::recompress triggers mem::compress function for re-processing stored observations
- api::observations-delete removes observations from KV store, search index, and vector index
- Uses SDK pattern with registerFunction and registerTrigger methods
- Authentication via checkAuth function with secret parameter
- Manages observation counts in session metadata via kv.update
- api::consolidate-pipeline triggers mem::consolidate-pipeline function

## Concepts
- API triggers
- SDK registration pattern
- KV store operations
- search index management
- vector index
- authentication middleware
- observation lifecycle

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 4 · Confidence: 1_
