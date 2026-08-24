---
type: CommandRun
title: Check BlueBubbles server logs for auth and send errors
description: Found repeated 401 Unauthorized errors from client 192.168.88.7
resource: agentmemory://observation/obs_mrqcccti_4c68faeec7d4
tags: ["BlueBubbles server", "macOS system logging", "API authentication", "401 Unauthorized", "koa-router middleware", "commandrun"]
timestamp: 2026-07-18T12:26:25.634792+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Inspected the BlueBubbles server logs to diagnose messaging issues. The logs reveal that a client at IP 192.168.88.7 is repeatedly attempting to hit the /api/v1/ping endpoint but failing with 401 Unauthorized errors due to an incorrect password. This indicates a misconfigured or outdated client rather than a server-side send failure.

## Facts
- Log directory located at ~/Library/Logs/bluebubbles-server
- main.log is ~1MB, last modified 2026-07-18 07:25
- Client IP 192.168.88.7 repeatedly fails authentication with 401 Unauthorized on /api/v1/ping
- Error message: "tried to authenticate with an incorrect password"
- Stack traces reference koa-compose and koa-router middleware in BlueBubbles app.asar

## Concepts
- BlueBubbles server
- macOS system logging
- API authentication
- 401 Unauthorized
- koa-router middleware

## Files
- `~/Library/Logs/bluebubbles-server/main.log`

_Importance: 6 · Confidence: 1_
