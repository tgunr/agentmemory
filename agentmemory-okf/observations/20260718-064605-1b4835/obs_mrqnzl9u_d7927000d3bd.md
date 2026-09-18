---
type: CommandRun
title: Check BlueBubbles .env vars and server status
description: Diagnose BlueBubbles service configuration and availability
resource: agentmemory://observation/obs_mrqnzl9u_d7927000d3bd
tags: ["BlueBubbles", "environment variables", "service health check", "API endpoint testing", "commandrun"]
timestamp: 2026-07-18T17:52:25.454382+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed commands to read BlueBubbles-related environment variables from ~/.hermes/.env and verify server availability. Found BlueBubbles is configured with allow-all mode enabled but the server at localhost:1234 is not responding (curl failed with connection error).

## Facts
- GATEWAY_ALLOW_ALL_USERS=true is set in environment
- BLUEBUBBLES_SERVER_URL=http://localhost:1234
- BLUEBUBBLES_ALLOW_ALL_USERS=true
- BLUEBUBBLES_WEBHOOK_HOST=192.168.88.7
- curl returned http=000 and failed to connect to BlueBubbles server

## Concepts
- BlueBubbles
- environment variables
- service health check
- API endpoint testing

## Files
- `~/.hermes/.env`

_Importance: 5 · Confidence: 1_
