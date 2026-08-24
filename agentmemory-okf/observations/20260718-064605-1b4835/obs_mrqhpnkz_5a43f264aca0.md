---
type: Search
title: Search BlueBubbles API and message handling patterns
description: Searching for API endpoints, post methods, and message identifiers in bluebubbles.py
resource: agentmemory://observation/obs_mrqhpnkz_5a43f264aca0
tags: ["BlueBubbles API", "HTTP client methods", "webhook registration", "GUID caching", "search"]
timestamp: 2026-07-18T14:56:44.191730+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

A search was performed on the BlueBubbles platform integration file to locate API endpoints, message handling logic, and specific identifiers. The search yielded 153 matches but was truncated, revealing core API client methods and webhook registration logic.

## Facts
- Searched /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Patterns: api/v1/message/text, /api/v1/message, api_post(, tempGuid, isFromMe, method=
- Found 153 total matches, output truncated
- Matches include _api_get, _api_post methods, /api/v1/webhook registration, and _guid_cache logic

## Concepts
- BlueBubbles API
- HTTP client methods
- webhook registration
- GUID caching

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
