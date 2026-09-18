---
type: FileRead
title: Read session-end.sh hook script
description: Kilo Code session-end hook for AgentMemory REST API integration
resource: agentmemory://observation/obs_mroxmme0_343861f7f946
tags: ["bash hook script", "REST API client", "session lifecycle management", "bearer token authentication", "AgentMemory integration", "Kilo Code hooks", "fileread"]
timestamp: 2026-07-17T12:46:44.180827+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Read the session-end.sh hook script that handles AgentMemory session termination for Kilo Code. The script sends session metadata (ID, project, working directory) to the AgentMemory REST API with optional bearer token authentication.

## Facts
- Bash script called at end of each Kilo Code session
- POSTs to /agentmemory/session/end endpoint
- Default REST URL: http://localhost:3111 (configurable via AGENTMEMORY_URL env var)
- Accepts SESSION_ID as arg 1, PROJECT as arg 2 (defaults to pwd)
- Optional Bearer token auth via AGENTMEMORY_SECRET env var
- JSON body contains sessionId, project, and cwd fields
- 5-second connect timeout on curl requests
- Script is 27 lines, 912 bytes

## Concepts
- bash hook script
- REST API client
- session lifecycle management
- bearer token authentication
- AgentMemory integration
- Kilo Code hooks

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-end.sh`

_Importance: 3 · Confidence: 1_
