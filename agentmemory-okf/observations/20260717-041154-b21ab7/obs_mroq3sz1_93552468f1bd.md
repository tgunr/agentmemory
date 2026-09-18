---
type: FileRead
title: Read api::observe function registration in triggers API
description: Examining hook payload validation logic
resource: agentmemory://observation/obs_mroq3sz1_93552468f1bd
tags: ["API endpoint registration", "Hook payload handling", "Request validation", "Type-safe parameter extraction", "fileread"]
timestamp: 2026-07-17T09:16:08.916689+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 2
confidence: 1
---
# Summary

Reading the api::observe endpoint implementation which handles incoming hook payloads. The function validates that all required fields (hookType, sessionId, project, cwd, timestamp) are present as non-empty strings before processing, returning a 400 error if validation fails.

## Facts
- File: /Volumes/AI/agentmemory/src/triggers/api.ts (3195 lines, 122086 bytes)
- Read lines 286-300 of api.ts
- Function registers "api::observe" endpoint via sdk.registerFunction
- Endpoint accepts HookPayload with fields: hookType, sessionId, project, cwd, timestamp
- All five fields validated as required non-empty strings with 400 error response
- Uses asNonEmptyString helper for type-safe extraction from request body

## Concepts
- API endpoint registration
- Hook payload handling
- Request validation
- Type-safe parameter extraction

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 2 · Confidence: 1_
