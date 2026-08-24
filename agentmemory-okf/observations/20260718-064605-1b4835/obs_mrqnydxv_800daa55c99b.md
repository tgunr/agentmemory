---
type: Search
title: Search bluebubbles.py for user_id and handle patterns
description: Looking for sender/handle mapping logic in BlueBubbles platform
resource: agentmemory://observation/obs_mrqnydxv_800daa55c99b
tags: ["BlueBubbles integration", "User identification mapping", "Regex search", "search"]
timestamp: 2026-07-18T17:51:29.296445+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent searched the BlueBubbles platform integration file for patterns related to user identification and handle extraction. Only one match was found, showing that user_id is assigned directly from a sender variable at line 1213, while the other searched patterns were absent.

## Facts
- Searched /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Regex pattern: user_id|SessionSource|handle\["address"\]|handle\.get
- Found 1 match at line 1213: user_id=sender,

## Concepts
- BlueBubbles integration
- User identification mapping
- Regex search

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
