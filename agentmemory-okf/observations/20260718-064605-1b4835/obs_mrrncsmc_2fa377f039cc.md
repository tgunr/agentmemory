---
type: Search
title: BlueBubbles platform message deduplication search
description: Search reveals message tracking and normalization patterns
resource: agentmemory://observation/obs_mrrncsmc_2fa377f039cc
tags: ["message deduplication", "BlueBubbles integration", "text normalization", "async send methods", "OrderedDict tracking", "message window expiration", "search"]
timestamp: 2026-07-19T10:22:28.065713+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Search of BlueBubbles platform file reveals message deduplication architecture using OrderedDicts to track sent message GUIDs and normalized texts. The implementation maintains a rolling window of 500 items with timestamp-based expiration to prevent duplicate message delivery.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Uses OrderedDict for _sent_guids and _sent_texts with max limit of 500 items
- Implements _norm_text() static method for text normalization
- Multiple async send methods: send, send_image, send_image_file, send_voice, send_video, send_document, send_animation, send_typing
- Deduplication logic tracks message GUIDs and normalized text with timestamps
- Message window check: (_now - self._sent_texts[(c, _norm)]) <= self._sent_text_window

## Concepts
- message deduplication
- BlueBubbles integration
- text normalization
- async send methods
- OrderedDict tracking
- message window expiration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
