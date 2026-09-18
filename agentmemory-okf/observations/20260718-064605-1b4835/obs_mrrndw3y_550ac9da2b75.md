---
type: FileRead
title: Read BlueBubbles webhook echo detection tests
description: Testing message echo filtering in gateway adapter
resource: agentmemory://observation/obs_mrrndw3y_550ac9da2b75
tags: ["pytest async tests", "webhook echo detection", "message deduplication", "BlueBubbles adapter", "sent message tracking", "fileread"]
timestamp: 2026-07-19T10:23:19.241841+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Reading test file for BlueBubbles gateway adapter to understand echo detection logic. Tests verify that messages sent by the adapter itself are filtered out when echoed back, but only within a time window. This prevents duplicate message processing in the webhook handler.

## Facts
- File has 1257 total lines, read lines 853-912
- Tests cover echo detection for recently sent messages using adapter._sent_texts dictionary
- test_recent_sent_text_on_real_chat_dropped verifies case/spacing normalization in echo detection
- test_old_sent_text_not_dropped verifies messages sent > time window ago are not filtered
- TestBlueBubblesWebhookRegistration class starts at line 911
- Uses pytest.mark.asyncio for async test methods

## Concepts
- pytest async tests
- webhook echo detection
- message deduplication
- BlueBubbles adapter
- sent message tracking

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
