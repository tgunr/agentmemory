---
type: FileRead
title: Read AgentMemory MCP wrapper startup script
description: Wrapper configures proxy mode, session reuse, and service startup checks
resource: agentmemory://observation/obs_mroxmi35_80a100cd46db
tags: ["MCP server wrapper", "REST proxy mode", "session lifecycle", "PID file management", "service readiness check", "Redis persistence", "fileread"]
timestamp: 2026-07-17T12:46:38.593776+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

The Bash wrapper bootstraps the AgentMemory environment, forces REST-backed persistence, authenticates session registration, and reuses sessions scoped to the originating Kilo process. It uses listener and PID checks to avoid duplicate iii-engine and AgentMemory service instances before launching the MCP workflow.

## Facts
- The script sets AGENTMEMORY_FORCE_PROXY=1 and routes memory operations to AGENTMEMORY_URL, defaulting to http://localhost:3111 and replacing http://pve.local:3111 with http://10.1.2.1:3111.
- It loads AGENTMEMORY_SECRET from $HOME/.agentmemory/.env when present and defaults REDIS_URL to redis://localhost:6379.
- Sessions are cached in $HOME/.agentmemory/current-session and reused only when the stored parent PID matches $PPID and the session age is under SESSION_TTL=7200 seconds.
- New sessions are registered by /Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh using the current working directory, then exported as AGENTMEMORY_SESSION_ID.
- The wrapper checks TCP port 3111 before starting iii-engine from /Volumes/AI/agentmemory with /Users/davec/.local/bin/iii and dist/iii-config.yaml, waiting up to 15 seconds for readiness.
- It also checks TCP port 3113 for the AgentMemory service and records discovered process IDs under $HOME/.agentmemory.
- The read output was truncated after line 95, so the remainder of the AgentMemory service startup and MCP launch logic was not visible.

## Concepts
- MCP server wrapper
- REST proxy mode
- session lifecycle
- PID file management
- service readiness check
- Redis persistence

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`
- `/Volumes/AI/agentmemory/dist/iii-config.yaml`

_Importance: 3 · Confidence: 1_
