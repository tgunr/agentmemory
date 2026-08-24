---
type: CommandRun
title: Query agentmemory API routes, config flags, and health status
description: Inspecting local agentmemory server endpoints and system diagnostics
resource: agentmemory://observation/obs_mrtco677_a20be26f3d1d
tags: ["REST API endpoints", "System health monitoring", "Memory management diagnostics", "Circuit breaker pattern", "Knowledge graph extraction", "Session consolidation", "Compression metrics", "commandrun"]
timestamp: 2026-07-20T14:58:55.455932+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

The command queries a local agentmemory server to enumerate available API routes and check system health. It reveals a comprehensive API surface with 60+ endpoints covering memories, mesh networking, sessions, sketches, and vision search. Health diagnostics show the system is operational but with tight memory usage (86% heap) and a compression function experiencing some failures (119/2037) with high average latency (~19s).

## Facts
- API server running at http://127.0.0.1:3111 with auth from ~/.agentmemory/.env
- 60+ API routes discovered including memories, mesh, sessions, sketches, snapshots, routines, sentinels, vision-search
- GRAPH_EXTRACTION_ENABLED flag is active (knowledge graph extraction into entities/relations)
- CONSOLIDATION_ENABLED flag exists for periodic session summarization into semantic facts + procedures
- System health: healthy, uptime ~266772s (~3 days), circuit breaker closed
- Memory heap usage at 86% (RSS 106MB) flagged as tight
- Compression function (mem::compress): 2037 total calls, 119 failures, avg latency 19038ms, avg quality score 99.6

## Concepts
- REST API endpoints
- System health monitoring
- Memory management diagnostics
- Circuit breaker pattern
- Knowledge graph extraction
- Session consolidation
- Compression metrics

## Files
- `/Volumes/AI/agentmemory/dist/index.mjs`
- `~/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
