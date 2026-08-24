---
type: Search
title: Search bluebubbles.py for webhook and init patterns
description: Locating webhook URL construction and initialization logic in BlueBubbles platform
resource: agentmemory://observation/obs_mrrolpi6_5b78b2d9e7e9
tags: ["webhook configuration", "aiohttp TCPSite", "platform initialization", "webhook URL construction", "BlueBubbles integration", "search"]
timestamp: 2026-07-19T10:57:23.546010+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Searched the BlueBubbles platform file for webhook-related patterns and initialization. Found that webhook_host is configured via extra config dict, used to bind a TCP site and construct webhook URLs. The _webhook_url property is used as a base URL in at least two other locations.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- __init__ defined at line 122, takes PlatformConfig
- self.webhook_host set at line 129-130 from extra.get("webhook_host")
- web.TCPSite uses self.webhook_host and self.webhook_port at line 298
- _webhook_url property defined at line 327, uses self.webhook_host at line 329
- _webhook_url referenced at lines 344 and 352 as base URL
- 9 total matches found across the file

## Concepts
- webhook configuration
- aiohttp TCPSite
- platform initialization
- webhook URL construction
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
