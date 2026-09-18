---
type: CommandRun
title: Diagnostic: BlueBubbles webhook listener and synthetic test
description: Testing webhook deny logic for non-allowed sender on port 8645
resource: agentmemory://observation/obs_mrrizoua_752947908c7a
tags: ["BlueBubbles webhook integration", "Hermes gateway", "webhook sender allowlist filtering", "kanban dispatcher singleton lock", "Telegram bot command registration", "port ownership diagnostics (lsof)", "commandrun"]
timestamp: 2026-07-19T08:20:18.175911+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

A diagnostic command inspected the BlueBubbles webhook listener on port 8645 (PID 30806) and sent a synthetic webhook from a non-allowed sender (+15550009999). The curl request returned HTTP 000, indicating the endpoint was unreachable or refused the connection. Gateway logs confirm a fresh restart with Telegram command registration and kanban dispatcher active, while BB logs show no message echo loops.

## Facts
- PID 30806 owns TCP port 8645 (webhook listener)
- No BLUEBUBBLES_ALLOW environment variable found on PID 30806
- Synthetic webhook POST to 127.0.0.1:8645 returned HTTP 000 (connection failed/timeout)
- Gateway restarted at 03:18:19 with 7 channel targets
- Telegram adapter registered 60 commands (54 hidden over 60 limit) for private and group scopes
- Kanban dispatcher running with singleton lock at /Users/davec/.hermes/kanban/.dispatcher.lock
- BlueBubbles main.log shows webhook dispatch target: 192.168.88.7:8645
- No loop/echo dispatch detected in BB logs since 03:18 restart

## Concepts
- BlueBubbles webhook integration
- Hermes gateway
- webhook sender allowlist filtering
- kanban dispatcher singleton lock
- Telegram bot command registration
- port ownership diagnostics (lsof)

## Files
- `/Users/davec/.hermes/logs/gateway.log`
- `/Users/davec/Library/Logs/bluebubbles-server/main.log`
- `/Users/davec/.hermes/kanban/.dispatcher.lock`

_Importance: 5 · Confidence: 1_
