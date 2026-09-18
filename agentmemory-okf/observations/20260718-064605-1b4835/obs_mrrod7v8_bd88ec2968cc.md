---
type: CommandRun
title: Checked gateway.log tail and webhook registration status
description: Debugging BlueBubbles webhook connectivity
resource: agentmemory://observation/obs_mrrod7v8_bd88ec2968cc
tags: ["webhook registration", "BlueBubbles API", "gateway platform connection", "commandrun"]
timestamp: 2026-07-19T10:50:47.441412+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Gateway startup logs show successful BlueBubbles connection with webhook registration, but the registered webhooks API endpoint returns 404 Not Found, indicating a potential endpoint routing issue or API version mismatch in the BlueBubbles server.

## Facts
- BlueBubbles connected successfully to http://localhost:1234 with webhook at http://192.168.88.7:8645/bluebubbles-webhook
- Gateway registered 3 platforms (email, bluebubbles, telegram) and 8 target channels
- Webhook registration endpoint returned "Not Found" despite successful registration log
- Unauthorized user warning logged for +193****0811 on bluebubbles

## Concepts
- webhook registration
- BlueBubbles API
- gateway platform connection

## Files
- `~/.hermes/logs/gateway.log`

_Importance: 6 · Confidence: 1_
