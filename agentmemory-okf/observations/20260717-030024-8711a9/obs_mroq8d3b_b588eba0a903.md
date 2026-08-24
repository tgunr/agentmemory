---
type: Search
title: Search for compression and observation API patterns
description: Found 43 matches in api.ts related to compression functionality
resource: agentmemory://observation/obs_mroq8d3b_b588eba0a903
tags: ["API endpoints", "Compression functionality", "Knowledge graph", "Auto-compress settings", "Observation processing", "search"]
timestamp: 2026-07-17T09:19:41.636125+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

A search was performed on the API triggers file to identify compression-related functionality and observation API paths. The results reveal a comprehensive compression architecture including auto-compress settings, file compression endpoints, flow compression, and knowledge graph integration that processes compressed observations.

## Facts
- Search pattern: "compress|recompress|api_path.*observation"
- Total matches: 43 in /Volumes/AI/agentmemory/src/triggers/api.ts
- Found AGENTMEMORY_AUTO_COMPRESS setting (lines 208-215) with LLM-powered compression option
- Found api::compress-file function registered at /agentmemory/compress-file (POST)
- Found api::observations function registered at /agentmemory/observations (GET)
- Found knowledge graph backfill logic that processes compressed observations with titles (lines 1579-1605)
- Found api::flow-compress function registered at /agentmemory/flow/compress (POST)

## Concepts
- API endpoints
- Compression functionality
- Knowledge graph
- Auto-compress settings
- Observation processing

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
