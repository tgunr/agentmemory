---
type: CommandRun
title: System diagnostics: Redis, config, and viewer API endpoints
description: Checking Redis status, iii-config store backends, and viewer session API routes
resource: agentmemory://observation/obs_mrtcgens_aa1353b88d21
tags: ["Redis diagnostics", "YAML configuration parsing", "HTTP API endpoint probing", "File-based KV store", "Agent memory architecture", "commandrun"]
timestamp: 2026-07-20T14:52:53.173682+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

The command diagnosed the local environment by verifying Redis connectivity and memory usage, inspecting the agentmemory configuration for KV store paths and ports, and probing the viewer's HTTP API to identify the correct session fetching endpoint (/sessions on port 3113).

## Facts
- Redis is reachable on 127.0.0.1:6379 with 899.38K memory used and 0 keys
- iii-config uses file_based store method for kv at /Users/davec/data/agentmemory/data/state_store.db and stream_store
- Viewer static assets are located at /Volumes/AI/agentmemory/dist/viewer/index.html
- Viewer API on port 3113 responds 200 to /sessions, but 404 to /api/sessions, /api/session/list, /api/observations, and /api/stats
- Allowed origins configured for localhost and 127.0.0.1 on ports 3111 and 3113

## Concepts
- Redis diagnostics
- YAML configuration parsing
- HTTP API endpoint probing
- File-based KV store
- Agent memory architecture

## Files
- `/Users/davec/.agentmemory/iii-config.yaml`
- `/Users/davec/data/agentmemory/data/state_store.db`
- `/Users/davec/data/agentmemory/data/stream_store`
- `/Volumes/AI/agentmemory/dist/viewer/index.html`

_Importance: 5 · Confidence: 1_
