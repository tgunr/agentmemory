---
type: FileRead
title: Reviewed BlueBubbles inbound self-loop guard
description: Webhook handling suppresses echoed outbound messages using channel and recent-text checks.
resource: agentmemory://observation/obs_mrrissmf_f9c6d2df5ec8
tags: ["webhook echo suppression", "message deduplication", "self-loop guard", "identifier normalization", "BlueBubbles", "fileread"]
timestamp: 2026-07-19T08:14:56.485169+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

The BlueBubbles webhook handler contains a two-layer self-loop defense for environments where outbound replies are re-webhooked as new messages. It filters both the reserved echo channel and real-chat echoes by matching normalized text and equivalent chat identifier forms within a time window.

## Facts
- Inbound requests missing sender, chat GUID/identifier, or text return HTTP 400 with "missing message fields".
- The handler immediately accepts and ignores webhooks whose session chat ID or chat GUID starts with the reserved "any;-" echo channel.
- Echo detection normalizes message text and checks recent sent-message timestamps against the resolved chat GUID, chat identifier, and versions stripped of a leading "*;-;" prefix.
- A candidate is treated as an echo when its chat/text pair exists in self._sent_texts and is no older than self._sent_text_window.

## Concepts
- webhook echo suppression
- message deduplication
- self-loop guard
- identifier normalization
- BlueBubbles

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
