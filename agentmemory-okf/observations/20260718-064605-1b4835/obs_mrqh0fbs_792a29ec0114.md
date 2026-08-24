---
type: Search
title: BlueBubbles platform webhook and API configuration
description: Searching webhook routes, verification, and API patterns in BlueBubbles integration
resource: agentmemory://observation/obs_mrqh0fbs_792a29ec0114
tags: ["webhook configuration", "BlueBubbles integration", "iMessage bot platform", "query parameter authentication", "webhook body size limits", "environment variable configuration", "mention pattern matching", "search"]
timestamp: 2026-07-18T14:37:07.092557+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Searched the BlueBubbles platform integration file for webhook configuration, routing, and authentication patterns. The file reveals a webhook server setup with configurable host/port/path, API authentication via password in query string, and notes that iMessage lacks native bot mention identity requiring custom mention pattern compilation.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Default webhook port: 8645, default webhook path: /bluebubbles-webhook
- Max webhook body size: 1,048,576 bytes (1MB)
- Server URL and password sourced from BLUEBUBBLES_SERVER_URL and BLUEBUBBLES_PASSWORD env vars or extra config
- Webhook host, port, and path are configurable via env vars or extra dict
- API URL construction appends password as query parameter: password={quote(self.password, safe='')}
- Webhook path is normalized to start with /
- BlueBubbles/iMessage lacks stable bot mention identity unlike Slack, Telegram, or Matrix
- Search returned 203 total matches, results truncated at 40

## Concepts
- webhook configuration
- BlueBubbles integration
- iMessage bot platform
- query parameter authentication
- webhook body size limits
- environment variable configuration
- mention pattern matching

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
