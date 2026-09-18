---
type: CommandRun
title: Probe agentmemory API endpoints for auth and routing
description: Testing HTTP endpoints on port 3111 with bearer token auth from .env
resource: agentmemory://observation/obs_mrtcef0b_b1c2dce5f12d
tags: ["API endpoint probing", "HTTP status code debugging", "Bearer token authentication", "curl HTTP client", "bash shell scripting", "service health checking", "commandrun"]
timestamp: 2026-07-20T14:51:20.311904+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

A bash probe script tested multiple agentmemory API endpoints on localhost:3111 using bearer token authentication. Results show two categories of failures: authentication errors (401) on /sessions, /observations, and /search endpoints, and routing errors (404) on /observation/list, /concepts, /concept/list, and /stats. The UI viewer on port 3113 is reachable (200), indicating the service is running but API auth or endpoint registration has issues.

## Facts
- Service base URL: http://127.0.0.1:3111
- Auth secret sourced from ~/.agentmemory/.env (AGENTMEMORY_SECRET)
- GET /agentmemory/sessions returns 401 unauthorized
- GET /agentmemory/observations returns 401 unauthorized
- GET /agentmemory/observation/list returns 404 not found
- GET /agentmemory/concepts returns 404 not found
- GET /agentmemory/concept/list returns 404 not found
- GET /agentmemory/stats returns 404 not found
- POST /agentmemory/search returns 401 unauthorized
- UI viewer on port 3113 returns 200 OK
- Authentication appears to fail despite reading secret from .env file

## Concepts
- API endpoint probing
- HTTP status code debugging
- Bearer token authentication
- curl HTTP client
- bash shell scripting
- service health checking

## Files
- `~/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
