---
type: Search
title: Search for import statements in bluebubbles.py
description: 
resource: agentmemory://observation/obs_mrqhrtgz_6c86c04a0df9
tags: ["Python imports", "async HTTP client", "platform abstraction", "search"]
timestamp: 2026-07-18T14:58:25.135014+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 2
confidence: 1
---
# Summary

Explored the dependencies of bluebubbles.py to understand what modules it requires. The file uses async programming with httpx for HTTP requests and imports internal gateway platform abstractions.

## Facts
- Found 14 import matches in the file
- Standard library imports: asyncio, json, logging, os, re, uuid, OrderedDict, datetime
- Third-party import: httpx (async HTTP client)
- Internal imports: gateway.config, gateway.platforms.base, gateway.platforms.helpers

## Concepts
- Python imports
- async HTTP client
- platform abstraction

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 2 · Confidence: 1_
