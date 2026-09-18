---
type: FileRead
title: Read BlueBubbles chat resolution and creation logic
description: Examining GUID resolution, caching, and chat creation in BlueBubbles adapter
resource: agentmemory://observation/obs_mrrpq0tp_14ce17625db0
tags: ["BlueBubbles API", "Chat GUID resolution", "LRU cache", "Message routing", "iMessage adapter", "fileread"]
timestamp: 2026-07-19T11:28:44.456762+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Read the BlueBubbles platform adapter to understand how chat GUIDs are resolved and how new chats are created. The code explicitly avoids participant-based matching to prevent message leaks between 1:1 DMs and group chats, falling back to creating a new chat if no exact identifier match is found.

## Facts
- File bluebubbles.py contains 1286 lines total
- _resolve_chat_guid resolves email/phone to BlueBubbles chat GUID, avoiding participant matching to prevent DM-to-group leaks (issue #24157)
- Uses an LRU cache (_guid_cache) for resolved GUIDs to optimize lookups
- Queries /api/v1/chat/query for exact chatIdentifier matches
- _create_chat_for_handle creates new chats via /api/v1/chat/new using a tempGuid and returns a SendResult

## Concepts
- BlueBubbles API
- Chat GUID resolution
- LRU cache
- Message routing
- iMessage adapter

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
