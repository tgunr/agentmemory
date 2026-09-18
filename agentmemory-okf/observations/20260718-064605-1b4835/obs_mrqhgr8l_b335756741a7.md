---
type: CommandRun
title: POST synthetic webhook to BlueBubbles gateway and check logs
description: Testing inbound message webhook delivery and agent wake behavior
resource: agentmemory://observation/obs_mrqhgr8l_b335756741a7
tags: ["Webhook testing", "BlueBubbles integration", "Gateway logging", "Synthetic message injection", "commandrun"]
timestamp: 2026-07-18T14:49:49.024781+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

A synthetic new-message webhook was POSTed to the BlueBubbles gateway endpoint to test inbound message handling. The HTTP request succeeded, but the subsequent log check did not show the agent waking or processing the synthetic message, indicating a potential issue with webhook event routing or log visibility.

## Facts
- POST to http://192.168.88.7:8645/bluebubbles-webhook returned HTTP 200 in 0.01s
- Payload included type: new-message with synthetic GUID and text "PING inbound test"
- Gateway logs confirm webhook is listening and registered on 192.168.88.7:8645
- Log tail did not show agent wake or message processing for the synthetic payload
- Email adapter warning observed: Non-bytes IMAP payload for UID b'357748' skipped

## Concepts
- Webhook testing
- BlueBubbles integration
- Gateway logging
- Synthetic message injection

## Files
- `~/.hermes/logs/gateway.log`

_Importance: 5 · Confidence: 1_
