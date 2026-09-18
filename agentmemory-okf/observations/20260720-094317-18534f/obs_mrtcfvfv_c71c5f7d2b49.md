---
type: file_write
title: Diagnostic probe script for AgentMemory service endpoints and logs
description: Shell script to check API availability, observation count, and compression failures
resource: agentmemory://observation/obs_mrtcfvfv_c71c5f7d2b49
tags: ["AgentMemory API health check", "service endpoint probing", "log analysis for compression failures", "file_write"]
timestamp: 2026-07-20T14:52:28.263145+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Created a diagnostic shell script to probe the AgentMemory service health by testing multiple API endpoints, checking observation counts via search, and scanning service logs for compression-related failures. This is a troubleshooting tool for investigating service availability and potential issues.

## Facts
- Shell script written to /tmp/am_probe2.sh (1564 bytes)
- Checks 9 AgentMemory endpoints including /agentmemory/concept, /agentmemory/graph, /agentmemory/concepts/list
- Tests search API with query 'the' and limit 1 to get observation count
- Greps /tmp/iii-engine.log and /tmp/agentmemory-service.log for errors/failures/timouts
- Tests viewer service on port 3113 at /api/sessions endpoint

## Concepts
- AgentMemory API health check
- service endpoint probing
- log analysis for compression failures

## Files
- `/tmp/am_probe2.sh`

_Importance: 5 · Confidence: 1_
