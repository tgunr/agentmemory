---
type: CommandRun
title: Smoke test agentmemory session/start API for 7 projects
description: All projects returned HTTP 200 success
resource: agentmemory://observation/obs_mrq7epft_019c6fae6f06
tags: ["API smoke testing", "session management", "Bearer token authentication", "HTTP status codes", "commandrun"]
timestamp: 2026-07-18T10:08:17.222129+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 4
confidence: 1
---
# Summary

Executed smoke test against agentmemory session/start API endpoint for 7 different projects. All requests returned HTTP 200, confirming the endpoint is accepting session creation requests with proper authentication and JSON payload.

## Facts
- Tested endpoint: http://localhost:3111/agentmemory/session/start
- 7 projects tested: personal, develop, ranch, shop, pveroot, cc, ollama
- All 7 requests returned HTTP 200
- Session IDs formatted as smoke_{project}_{timestamp}
- Auth via Bearer token extracted from ~/.agentmemory/.env
- Payload includes sessionId, project, cwd (/Users/davec), title

## Concepts
- API smoke testing
- session management
- Bearer token authentication
- HTTP status codes

## Files
- `~/.agentmemory/.env`

_Importance: 4 · Confidence: 1_
