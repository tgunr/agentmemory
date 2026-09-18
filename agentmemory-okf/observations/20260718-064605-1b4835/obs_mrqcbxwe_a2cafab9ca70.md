---
type: CommandRun
title: BlueBubbles API curl request to send iMessage timed out
description: Test message send to localhost:1234 failed with HTTP 000 after 35s timeout
resource: agentmemory://observation/obs_mrqcbxwe_a2cafab9ca70
tags: ["BlueBubbles API", "HTTP timeout handling", "iMessage integration", "commandrun"]
timestamp: 2026-07-18T12:26:06.297816+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

A curl command attempting to send a test message through the BlueBubbles API to a local server at localhost:1234 failed to connect, hitting the maximum timeout of 35 seconds. The HTTP code 000 indicates curl was unable to establish any connection to the endpoint.

## Facts
- curl request to http://localhost:1234/api/v1/message/text timed out at 35.004575s
- HTTP response code was 000 indicating connection failure
- Target chat GUID: iMessage;-;+19364420811
- Temp GUID generated: hermes-test2-{timestamp}
- Response file /tmp/bb_send_resp.txt was not created due to failed request

## Concepts
- BlueBubbles API
- HTTP timeout handling
- iMessage integration

## Files
- `/tmp/bb_send_resp.txt`

_Importance: 4 · Confidence: 1_
