---
type: Search
title: Search bluebubbles.py for message handling and GUID cache logic
description: Looking for webhook events, GUID caching, and message sending logic
resource: agentmemory://observation/obs_mrqhpja5_946baca531b6
tags: ["Webhook event handling", "GUID caching", "BlueBubbles API integration", "Message truncation", "LRU cache", "search"]
timestamp: 2026-07-18T14:56:38.616423+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Searched the BlueBubbles platform adapter for message handling, webhook events, and GUID caching logic. Found that webhook events include "new-message" and "updated-message", and GUIDs are cached using an OrderedDict with LRU eviction. Message sending involves truncation via the base adapter.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Webhook events configured: "new-message", "updated-message"
- _MESSAGE_EVENTS includes "new-message", "message", "updated-message"
- _guid_cache is an OrderedDict used to cache chat GUIDs with LRU eviction
- Chat GUID resolution uses /api/v1/chat/query endpoint
- Message sending uses BasePlatformAdapter.truncate_message
- 107 total matches found, results truncated

## Concepts
- Webhook event handling
- GUID caching
- BlueBubbles API integration
- Message truncation
- LRU cache

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
