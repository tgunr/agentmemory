---
type: FileRead
title: Read notification.ts hook for AgentMemory
description: Intercepts permission_prompt notifications and forwards to observe API
resource: agentmemory://observation/obs_mrox95fa_82e1042c1a25
tags: ["AgentMemory hooks", "stdin JSON parsing", "REST API observation", "permission prompt interception", "Bearer token authentication", "fileread"]
timestamp: 2026-07-17T12:36:15.663462+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

The agent read the notification hook script which intercepts permission_prompt notifications from stdin. It filters out SDK child contexts and forwards relevant notification data (title, message, session ID) to the AgentMemory REST API for observation and tracking.

## Facts
- Reads and parses JSON payload from stdin.
- Bypasses execution if AGENTMEMORY_SDK_CHILD=1 or entrypoint is sdk-ts.
- Filters events to only process notification_type equal to permission_prompt.
- POSTs hook data to /agentmemory/observe endpoint using Bearer token auth.
- Uses 2000ms fetch timeout and 500ms process exit timeout.

## Concepts
- AgentMemory hooks
- stdin JSON parsing
- REST API observation
- permission prompt interception
- Bearer token authentication

## Files
- `/Volumes/AI/agentmemory/src/hooks/notification.ts`

_Importance: 4 · Confidence: 1_
