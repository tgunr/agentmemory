---
type: FileRead
title: Read BlueBubbles webhook handler logic
description: Examining message parsing and self-loop echo guard
resource: agentmemory://observation/obs_mrrna4zh_e50cdc03df15
tags: ["Webhook payload parsing", "Self-loop prevention", "Echo guard", "iMessage integration", "BlueBubbles API", "Chat GUID resolution", "fileread"]
timestamp: 2026-07-19T10:20:24.122337+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent read the BlueBubbles webhook handler to understand how incoming iMessage messages are parsed and how self-loops are prevented. The code extracts chat and sender identifiers with fallbacks for newer BlueBubbles versions, and uses a time-windowed cache of sent texts to ignore echoed outbound messages.

## Facts
- Reads lines 1120-1239 of bluebubbles.py webhook handler
- Parses chat_guid, chat_identifier, sender, and text from webhook payloads
- Fallback extracts chat_guid from chats[0].guid for BlueBubbles v1.9+ webhooks
- Implements self-loop guard to drop outbound replies re-webhooked as new-message events
- Ignores reserved "any;-" echo-channel webhooks
- Uses _sent_texts cache with normalized text and timestamps to detect echoes within _sent_text_window
- Strips "iMessage;-;" prefixes to unify GUID and handle forms for echo matching

## Concepts
- Webhook payload parsing
- Self-loop prevention
- Echo guard
- iMessage integration
- BlueBubbles API
- Chat GUID resolution

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
