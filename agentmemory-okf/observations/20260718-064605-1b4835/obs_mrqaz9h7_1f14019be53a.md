---
type: CommandRun
title: Server API health check returns 401 unauthorized
description: Diagnostic command to verify helper connection status failed due to auth
resource: agentmemory://observation/obs_mrqaz9h7_1f14019be53a
tags: ["API authentication", "server health check", "curl commands", "HTTP 401 error", "commandrun"]
timestamp: 2026-07-18T11:48:15.159107+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

A diagnostic command attempted to check server info and ping endpoints to verify helper connection status, but both requests failed with 401 Unauthorized responses, indicating authentication issues with the API credentials or endpoints.

## Facts
- API endpoint /api/v1/server/info returned status 401
- helper_connected field is None
- server_version field is None
- /api/v1/ping also returned 401 Unauthorized with Authentication Error
- Base URL: http://localhost:1234
- Security warning was triggered for curl | python3 pipe and approved

## Concepts
- API authentication
- server health check
- curl commands
- HTTP 401 error

## Files
- `http://localhost:1234/api/v1/server/info`
- `http://localhost:1234/api/v1/ping`

_Importance: 4 · Confidence: 1_
