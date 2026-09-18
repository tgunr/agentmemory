---
type: CommandRun
title: Probe /agentmemory API endpoints and health
description: Discovering available routes, required parameters, and system metrics
resource: agentmemory://observation/obs_mrtcf43d_60d7c80a5a1b
tags: ["API endpoint discovery", "Agent memory service", "REST API probing", "System health metrics", "commandrun"]
timestamp: 2026-07-20T14:51:52.822664+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Executed a probe script to map the /agentmemory REST API and check service health. Identified working routes for sessions, search, and health, while documenting required parameters and confirming several expected routes are missing (404). Health check reveals the service is connected but operating with tight heap memory.

## Facts
- GET /agentmemory/sessions returns 200 with active session IDs and observation counts
- GET /agentmemory/observations returns 400, requires sessionId parameter
- GET /agentmemory/health returns 200; memory heap is tight at 87% (50MB/58MB)
- POST /agentmemory/search returns 200 with concepts, facts, and files; requires non-empty query
- Endpoints /concepts, /concept/list, /stats, /session/list, /obs/list, /memory return 404

## Concepts
- API endpoint discovery
- Agent memory service
- REST API probing
- System health metrics

## Files
- `/tmp/am_probe.sh`

_Importance: 5 · Confidence: 1_
