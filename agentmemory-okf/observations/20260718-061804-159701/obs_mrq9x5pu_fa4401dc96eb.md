---
type: FileRead
title: Agentmemory MCP server wrapper script with session management
description: Bash script for starting iii-engine and agentmemory services with automatic session registration
resource: agentmemory://observation/obs_mrq9x5pu_fa4401dc96eb
tags: ["MCP server wrapper", "session management", "process orchestration", "REST API proxy mode", "fileread"]
timestamp: 2026-07-18T11:18:37.359303+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 7
confidence: 1
---
# Summary

Bash wrapper script that orchestrates the agentmemory MCP server infrastructure by starting iii-engine and agentmemory services if needed, managing session registration with TTL-based reuse, and forcing proxy mode to ensure all memory operations go through the REST API backend.

## Facts
- Script path: /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
- AGENTMEMORY_DIR=/Volumes/AI/agentmemory
- REST_URL defaults to http://localhost:3111 with fallback to 10.1.2.1:3111 for pve.local
- AGENTMEMORY_FORCE_PROXY=1 forces all memory ops to REST API instead of local KV
- Uses Redis at redis://localhost:6379 for persistent state
- SESSION_TTL=7200 (2 hours) for session reuse logic
- Session reuse validates PPID matches and TTL hasn't expired
- Port 3111 used for iii-engine, port 3113 for agentmemory service

## Concepts
- MCP server wrapper
- session management
- process orchestration
- REST API proxy mode

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`
- `/Volumes/AI/agentmemory/dist/iii-config.yaml`

_Importance: 7 · Confidence: 1_
