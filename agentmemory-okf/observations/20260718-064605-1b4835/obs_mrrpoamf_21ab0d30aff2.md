---
type: CommandRun
title: BlueBubbles log analysis for message echo/loop detection
description: Investigating message duplication in BlueBubbles webhook integration
resource: agentmemory://observation/obs_mrrpoamf_21ab0d30aff2
tags: ["BlueBubbles webhook integration", "Message echo/loop detection", "Webhook event dispatching", "iMessage integration debugging", "isFromMe message filtering", "commandrun"]
timestamp: 2026-07-19T11:27:23.843522+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Analysis of BlueBubbles server logs reveals a message echo pattern where sent messages are immediately received back as "New Message from You". This suggests the webhook integration may be creating a feedback loop, as each sent message triggers webhook events that could be processed as new incoming messages, causing potential duplication.

## Facts
- BlueBubbles log at ~/Library/Logs/bluebubbles-server/main.log, size 517867 bytes, mtime 2026-07-19 06:11:03
- Messages sent via /api/v1/message/text are immediately received back as "New Message from You"
- Webhook dispatches to http://192.168.88.7:8645/bluebubbles-webhook on each message event
- Pattern shows sent messages being echoed back, potentially causing message loops
- Chat identifier format: "any;-;+193****0811" with tempGuid tracking

## Concepts
- BlueBubbles webhook integration
- Message echo/loop detection
- Webhook event dispatching
- iMessage integration debugging
- isFromMe message filtering

## Files
- `~/Library/Logs/bluebubbles-server/main.log`

_Importance: 7 · Confidence: 1_
