---
type: FileRead
title: Read BlueBubbles test file - mention gating tests
description: Lines 167-256 of test file showing webhook mention gating logic
resource: agentmemory://observation/obs_mrqhuhkx_3545e63970e1
tags: ["pytest async tests", "webhook testing", "mention gating", "BlueBubbles integration", "monkeypatching", "mock request objects", "fileread"]
timestamp: 2026-07-18T15:00:29.694939+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 2
confidence: 1
---
# Summary

Reading test file for BlueBubbles gateway integration. The section shows test classes for mention gating functionality, verifying that group messages require bot mentions while DMs don't. Uses async pytest with monkeypatching to test webhook handling and message dispatch logic.

## Facts
- File has 1059 total lines, 40498 bytes, reading lines 167-256
- _FakeBlueBubblesRequest mock class simulates webhook requests with password auth and JSON body
- TestBlueBubblesMentionGating class contains async pytest tests for mention requirement logic
- Group messages without mentions return 200 but are skipped (not dispatched to handle_message)
- Group messages with mentions are dispatched with mention text cleaned from message content
- DM messages bypass mention requirement entirely
- Tests use monkeypatch to mock adapter.handle_message method
- Webhook payload structure includes type, data.guid, data.text, data.handle, data.isGroup, data.chats

## Concepts
- pytest async tests
- webhook testing
- mention gating
- BlueBubbles integration
- monkeypatching
- mock request objects

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 2 · Confidence: 1_
