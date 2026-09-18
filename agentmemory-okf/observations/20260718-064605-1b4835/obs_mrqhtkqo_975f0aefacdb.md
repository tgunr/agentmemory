---
type: Search
title: Search in test_bluebubbles.py found _make_adapter and environment setup patterns
description: Searched for test adapter and env var patterns in BlueBubbles test file
resource: agentmemory://observation/obs_mrqhtkqo_975f0aefacdb
tags: ["pytest monkeypatch", "test fixtures", "gateway adapter testing", "environment variable mocking", "search"]
timestamp: 2026-07-18T14:59:47.133010+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Searching for environment variable handling and adapter creation patterns in the BlueBubbles gateway test file revealed a test helper function `_make_adapter` that uses monkeypatch for mocking. The file contains tests for BlueBubbles iMessage gateway adapter with environment-based configuration.

## Facts
- File: /Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py
- Total matches found: 83 (truncated)
- Found _make_adapter(monkeypatch, **extra) function definition
- Found imports: asyncio, json, pytest, gateway.config (Platform, PlatformConfig)

## Concepts
- pytest monkeypatch
- test fixtures
- gateway adapter testing
- environment variable mocking

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
