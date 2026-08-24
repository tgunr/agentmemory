---
type: FileRead
title: Test for old sent text message echo detection logic
description: Reading test file for BlueBubbles gateway adapter
resource: agentmemory://observation/obs_mrrngqjs_789457538ff7
tags: ["message echo detection", "pytest async testing", "time-based filtering", "messaging gateway adapter", "fileread"]
timestamp: 2026-07-19T10:25:32.005854+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Reading a test case that verifies old sent messages (older than a time window) are not incorrectly filtered as echoes, ensuring legitimate repeated messages can still be received.

## Facts
- Test method: test_old_sent_text_not_dropped
- Sent text timestamp set to current time minus 999 seconds
- Window threshold determines if text is treated as echo
- Part of pytest async test suite for gateway messaging

## Concepts
- message echo detection
- pytest async testing
- time-based filtering
- messaging gateway adapter

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
