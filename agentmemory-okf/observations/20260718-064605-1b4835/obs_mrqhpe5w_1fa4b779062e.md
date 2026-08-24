---
type: Search
title: Search for message sending and GUID patterns in bluebubbles.py
description: Investigating BlueBubbles messaging infrastructure
resource: agentmemory://observation/obs_mrqhpe5w_1fa4b779062e
tags: ["message events", "GUID caching", "mention patterns", "async client", "search"]
timestamp: 2026-07-18T14:56:31.984940+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Searching for message sending and GUID-related code patterns in BlueBubbles platform implementation to understand how outgoing messages are tracked and correlated. Found message event types and GUID caching infrastructure, suggesting async message handling with acknowledgment support.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- 3 webhook message event types defined: new-message, message, updated-message
- GUID caching implemented via OrderedDict[str, str] as _guid_cache
- Mustache pattern compilation for mention detection
- require_mention boolean flag configurable via env or constructor
- Search returned 219 matches but output was truncated

## Concepts
- message events
- GUID caching
- mention patterns
- async client

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
