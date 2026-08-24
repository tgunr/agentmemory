---
type: CommandRun
title: Check agentmemory service liveness via curl
description: Verified service is running and healthy on port 3111
resource: agentmemory://observation/obs_mrqa06en_e7c3af68ff0e
tags: ["liveness check", "health endpoint", "service monitoring", "curl", "commandrun"]
timestamp: 2026-07-18T11:20:58.219398+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 2
confidence: 1
---
# Summary

A liveness check was performed on the agentmemory service running locally on port 3111. The service responded successfully with an "ok" status, confirming it is healthy and its viewer component is active on port 3113.

## Facts
- Endpoint checked: http://127.0.0.1:3111/agentmemory/livez
- Service status: ok
- Viewer port: 3113
- Viewer skipped: false
- Command exit code: 0

## Concepts
- liveness check
- health endpoint
- service monitoring
- curl

_Importance: 2 · Confidence: 1_
