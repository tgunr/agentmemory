---
type: Search
title: Search test_bluebubbles.py for adapter mocking and API post patterns
description: Found 22 matches for adapter setup, fake_api_post monkeypatching, and _sent_texts usage
resource: agentmemory://observation/obs_mrrne7es_b8da34a01988
tags: ["pytest monkeypatch", "API mocking", "adapter pattern", "test fixtures", "BlueBubbles gateway", "search"]
timestamp: 2026-07-19T10:23:33.889419+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Searched the BlueBubbles gateway test file to understand how the adapter is instantiated and how API calls are mocked. The tests heavily rely on monkeypatching adapter._api_post with fake_api_post functions and using an _sent_texts dictionary to track outbound messages.

## Facts
- File searched: /Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py
- Helper function _make_adapter is defined at line 11
- fake_api_post is repeatedly defined and monkeypatched to adapter._api_post across multiple tests
- adapter._sent_texts is used as a dictionary with tuple keys (phone_number, message_text) to track outbound messages
- Total of 22 regex matches found in the file

## Concepts
- pytest monkeypatch
- API mocking
- adapter pattern
- test fixtures
- BlueBubbles gateway

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 4 · Confidence: 1_
