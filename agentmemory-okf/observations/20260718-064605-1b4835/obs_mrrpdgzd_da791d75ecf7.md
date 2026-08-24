---
type: FileRead
title: BlueBubbles webhook message processing logic
description: Reading message parsing, echo detection, and group mention handling
resource: agentmemory://observation/obs_mrrpdgzd_da791d75ecf7
tags: ["webhook message processing", "echo detection and self-loop prevention", "chat platform integration", "message normalization", "group mention handling", "BlueBubbles API", "fileread"]
timestamp: 2026-07-19T11:18:58.868393+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Reading the BlueBubbles platform webhook handler implementation. The code shows sophisticated echo detection to prevent self-loops when outbound replies are re-webhooked as new messages, using both channel filtering and text-based echo matching. It handles both individual and group messages with configurable mention requirements.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Lines 1148-1222 show webhook message processing implementation
- Extracts chat_guid, chat_identifier, and sender from webhook payloads with multiple fallback fields
- Implements self-loop guard using _sent_texts cache with _sent_text_window time window
- Filters out "any;-" echo-channel webhooks (BlueBubbles reserved channel for self-sent replies)
- Strips "iMessage;-;" and "*:-;" prefixes to unify GUID vs handle forms for echo matching
- Normalizes text for echo detection comparison
- Group messages (detected by isGroup flag or ";+;" in chat_guid) require mention patterns when require_mention=true
- Builds source object with chat_id, chat_name, chat_type (group/dm), and user_id

## Concepts
- webhook message processing
- echo detection and self-loop prevention
- chat platform integration
- message normalization
- group mention handling
- BlueBubbles API

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
