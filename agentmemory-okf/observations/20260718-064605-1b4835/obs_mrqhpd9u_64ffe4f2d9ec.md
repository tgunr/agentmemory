---
type: CommandRun
title: Webhook unregister failed with 405 Method Not Allowed
description: Attempted to stop dispatch loop via DELETE request to /api/v1/webhook
resource: agentmemory://observation/obs_mrqhpd9u_64ffe4f2d9ec
tags: ["webhook API", "HTTP 405 error", "dispatch loop", "API endpoint debugging", "commandrun"]
timestamp: 2026-07-18T14:56:30.831436+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Diagnostic command failed to unregister webhook due to HTTP method restrictions, leaving the dispatch loop active. The DELETE request received a 405 error, indicating the API endpoint may require a different HTTP method (GET or POST) for webhook management.

## Facts
- DELETE request to webhook endpoint returned HTTP 405 Method Not Allowed
- Webhook at http://192.168.88.7:8645/bluebubbles-webhook remains registered after unregister attempt
- Recent inbound messages still at 31 count, not dropping to 0 as expected
- API endpoint appears to only accept certain HTTP methods for webhook unregistration

## Concepts
- webhook API
- HTTP 405 error
- dispatch loop
- API endpoint debugging

## Files
- `/tmp/bb_unreg.txt`
- `~/.hermes/logs/gateway.log`

_Importance: 5 · Confidence: 1_
