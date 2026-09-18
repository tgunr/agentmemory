---
type: Search
title: Search for webhook-related code in bluebubbles.py found configuration and setup patterns
description: Webhook endpoint configuration, security constraints, and aiohttp server setup discovered
resource: agentmemory://observation/obs_mrqh0qtv_40179ad309bf
tags: ["webhook security", "aiohttp application setup", "payload size limiting", "BlueBubbles API integration", "bot mention patterns", "search"]
timestamp: 2026-07-18T14:37:21.998424+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Searching bluebubbles.py for webhook registration patterns revealed the local webhook server configuration including security constraints (1 MiB body limit), mention patterns for bot wake words, and aiohttp application setup with explicit payload size limits to prevent buffer exhaustion attacks.

## Facts
- DEFAULT_WEBHOOK_HOST = "127.0.0.1", DEFAULT_WEBHOOK_PORT = 8645, DEFAULT_WEBHOOK_PATH = "/bluebubbles-webhook"
- _WEBHOOK_MAX_BODY_BYTES = 1_048_576 (1 MiB limit for webhook payload size)
- MAX_TEXT_LENGTH = 4000 for message text constraints
- DEFAULT_MENTION_PATTERNS defined for @hermes agent wake word without stable bot identity
- API endpoints: /api/v1/ping and /api/v1/server/info for server connectivity check
- aiohttp web.Application configured with client_max_size for security against oversized payloads
- Webhook authentication via query string due to BlueBubbles API limitations on custom headers
- webhook_path route registered at line 277 with _handle_webhook handler

## Concepts
- webhook security
- aiohttp application setup
- payload size limiting
- BlueBubbles API integration
- bot mention patterns

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 6 · Confidence: 1_
