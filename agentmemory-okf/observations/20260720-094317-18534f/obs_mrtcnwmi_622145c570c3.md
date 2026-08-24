---
type: file_write
title: Runtime diagnostics script for AgentMemory service
description: Bash script checking liveness, sessions, search, health, and log errors
resource: agentmemory://observation/obs_mrtcnwmi_622145c570c3
tags: ["AgentMemory diagnostics", "health check endpoints", "semantic search smoke test", "circuit breaker monitoring", "compression XML parsing", "index persistence", "Bearer token auth", "Hermes skill integration", "file_write"]
timestamp: 2026-07-20T14:58:43.046768+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

A comprehensive runtime diagnostic script was created for the AgentMemory service as part of the hermes integration skill. The script validates the full read and consolidation paths (not just liveness), checking session management, semantic search, compression health, and scanning service logs for known failure patterns.

## Facts
- Script written to skill 'agentmemory-hermes-integration' at /Users/davec/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/scripts/runtime-diagnostics.sh
- AgentMemory default URL: http://127.0.0.1:3111 (overridable via AGENTMEMORY_URL env var)
- Script reads auth secret from ~/.agentmemory/.env (AGENTMEMORY_SECRET key)
- Checks endpoints: /agentmemory/livez, /agentmemory/sessions, /agentmemory/observations, /agentmemory/search, /agentmemory/health
- Parses /health for functionMetrics (success/failure counts, avg latency), circuitBreaker state, and compression notes
- Grep checks /tmp/iii-engine.log for 'index persistence: failed to save' and /tmp/agentmemory-service.log for 'Failed to parse compression XML'
- Uses python3 inline scripts for JSON parsing of API responses

## Concepts
- AgentMemory diagnostics
- health check endpoints
- semantic search smoke test
- circuit breaker monitoring
- compression XML parsing
- index persistence
- Bearer token auth
- Hermes skill integration

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/scripts/runtime-diagnostics.sh`
- `~/.agentmemory/.env`
- `/tmp/iii-engine.log`
- `/tmp/agentmemory-service.log`

_Importance: 5 · Confidence: 1_
