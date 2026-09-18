---
type: FileRead
title: Reading BlueBubbles gateway test file (lines 848-887)
description: Examining echo detection tests for message handling
resource: agentmemory://observation/obs_mrristhb_692618d5c224
tags: ["pytest", "async tests", "echo detection", "message normalization", "webhook testing", "BlueBubbles", "fileread"]
timestamp: 2026-07-19T08:14:57.596537+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

Reading test file for BlueBubbles gateway adapter to understand echo detection logic. Tests verify that recent sent messages are filtered to prevent echo loops while allowing older messages through.

## Facts
- File: /Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py
- Lines read: 848-887 of 1257 total lines
- Tests echo detection for sent messages in BlueBubbles webhook
- Tests message normalization (case/spacing differences)
- Tests that recent sent text on real chat is dropped to prevent echo loops
- Tests that old sent text (&gt; window ago) is NOT dropped to allow real repeats

## Concepts
- pytest
- async tests
- echo detection
- message normalization
- webhook testing
- BlueBubbles

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
