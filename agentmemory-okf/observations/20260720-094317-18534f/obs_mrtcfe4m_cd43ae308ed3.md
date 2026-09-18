---
type: file_write
title: Write AgentMemory API diagnostic script
description: Bash script to query sessions, observations, search, and health endpoints
resource: agentmemory://observation/obs_mrtcfe4m_cd43ae308ed3
tags: ["AgentMemory API", "API diagnostics", "Bash scripting", "Semantic search", "Circuit breaker", "JSON parsing", "file_write"]
timestamp: 2026-07-20T14:52:05.826600+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

A diagnostic bash script was created to inspect the state of a local AgentMemory service. It queries multiple API endpoints to gather session statistics, specific observation data, semantic search results, and system health metrics including circuit breaker state.

## Facts
- Script written to /tmp/am_deep.sh (resolved to /private/tmp/am_deep.sh)
- Targets local AgentMemory API at http://127.0.0.1:3111
- Reads bearer token from ~/.agentmemory/.env
- Inspects session counts, observations for session 20260720_094317_18534f, semantic search for "OKF markdown", and health/circuit breaker metrics
- Uses inline python3 for JSON parsing and formatting

## Concepts
- AgentMemory API
- API diagnostics
- Bash scripting
- Semantic search
- Circuit breaker
- JSON parsing

## Files
- `/tmp/am_deep.sh`

_Importance: 4 · Confidence: 1_
