---
type: CommandRun
title: Health check for agentmemory service
description: Verifying agentmemory service is running on port 3111
resource: agentmemory://observation/obs_mrtc66qu_3249d0f1301c
tags: ["health check", "liveness endpoint", "service monitoring", "HTTP status codes", "curl", "commandrun"]
timestamp: 2026-07-20T14:44:56.356090+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 2
confidence: 1
---
# Summary

A curl command was executed to verify the agentmemory service is running and healthy on localhost:3111. The service responded successfully with HTTP 200, confirming it's operational with viewer functionality enabled on port 3113.

## Facts
- Command checks agentmemory service liveness endpoint at /agentmemory/livez
- Service responds with HTTP 200 status
- Service status is "ok"
- Viewer port is 3113
- viewerSkipped is false
- Exit code 0 indicates successful health check

## Concepts
- health check
- liveness endpoint
- service monitoring
- HTTP status codes
- curl

_Importance: 2 · Confidence: 1_
