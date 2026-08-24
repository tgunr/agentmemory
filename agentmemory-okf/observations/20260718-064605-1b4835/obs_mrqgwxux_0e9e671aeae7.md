---
type: CommandRun
title: Diagnosed BlueBubbles webhook dispatch failures
description: Checked gateway and server logs for message delivery status
resource: agentmemory://observation/obs_mrqgwxux_0e9e671aeae7
tags: ["BlueBubbles integration", "webhook dispatch failure", "message event handling", "commandrun"]
timestamp: 2026-07-18T14:34:24.486405+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Executed log inspection to verify BlueBubbles integration and discovered webhook dispatch failures preventing the gateway from receiving message events. While test messages are flowing through BlueBubbles server correctly, the webhook callbacks to the gateway are failing.

## Facts
- Gateway connected to BlueBubbles at http://localhost:1234 at 09:29:08
- Webhook listening on http://127.0.0.1:8645/bluebubbles-webhook
- Multiple webhook dispatch failures for both new-message and updated-message events
- Test messages "Hermes test pro..." and "PONG" were sent and received between 09:33:33-09:34:11
- Messages exchanged between "You" and "+*******0811"

## Concepts
- BlueBubbles integration
- webhook dispatch failure
- message event handling

## Files
- `~/.hermes/logs/gateway.log`
- `~/Library/Logs/bluebubbles-server/main.log`

_Importance: 7 · Confidence: 1_
