---
type: file_edit
title: Add regression test for /status echo loop with bare handle
description: Tests that multi-line status replies echoed by BlueBubbles on bare handles are dropped
resource: agentmemory://observation/obs_mrroj3dq_db9660de836b
tags: ["pytest asyncio", "regression testing", "self-loop prevention", "webhook echo handling", "handle normalization", "monkeypatch", "file_edit"]
timestamp: 2026-07-19T10:55:21.562228+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Added a regression test to ensure that when Hermes sends a multi-line status reply to a prefixed chat form, BlueBubbles' echo of that reply back on the bare handle is correctly dropped by the self-loop guard. This closes a production issue where status replies were doubling due to the echo matching failure.

## Facts
- Added `test_status_reply_echo_with_prefix_and_multiline_dropped` to test_bluebubbles.py
- Regression test for production loop where `/status` reply echoed by BlueBubbles on bare handle wasn't dropped
- Verifies `_sent_texts` records the stripped bare handle for multi-line, emoji-prefixed replies
- Uses monkeypatch to mock `_api_post` and `handle_message` in async pytest environment
- Lint check passed successfully

## Concepts
- pytest asyncio
- regression testing
- self-loop prevention
- webhook echo handling
- handle normalization
- monkeypatch

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 6 · Confidence: 1_
