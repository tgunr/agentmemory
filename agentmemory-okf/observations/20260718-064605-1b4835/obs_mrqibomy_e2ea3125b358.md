---
type: FileRead
title: BlueBubbles group mention filtering
description: Webhook processing distinguishes group chats and optionally requires mentions.
resource: agentmemory://observation/obs_mrqibomy_e2ea3125b358
tags: ["BlueBubbles webhook", "group chat detection", "mention filtering", "message source construction", "fileread"]
timestamp: 2026-07-18T15:13:51.991720+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The BlueBubbles webhook handler filters group messages when mention-only behavior is configured. It detects groups using metadata or the chat GUID format, ignores messages without a matching mention, and normalizes accepted text before constructing the message source.

## Facts
- Session chat ID uses chat_guid when available, otherwise chat_identifier.
- A message is treated as group chat when record.isGroup is truthy or chat_guid contains ";+".
- When require_mention is enabled, unmatched group messages return an HTTP "ok" response without further processing.
- Matched group-message text is cleaned with _clean_mention_text before source construction.
- build_source receives the session chat ID, chat_identifier or sender as chat name, group or dm chat type, and sender as user ID.

## Concepts
- BlueBubbles webhook
- group chat detection
- mention filtering
- message source construction

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
