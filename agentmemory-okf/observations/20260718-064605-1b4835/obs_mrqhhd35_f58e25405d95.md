---
type: CommandRun
title: Webhook test endpoint returns 405 Method Not Allowed
description: Testing BlueBubbles webhook dispatch API
resource: agentmemory://observation/obs_mrqhhd35_f58e25405d95
tags: ["webhook testing", "HTTP 405 error", "BlueBubbles API", "kanban dispatcher", "commandrun"]
timestamp: 2026-07-18T14:50:17.342257+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Attempted to trigger a webhook test via BlueBubbles API to simulate inbound SMS/iMessage, but the webhook/test endpoint rejected the POST request with a 405 error. This suggests either the endpoint requires a different HTTP method or there's an API routing issue. A previous inbound message test succeeded, indicating the gateway is functional.

## Facts
- POST request to /api/v1/webhook/test endpoint returned HTTP 405
- Response body contained only "Method Not Allowed" text
- Gateway log shows kanban dispatcher lock at /Users/davec/.hermes/kanban/.dispatcher.lock
- Gateway log shows previous inbound message from iMessage user synthetic-test
- Previous successful inbound test had reply_to_id=None and reply_to_text=''

## Concepts
- webhook testing
- HTTP 405 error
- BlueBubbles API
- kanban dispatcher

## Files
- `/Users/davec/.hermes/logs/gateway.log`
- `/tmp/bb_dispatch.txt`

_Importance: 5 · Confidence: 1_
