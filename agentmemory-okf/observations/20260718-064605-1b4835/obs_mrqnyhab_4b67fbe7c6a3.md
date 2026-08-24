---
type: FileRead
title: Reviewed BlueBubbles inbound message filtering
description: Webhook handling suppresses send echoes and enforces group mentions
resource: agentmemory://observation/obs_mrqnyhab_4b67fbe7c6a3
tags: ["webhook message handling", "message echo suppression", "group mention filtering", "MessageEvent normalization", "message threading", "fileread"]
timestamp: 2026-07-18T17:51:33.632717+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The BlueBubbles webhook path prevents the agent from processing echoes of its own recent sends and optionally requires mention-pattern matches in group chats. Accepted messages are normalized into a MessageEvent with source, threading, and media information.

## Facts
- Lines 1188-1200 detect recently sent normalized text across candidate chat IDs using _sent_texts and _sent_text_window, then return an HTTP "ok" response for echoes.
- Group status is inferred from record.isGroup or the ";+;" marker in chat_guid; when require_mention is enabled, unmatched messages are ignored and matched mention text is cleaned.
- Message source metadata includes session chat ID, chat identifier or sender name, group/DM type, sender identity, and alternate chat identifier.
- MessageEvent is populated with text, message type, source, raw payload, IDs selected from fallback fields, reply/thread IDs, and media metadata.

## Concepts
- webhook message handling
- message echo suppression
- group mention filtering
- MessageEvent normalization
- message threading

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
