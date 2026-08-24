---
type: FileRead
title: Reading API endpoint registration for session management
description: Lines 580-659 of api.ts showing HTTP trigger registration
resource: agentmemory://observation/obs_mrox8kxg_64f697fb1149
tags: ["HTTP API endpoints", "session management", "SDK registration pattern", "middleware authentication", "multi-agent support", "key-value storage", "fileread"]
timestamp: 2026-07-17T12:35:49.098914+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Reading TypeScript code that registers HTTP API endpoints for an agent memory system. The code defines session lifecycle management (start/end) and replay import functionality using an SDK pattern with middleware authentication support. Session management includes multi-agent support via agentId override.

## Facts
- File: /Volumes/AI/agentmemory/src/triggers/api.ts (3224 lines total)
- Endpoint: POST /agentmemory/replay/import-jsonl (function_id: api::replay::import)
- Endpoint: POST /agentmemory/session/start (function_id: api::session::start) with middleware::api-auth
- Endpoint: POST /agentmemory/session/end (function_id: api::session::end)
- Session object structure: id, project, cwd, startedAt, status, observationCount, optional title/summary/firstPrompt/agentId
- Session start validates sessionId, project, cwd as required non-empty strings
- Session start allows agentId override from request body for multi-agent runtimes, falls back to AGENT_ID env
- Session start calls mem::context trigger after storing session in kv.set
- Session end updates endedAt timestamp and sets status to "completed"
- Uses sdk.registerFunction and sdk.registerTrigger pattern for HTTP API registration

## Concepts
- HTTP API endpoints
- session management
- SDK registration pattern
- middleware authentication
- multi-agent support
- key-value storage

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
