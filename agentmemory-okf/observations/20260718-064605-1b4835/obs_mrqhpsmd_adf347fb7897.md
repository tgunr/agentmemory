---
type: Search
title: Search for send/reply message methods in BlueBubbles adapter
description: 
resource: agentmemory://observation/obs_mrqhpsmd_adf347fb7897
tags: ["Platform adapter pattern", "Private API messaging", "Message chunking/truncation", "Reply-to message threading", "search"]
timestamp: 2026-07-18T14:56:50.717323+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Search revealed BlueBubbles platform adapter has message sending and reply functionality with private API support. The code handles message chunking and reply-to message threading through payload construction.

## Facts
- Found 142 total matches across the file
- truncate_message static method at line 503 handles iMessage bubble flow without pagination suffixes
- async def send method at line 509 takes chat_id, content, reply_to, and metadata parameters
- Lines 544-551 show private-api method payload with tempGuid and selectedMessageGuid for replies

## Concepts
- Platform adapter pattern
- Private API messaging
- Message chunking/truncation
- Reply-to message threading

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
