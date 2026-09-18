---
type: Search
title: Search webhook patterns in bluebubbles.py
description: Finding webhook registration and configuration patterns
resource: agentmemory://observation/obs_mrqh0j9n_ad28dac64772
tags: ["webhook configuration", "BlueBubbles iMessage adapter", "REST API integration", "platform adapter pattern", "message platform webhooks", "search"]
timestamp: 2026-07-18T14:37:12.201185+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Searched the BlueBubbles platform adapter for webhook-related patterns. Found 226 matches including webhook configuration constants (host, port, path, max body size). The adapter implements a local webhook server for receiving iMessage events from the BlueBubbles macOS server, with support for various message types and reactions.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Search pattern: register|webhook_url|_register_webhook|/api/v1/webhook|webhook
- Total matches: 226 (results truncated)
- DEFAULT_WEBHOOK_HOST = "127.0.0.1"
- DEFAULT_WEBHOOK_PORT = 8645
- DEFAULT_WEBHOOK_PATH = "/bluebubbles-webhook"
- _WEBHOOK_MAX_BODY_BYTES = 1_048_576 (1 MiB limit)
- BlueBubbles adapter uses local macOS server for outbound REST and inbound webhooks
- Supports text, media attachments, tapback reactions, typing indicators, read receipts
- Architecture based on PR #5869 (benjaminsehl) and PR #4588 (YuhangLin)

## Concepts
- webhook configuration
- BlueBubbles iMessage adapter
- REST API integration
- platform adapter pattern
- message platform webhooks

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
