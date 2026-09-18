---
type: FileRead
title: Read BlueBubbles message sending implementation with self-loop guard
description: Lines 567-588 showing message echo prevention logic
resource: agentmemory://observation/obs_mrqixoxa_531cd9ee7da4
tags: ["self-loop guard", "message echo prevention", "webhook deduplication", "fileread"]
timestamp: 2026-07-18T15:30:58.795818+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Read code handling outbound message sending with echo prevention mechanism. The implementation tracks sent message GUIDs and normalized (chat, text) tuples in bounded dictionaries to prevent processing inbound webhook echoes of self-sent messages. Timestamps use UTC timezone.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py (lines 567-588 of 1224 total)
- Self-loop guard implemented via _sent_guids and _sent_texts dictionaries
- _sent_guids stores message GUID timestamps, pruned to _sent_guids_max size
- Messages sent via _api_post to /api/v1/message/text endpoint
- SendResult success/failure returned with message_id or error

## Concepts
- self-loop guard
- message echo prevention
- webhook deduplication

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 6 · Confidence: 1_
