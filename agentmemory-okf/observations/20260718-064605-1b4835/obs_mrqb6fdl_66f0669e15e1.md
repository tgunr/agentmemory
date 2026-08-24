---
type: CommandRun
title: Probe local API endpoints for chat list and helper restart
description: Testing localhost:1234 API paths for chat retrieval and helper management
resource: agentmemory://observation/obs_mrqb6fdl_66f0669e15e1
tags: ["API endpoint discovery", "HTTP 404 Not Found", "curl probing", "Localhost API testing", "commandrun"]
timestamp: 2026-07-18T11:53:49.395444+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent probed a local API server to discover valid endpoints for listing chats and managing a helper service. All tested GET and POST routes returned 404 Not Found, indicating the expected API paths do not exist on this server instance.

## Facts
- Target server is running at http://localhost:1234
- GET /api/v1/chats returned "Not Found"
- Tested 8 POST endpoints for helper/private-api management, all returned HTTP 404
- Endpoints tested include server/restart-private-api, server/connect-private-api, server/inject-helper, etc.
- Authentication is passed via a 'password' query parameter

## Concepts
- API endpoint discovery
- HTTP 404 Not Found
- curl probing
- Localhost API testing

_Importance: 4 · Confidence: 1_
