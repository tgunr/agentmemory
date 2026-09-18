---
type: file_write
title: Created bash script to probe AgentMemory API endpoints
description: Tests discovery and search endpoints using curl and dynamic auth
resource: agentmemory://observation/obs_mrtcf1mc_69dffffb3059
tags: ["bash scripting", "API probing", "curl", "AgentMemory", "REST API testing", "file_write"]
timestamp: 2026-07-20T14:51:49.616884+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

A bash script was generated to systematically probe the AgentMemory read API. It uses curl to test multiple discovery and search endpoints, dynamically loading authentication credentials from a local environment file to avoid hardcoding secrets.

## Facts
- Wrote 1255 bytes to /tmp/am_probe.sh (resolved: /private/tmp/am_probe.sh)
- Script targets AgentMemory API at http://127.0.0.1:3111
- Dynamically extracts AUTH token from ~/.agentmemory/.env
- Probes 10 GET endpoints (sessions, observations, concepts, stats, health, etc.)
- Probes POST /agentmemory/search with JSON payloads

## Concepts
- bash scripting
- API probing
- curl
- AgentMemory
- REST API testing

## Files
- `/tmp/am_probe.sh`

_Importance: 4 · Confidence: 1_
