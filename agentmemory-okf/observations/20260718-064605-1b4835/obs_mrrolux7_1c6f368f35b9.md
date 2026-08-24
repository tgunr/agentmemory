---
type: FileRead
title: Read BlueBubbles platform config initialization
description: Examining webhook, auth, and mention settings in bluebubbles.py
resource: agentmemory://observation/obs_mrrolux7_1c6f368f35b9
tags: ["BlueBubbles integration", "Environment variable configuration", "Webhook configuration", "Platform gateway", "fileread"]
timestamp: 2026-07-19T10:57:30.568768+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent read a section of the BlueBubbles platform integration file to understand how configuration parameters are initialized from extra config or environment variables. This reveals the standard pattern used for setting up webhook endpoints and mention requirements in the gateway platforms.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Read lines 127-148 of a 1250-line file
- Initializes password, webhook host/port/path, read receipts, and mention requirements
- Webhook path is normalized to ensure it starts with a forward slash
- require_mention parses boolean-like strings from config or environment variables

## Concepts
- BlueBubbles integration
- Environment variable configuration
- Webhook configuration
- Platform gateway

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
