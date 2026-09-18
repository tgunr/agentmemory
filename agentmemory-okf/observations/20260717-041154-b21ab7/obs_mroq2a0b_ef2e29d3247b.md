---
type: Search
title: Search for POST HTTP method registrations in API triggers
description: Found 219 total matches showing API endpoint configurations
resource: agentmemory://observation/obs_mroq2a0b_ef2e29d3247b
tags: ["API endpoint registration", "HTTP POST methods", "middleware authentication", "SDK triggers", "API routing", "search"]
timestamp: 2026-07-17T09:14:57.703631+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

Searched for POST HTTP method registrations in the API triggers file. Found 219 total matches showing numerous API endpoints registered with POST methods, most protected by api-auth middleware. This reveals the API surface area for the agentmemory system.

## Facts
- Searched for pattern http_method: "POST" in /Volumes/AI/agentmemory/src/triggers/api.ts
- Found 219 total matches across the codebase
- API endpoints include: /agentmemory/observe, /agentmemory/context, /agentmemory/search, /agentmemory/compress-file, /agentmemory/replay/import-jsonl, /agentmemory/session/start, /agentmemory/session/end
- Most endpoints use middleware::api-auth for authentication
- Endpoints registered via sdk.registerTrigger with type: "http"
- Results were truncated

## Concepts
- API endpoint registration
- HTTP POST methods
- middleware authentication
- SDK triggers
- API routing

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 4 · Confidence: 1_
