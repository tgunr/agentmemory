---
type: FileRead
title: Read BlueBubbles platform integration file
description: Examining message type resolution and chat GUID extraction logic
resource: agentmemory://observation/obs_mrqibiv5_2a572b6ea20d
tags: ["BlueBubbles integration", "MIME type parsing", "Message type resolution", "Dictionary key fallback chain", "fileread"]
timestamp: 2026-07-18T15:13:44.510311+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent read a section of the BlueBubbles platform integration to understand how message types are resolved for multiple attachments and how the chat GUID is extracted from varying payload structures. This logic ensures correct media categorization and robust GUID retrieval from inconsistent API payloads.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- File contains 1187 lines and is 45530 bytes in size
- Message type resolution prefers PHOTO when multiple attachments include any image MIME prefix
- Fallback text "(attachment)" is assigned if text is empty but media URLs exist
- Chat GUID extraction uses a fallback chain checking chatGuid, chat_guid, and guid keys in record and payload dicts

## Concepts
- BlueBubbles integration
- MIME type parsing
- Message type resolution
- Dictionary key fallback chain

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
