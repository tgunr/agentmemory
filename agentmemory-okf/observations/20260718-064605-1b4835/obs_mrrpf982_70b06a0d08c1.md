---
type: Search
title: Search for '__now__' in bluebubbles.py
description: Locating timestamp extraction logic
resource: agentmemory://observation/obs_mrrpf982_70b06a0d08c1
tags: ["Python dictionary get", "UTC timestamp fallback", "BlueBubbles platform integration", "search"]
timestamp: 2026-07-19T11:20:22.125365+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Searched the BlueBubbles platform integration file to understand how the "__now__" timestamp key is handled. The logic extracts it from a record dictionary, defaulting to the current UTC timestamp if missing.

## Facts
- Searched /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py for pattern "__now__"
- Found 1 match at line 1185
- Line 1185: _now = record.get("__now__") or datetime.now(timezone.utc).timestamp()

## Concepts
- Python dictionary get
- UTC timestamp fallback
- BlueBubbles platform integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
