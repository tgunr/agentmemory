---
type: FileRead
title: BlueBubbles self-loop debugging reference
description: Reference document for fixing message echo loop in BlueBubbles gateway
resource: agentmemory://observation/obs_mrrooi59_692c42a7c1f7
tags: ["BlueBubbles gateway", "message echo loop", "webhook deduplication", "chat GUID prefix handling", "message normalization", "self-loop guard", "OrderedDict state tracking", "fileread"]
timestamp: 2026-07-19T10:59:33.978502+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

This reference document describes a debugging session for a BlueBubbles gateway self-loop issue where the gateway was receiving its own outbound messages back as inbound messages. The fix implements a deduplication guard that tracks recently sent messages (chat + normalized text) within a 30-second window and handles the critical case where BlueBubbles strips the chat GUID prefix when re-webhooking messages.

## Facts
- File: references/bluebubbles-self-loop.md
- Skill: bluebubbles-gateway
- Problem: Gateway receiving its own sent messages back as inbound (self-echo loop)
- Root cause: BlueBubbles re-webhooks replies as bare handle (+1...) even when sent under prefixed form (iMessage;-;+1...)
- Fix: Track sent messages in _sent_texts OrderedDict with 30-second window, normalize text, strip chat GUID prefixes
- Implementation: _sent_texts[(chat, norm_text)] = timestamp, check on inbound webhook
- Tests: 5 test cases covering real-chat echo, bare-handle echo, old messages, any-echo channel, status bubbles
- Critical test: test_send_prefixed_then_bare_echo_dropped catches key-mismatch regression

## Concepts
- BlueBubbles gateway
- message echo loop
- webhook deduplication
- chat GUID prefix handling
- message normalization
- self-loop guard
- OrderedDict state tracking

## Files
- `references/bluebubbles-self-loop.md`

_Importance: 6 · Confidence: 1_
