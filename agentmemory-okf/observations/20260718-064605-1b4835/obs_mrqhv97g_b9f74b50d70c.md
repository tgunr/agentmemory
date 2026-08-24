---
type: file_edit
title: Add tests for BlueBubbles self-loop guard
description: Prevents self-answering loops when isFromMe is unreliable
resource: agentmemory://observation/obs_mrqhv97g_b9f74b50d70c
tags: ["BlueBubbles webhook", "self-loop prevention", "pytest async tests", "message deduplication", "status bubble filtering", "file_edit"]
timestamp: 2026-07-18T15:01:05.496763+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Added pytest async tests to the BlueBubbles gateway adapter to prevent self-answering loops. The tests ensure the inbound webhook drops echoes of its own sent messages (tracked via _sent_guids) and self-generated status bubbles, compensating for unreliable isFromMe flags in certain environments.

## Facts
- Added TestBlueBubblesSelfLoopGuard class to test_bluebubbles.py
- test_sent_guid_echo_is_dropped verifies messages matching _sent_guids are ignored
- test_status_bubble_prefix_is_dropped verifies self-generated status bubbles (💭, ⚡, 🤔, 🔧) are ignored
- test_unknown_guid_is_dispatched verifies legitimate unknown messages are processed
- Addresses a self-answering loop bug observed on "Tahoe" where helper_connected=false and isFromMe is unreliable

## Concepts
- BlueBubbles webhook
- self-loop prevention
- pytest async tests
- message deduplication
- status bubble filtering

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 6 · Confidence: 1_
