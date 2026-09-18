---
type: FileRead
title: BlueBubbles webhook chat GUID fallback
description: Inspected inbound message field extraction and validation logic.
resource: agentmemory://observation/obs_mrqnyszz_da4c0a8f7b61
tags: ["BlueBubbles webhook parsing", "payload schema compatibility", "message validation", "self-loop prevention", "fileread"]
timestamp: 2026-07-18T17:51:48.810439+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The BlueBubbles webhook handler supports multiple payload schemas, including newer payloads where the chat GUID is nested under the first chat record. It normalizes sender and chat identity, rejects incomplete messages, and prepares to prevent outbound reply loops.

## Facts
- Webhook parsing checks record and payload variants for chatGuid/chat_guid/guid, then falls back to data.chats[0].guid or chatGuid for BlueBubbles v1.9+ payloads.
- Sender falls back from handle.address, sender, from, or address to the chat identifier or GUID.
- Requests missing sender, chat identity, or text return HTTP 400 with “missing message fields”; session_chat_id prefers chat_guid over chat_identifier.
- The following section begins a self-loop guard for outbound replies re-webhooked as new-message events, including events on the reserved “any;-” channel.

## Concepts
- BlueBubbles webhook parsing
- payload schema compatibility
- message validation
- self-loop prevention

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
