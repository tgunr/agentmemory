---
type: FileRead
title: Read BlueBubbles webhook inbound message processing logic
description: Lines 1040-1170 of bluebubbles.py handling event filtering, self-loop guards, and attachment parsing
resource: agentmemory://observation/obs_mrro93d5_a2f1101e0e13
tags: ["Webhook event processing", "Self-loop prevention", "BlueBubbles integration", "Attachment MIME type parsing", "Message routing", "fileread"]
timestamp: 2026-07-19T10:47:34.981927+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent read a section of the BlueBubbles platform integration to understand how inbound webhooks are processed. The code reveals extensive self-loop prevention mechanisms (GUID tracking, emoji prefix filtering) and attachment handling logic for various media types.

## Facts
- Read lines 1040-1170 of /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Filters out non-message events and messages sent by the bot itself (isFromMe/fromMe/is_from_me)
- Implements self-loop guard using _sent_guids to drop inbound echoes of outbound messages
- Ignores self-generated status bubbles starting with emojis: 💭, ⚡, 🤝, 🔧
- Skips tapback reactions based on associatedMessageType
- Processes inbound attachments by downloading them and categorizing by MIME type (PHOTO, VOICE, VIDEO, DOCUMENT)

## Concepts
- Webhook event processing
- Self-loop prevention
- BlueBubbles integration
- Attachment MIME type parsing
- Message routing

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
