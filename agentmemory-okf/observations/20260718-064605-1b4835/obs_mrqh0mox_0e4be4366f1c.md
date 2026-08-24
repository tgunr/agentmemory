---
type: Search
title: Search BlueBubbles platform for webhook/auth patterns
description: Exploring webhook configuration and API authentication in BlueBubbles integration
resource: agentmemory://observation/obs_mrqh0mox_0e4be4366f1c
tags: ["BlueBubbles integration", "webhook configuration", "async HTTP client", "httpx", "iMessage bot", "mention patterns", "search"]
timestamp: 2026-07-18T14:37:16.637962+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Searched BlueBubbles platform file for webhook and authentication patterns. Found webhook configuration constants, async HTTP API methods using httpx, and mention pattern handling for iMessage integration. Results truncated at 40 matches out of 225 total.

## Facts
- Found 225 total matches in bluebubbles.py (results truncated)
- Webhook configuration: port 8645, path /bluebubbles-webhook, max body 1MB
- API methods: _api_get and _api_post using httpx async client
- Dependencies checked: aiohttp and httpx imports
- Default mention patterns defined for iMessage group chat wake words
- MAX_TEXT_LENGTH = 4000 for message handling

## Concepts
- BlueBubbles integration
- webhook configuration
- async HTTP client
- httpx
- iMessage bot
- mention patterns

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
