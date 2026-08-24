---
type: Search
title: Search for BlueBubbles self-loop guard tests
description: Found test class and method for preventing message echo in real chats
resource: agentmemory://observation/obs_mrrndtgm_6d72e9e70149
tags: ["BlueBubbles gateway", "self-loop prevention", "message echo guard", "search"]
timestamp: 2026-07-19T10:23:15.807258+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Search located test code for a self-loop guard mechanism that prevents messages sent by the agent from being processed back as incoming messages. This is critical for preventing infinite echo loops in chat gateway implementations.

## Facts
- Found 2 matches in test_bluebubbles.py for self-loop prevention patterns
- Match 1: class TestBlueBubblesSelfLoopGuard at line 714
- Match 2: async def test_recent_sent_text_on_real_chat_dropped at line 853

## Concepts
- BlueBubbles gateway
- self-loop prevention
- message echo guard

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
