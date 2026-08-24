---
type: FileRead
title: Read BlueBubbles webhook echo guard and event dispatch
description: Lines 1170-1246 of bluebubbles.py showing self-loop prevention and message handling
resource: agentmemory://observation/obs_mrro96po_e51ab48de531
tags: ["webhook echo prevention", "asyncio background tasks", "message normalization", "event-driven architecture", "BlueBubbles integration", "fileread"]
timestamp: 2026-07-19T10:47:39.320518+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent read the BlueBubbles webhook handler to understand how it prevents infinite echo loops and processes incoming messages. The code uses a time-windowed dictionary of sent texts and normalized chat identifiers to filter out self-echoes, then constructs a MessageEvent and processes it asynchronously in the background.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Read offset 1170, limit 90
- Implements self-loop guard to drop inbound webhooks that are echoes of outbound replies
- Echo detection uses self._sent_texts dictionary bounded by self._sent_text_window
- Normalizes chat identifiers by stripping ";-;" prefixes to unify GUID and handle forms
- Ignores messages on the reserved "any;-;" echo-channel
- Enforces require_mention for group messages via _message_matches_mention_patterns
- Constructs MessageEvent and dispatches it using asyncio.create_task(self.handle_message(event))

## Concepts
- webhook echo prevention
- asyncio background tasks
- message normalization
- event-driven architecture
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
