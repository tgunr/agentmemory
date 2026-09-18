---
type: FileRead
title: BlueBubbles message splitting and chat resolution
description: Reviewed send logic in the BlueBubbles platform adapter.
resource: agentmemory://observation/obs_mrrpqbt0_efb9d5d41b73
tags: ["message chunking", "iMessage bubbles", "chat GUID resolution", "BlueBubbles private API", "fileread"]
timestamp: 2026-07-19T11:28:58.689205+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The BlueBubbles adapter favors natural iMessage presentation by sending paragraphs as separate bubbles and omitting pagination suffixes. Its send path also supports creating chats for email addresses or international phone-number-like handles when private API access is available.

## Facts
- truncate_message delegates to BasePlatformAdapter.truncate_message and removes trailing pagination indicators such as "(1/3)" from each chunk.
- send formats content, rejects empty text, splits text on paragraph breaks into separate iMessage bubbles, and truncates paragraphs exceeding MAX_MESSAGE_LENGTH.
- Each chunk resolves the target chat GUID; unresolved address-like targets can create a new chat when the private API is enabled, otherwise sending returns a chat-not-found error.

## Concepts
- message chunking
- iMessage bubbles
- chat GUID resolution
- BlueBubbles private API

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
