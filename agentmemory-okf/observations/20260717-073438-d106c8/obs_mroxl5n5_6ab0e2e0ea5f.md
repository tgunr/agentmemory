---
type: FileRead
title: Read API trigger registrations for leases and routines
description: Examining HTTP endpoint definitions and SDK mappings (lines 2440-2499)
resource: agentmemory://observation/obs_mroxl5n5_6ab0e2e0ea5f
tags: ["API endpoint registration", "HTTP triggers", "authentication middleware", "SDK proxy pattern", "lease management", "routine management", "fileread"]
timestamp: 2026-07-17T12:45:35.819798+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Read lines 2440-2499 of the API triggers file to map out HTTP endpoint definitions for leases and routines. The code reveals a proxy pattern where external API routes are registered via an SDK, authenticated, and delegated to internal memory functions.

## Facts
- File: /Volumes/AI/agentmemory/src/triggers/api.ts (3234 lines, 123KB)
- Registers HTTP endpoints using sdk.registerFunction and sdk.registerTrigger
- POST /agentmemory/leases/renew delegates to mem::lease-renew (requires actionId, agentId)
- POST /agentmemory/routines delegates to mem::routine-create (requires name, steps)
- GET /agentmemory/routines delegates to mem::routine-list (optional frozen query param)
- api::routine-run defined starting at line 2493 (requires routineId, optional project/initiatedBy)
- All endpoints enforce authentication via checkAuth(req, secret)
- Follows a proxy pattern mapping external api:: functions to internal mem:: functions

## Concepts
- API endpoint registration
- HTTP triggers
- authentication middleware
- SDK proxy pattern
- lease management
- routine management

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 4 · Confidence: 1_
