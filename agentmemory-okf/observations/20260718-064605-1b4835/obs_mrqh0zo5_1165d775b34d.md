---
type: Search
title: Search webhook handling in bluebubbles.py
description: Looking for webhook implementation and auth patterns
resource: agentmemory://observation/obs_mrqh0zo5_1165d775b34d
tags: ["webhook handling", "aiohttp web framework", "query string authentication", "BlueBubbles integration", "async request handlers", "search"]
timestamp: 2026-07-18T14:37:33.459565+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Searched bluebubbles.py for webhook handling patterns to understand authentication and request processing. Found aiohttp-based implementation with query string authentication (required by BlueBubbles API constraints) and standard health/webhook endpoints.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Found 49 matches for webhook patterns
- Webhook setup at lines 274-279: aiohttp app with health endpoint and webhook route
- _handle_webhook async method defined at line 967
- Webhook auth uses query string parameter (not custom headers) due to BlueBubbles API limitation
- Uses aiohttp web framework with web.Application and web.Response
- Max body size configured via _WEBHOOK_MAX_BODY_BYTES

## Concepts
- webhook handling
- aiohttp web framework
- query string authentication
- BlueBubbles integration
- async request handlers

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
