---
type: CommandRun
title: Close stale agentmemory sessions
description: Ended 110 zombie sessions inactive for >2 hours via API
resource: agentmemory://observation/obs_mrtd0fkq_f35ac59160dc
tags: ["Session management", "Zombie session cleanup", "AgentMemory API", "REST API client", "commandrun"]
timestamp: 2026-07-20T15:08:27.481252+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Executed a cleanup script to close stale agentmemory sessions that hadn't been updated in over 2 hours. The script successfully ended 110 zombie sessions while preserving the current active session.

## Facts
- Executed inline Python script to query and end sessions via agentmemory API at 127.0.0.1:3111
- Criteria for stale: updatedAt timestamp older than 2 hours from current UTC time
- Explicitly excluded current live session ID 20260720_094317_18534f from termination
- Result: ended 110 sessions, skipped 1, out of 111 total active sessions
- Authentication uses Bearer token derived from ~/.agentmemory/.env

## Concepts
- Session management
- Zombie session cleanup
- AgentMemory API
- REST API client

## Files
- `~/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
