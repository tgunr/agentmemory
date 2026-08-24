---
type: Search
title: Search for sender/handle/chat_identifier patterns in BlueBubbles platform code
description: Found 25 matches in gateway/platforms/bluebubbles.py related to message routing
resource: agentmemory://observation/obs_mrqnykhz_d92bdf84758f
tags: ["chat identifier resolution", "webhook message handling", "sender identification", "BlueBubbles integration", "search"]
timestamp: 2026-07-18T17:51:37.795840+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Search revealed the webhook handler's message processing logic in BlueBubbles platform code, showing how chat identifiers and sender information are extracted and resolved from incoming message records. This is critical for understanding message routing between platform chats and user sessions.

## Facts
- 25 total matches found
- Key patterns: chat_guid resolution, chat_identifier handling, sender extraction from message records
- Lines 1128-1164 show core logic for resolving session_chat_id and extracting sender from handle dict or sender field
- Lines 1211-1215 show chat creation parameters using sender and chat_identifier

## Concepts
- chat identifier resolution
- webhook message handling
- sender identification
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
