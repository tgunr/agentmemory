---
type: FileRead
title: Reading BlueBubbles message handling code with attachment logic
description: File at offset 1118-1162 of 1242 lines total
resource: agentmemory://observation/obs_mrrit9as_6126d33b8ae2
tags: ["message routing", "webhook payload parsing", "attachment handling", "field validation", "fileread"]
timestamp: 2026-07-19T08:15:18.097912+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Examining BlueBubbles platform integration code that processes webhook payloads for messages. The code handles attachment detection with mime type analysis, extracts chat identifiers and sender information through multiple fallback paths, and validates required message fields before processing.

## Facts
- Code handles multiple attachments with preference for PHOTO type when images present
- Chat GUID fallback logic for BlueBubbles v1.9+ webhook payloads using data.chats[0].guid
- Sender extraction fallbacks through handle.address, sender, from, address fields
- Validation returns 400 error when chat_guid, chat_identifier, or text are missing

## Concepts
- message routing
- webhook payload parsing
- attachment handling
- field validation

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
