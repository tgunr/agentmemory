---
type: FileRead
title: Reading API trigger definitions for graph operations
description: TypeScript file defining HTTP endpoints for knowledge graph management
resource: agentmemory://observation/obs_mroq9u0a_c86f19094fcf
tags: ["API endpoint registration", "SDK pattern", "Authentication middleware", "Knowledge graph operations", "Batch processing", "KV storage integration", "TypeScript", "HTTP triggers", "fileread"]
timestamp: 2026-07-17T09:20:50.213526+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

Reading the API trigger definitions file to understand the graph management endpoints. The file shows three main HTTP POST endpoints: reset, extract, and build operations for a knowledge graph system. The build endpoint specifically backfills the graph from existing compressed observations using batch processing with error handling and logging.

## Facts
- File contains API endpoint registrations for graph-reset, graph-extract, and graph-build operations
- Uses SDK pattern with registerFunction and registerTrigger methods
- Implements authentication via checkAuth middleware
- graph-build function backfills knowledge graph from compressed observations across all sessions
- Batch processing with configurable size (1-100, default 25)
- Integrates with KV storage for sessions and observations retrieval
- Lines 1540-1630 shown containing three endpoint definitions

## Concepts
- API endpoint registration
- SDK pattern
- Authentication middleware
- Knowledge graph operations
- Batch processing
- KV storage integration
- TypeScript
- HTTP triggers

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
