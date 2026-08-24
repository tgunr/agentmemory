---
type: file_edit
title: Add test for BlueBubbles echo-path #2: sent GUID match dropping
description: Test that inbound webhook carrying our own sent GUID is dropped by the handler
resource: agentmemory://observation/obs_mrrpg6xw_62b6d4c1bba6
tags: ["echo-path detection", "BlueBubbles webhook loop prevention", "sent GUID tracking", "pytest async test", "monkeypatch testing", "inbound message deduplication", "file_edit"]
timestamp: 2026-07-19T11:21:05.824235+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

A new pytest async test was added to verify that when BlueBubbles echoes back a message we originally sent (carrying the same GUID), the inbound webhook handler drops it by GUID match. This is described as the most reliable echo-kill path, independent of chat/text form. The test was inserted before an existing regression test and passes lint.

## Facts
- New test method: test_inbound_guid_matches_sent_guid_dropped added to test_bluebubbles.py
- Test pre-populates adapter._sent_guids with "orig-guid-xyz" and a current UTC timestamp
- Test sends a fake webhook with guid="orig-guid-xyz" (same as sent), isFromMe=False, different text/handle
- Asserts response status 200 and handled list is empty (message dropped)
- Described as "CRITICAL echo-path #2" - BlueBubbles re-webhooks our own sent message carrying original sent guid
- Test inserted before test_status_reply_echo_with_prefix_and_multiline_dropped at line ~940
- Lint status: ok

## Concepts
- echo-path detection
- BlueBubbles webhook loop prevention
- sent GUID tracking
- pytest async test
- monkeypatch testing
- inbound message deduplication

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 6 · Confidence: 1_
