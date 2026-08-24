---
type: file_edit
title: Add regression test for pseudo-chat GUID resolution loop
description: Prevents echo loops by ensuring any;- pseudo-chats are never resolved as real chat targets
resource: agentmemory://observation/obs_mrrpuez3_4aab06ed7178
tags: ["pytest async regression test", "monkeypatch API mocking", "BlueBubbles chat GUID resolution", "echo loop prevention", "pseudo-chat filtering", "self-webhook feedback", "file_edit"]
timestamp: 2026-07-19T11:32:09.421127+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

A regression test was added to prevent a message echo loop caused by resolving bare phone numbers to BlueBubbles "any;-;" pseudo-chats. The test ensures the adapter synthesizes a proper "iMessage;-;" GUID when only the pseudo-chat is returned, preventing self-webhook feedback loops.

## Facts
- Added test_resolve_chat_guid_refuses_any_pseudochat to test_bluebubbles.py
- Test verifies that when BlueBubbles returns only an "any;-;+1..." pseudo-chat, _resolve_chat_guid synthesizes "iMessage;-;+1..." GUID instead
- Root cause: sending to the any;- pseudo-chat fires a self-webhook per reply, creating an echo loop
- Test uses monkeypatch to fake _api_post returning only the any;- pseudo-chat in response data
- Asserts guid == "iMessage;-;+155****1111" and that guid never starts with "any;-"
- Lint status: ok

## Concepts
- pytest async regression test
- monkeypatch API mocking
- BlueBubbles chat GUID resolution
- echo loop prevention
- pseudo-chat filtering
- self-webhook feedback

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 7 · Confidence: 1_
