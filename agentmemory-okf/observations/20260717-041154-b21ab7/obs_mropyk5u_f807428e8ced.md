---
type: WebFetch
title: Navigated to agentmemory viewer dashboard at localhost:3113
description: System monitoring dashboard showing operational metrics for agentmemory application
resource: agentmemory://observation/obs_mropyk5u_f807428e8ced
tags: ["agentmemory dashboard", "system monitoring", "circuit breaker pattern", "memory compression metrics", "observability", "OpenTelemetry (OTEL)", "webfetch"]
timestamp: 2026-07-17T09:12:04.240261+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Navigated to the agentmemory viewer dashboard to inspect system state and operational metrics. The dashboard reveals a healthy system with 48 active sessions, successful function calls (mem::compress), and normal resource utilization. Circuit breaker is closed with no failures, indicating stable operation.

## Facts
- Dashboard URL: http://localhost:3113/#dashboard
- 48 active sessions, 3 memories (latest versions), 0 lessons, 0 crystals
- Graph contains 78 nodes with 127 edges
- 557 function calls tracked (mem::compress function)
- Circuit breaker status: CLOSED with 0 failures
- System resources: Heap 34/44 MB, RSS 212 MB, CPU 0.6%, Event loop 0.0ms
- Application uptime: 11 minutes
- Recent sessions for projects: agentmemory (multiple) and davec
- Recent activity shows repeated INDEX_PERSIST operations (mem::index-persistence)
- Browser running without residential proxies (local mode)

## Concepts
- agentmemory dashboard
- system monitoring
- circuit breaker pattern
- memory compression metrics
- observability
- OpenTelemetry (OTEL)

## Files
- `http://localhost:3113`

_Importance: 3 · Confidence: 1_
