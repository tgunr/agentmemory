---
type: CommandRun
title: Check agentmemory service health status on port 3113
description: Health check endpoint returned service status
resource: agentmemory://observation/obs_mrqa07bd_6b0a4823a7ba
tags: ["health check endpoint", "service monitoring", "localhost port 3113", "commandrun"]
timestamp: 2026-07-18T11:20:59.394139+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 2
confidence: 1
---
# Summary

Executed curl health check against the agentmemory service livez endpoint at localhost:3113. The service responded with status "ok" confirming healthy operation with the viewer UI enabled on port 3113.

## Facts
- Service name: agentmemory
- Status: ok
- Viewer port: 3113
- Viewer skipped: false
- Command exit code: 0

## Concepts
- health check endpoint
- service monitoring
- localhost port 3113

_Importance: 2 · Confidence: 1_
