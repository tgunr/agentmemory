---
type: CommandRun
title: API endpoint discovery for agentmemory service
description: Probing local agentmemory service on port 3111 for available endpoints
resource: agentmemory://observation/obs_mrtcd0x3_b46fdc021784
tags: ["API endpoint discovery", "HTTP status codes", "REST API authentication", "curl probing", "commandrun"]
timestamp: 2026-07-20T14:50:15.396910+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Probed the local agentmemory service to discover available API endpoints via HTTP status codes. Found that /livez is public, /sessions and /observations require authentication (401), and /search exists but rejects GET requests (405).

## Facts
- Service base URL: http://127.0.0.1:3111
- /agentmemory/livez returns {"service":"agentmemory","status":"ok","viewerPort":3113,"viewerSkipped":false}
- /agentmemory/sessions returns 401 (requires authentication)
- /agentmemory/observations returns 401 (requires authentication)
- /agentmemory/search returns 405 Method Not Allowed (likely requires POST)
- Standard discovery endpoints (/, /api, /health, /docs, /openapi.json) all return 404

## Concepts
- API endpoint discovery
- HTTP status codes
- REST API authentication
- curl probing

_Importance: 5 · Confidence: 1_
