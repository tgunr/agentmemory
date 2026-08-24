---
type: FileRead
title: Read BlueBubbles webhook URL normalization tests
description: Lines 660-679 of test file covering TestBlueBubblesWebhookUrl class
resource: agentmemory://observation/obs_mrqhtzbo_5c8c1fd8a9e3
tags: ["webhook URL normalization", "pytest parametrize", "monkeypatch fixture", "localhost normalization", "fileread"]
timestamp: 2026-07-18T15:00:06.031840+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Read test file section for BlueBubbles gateway adapter webhook URL handling. Tests verify that local/broadcast addresses normalize to localhost while custom IPs are preserved in the generated webhook URL.

## Facts
- File has 1056 total lines (40273 bytes)
- Test class TestBlueBubblesWebhookUrl verifies _webhook_url property normalizes local hosts
- Parametrized test covers hosts: 0.0.0.0, 127.0.0.1, localhost, ::
- All local hosts normalized to http://localhost:
- Custom hosts like 192.168.1.50 are preserved in webhook URL
- Tests use monkeypatch fixture for dependency injection

## Concepts
- webhook URL normalization
- pytest parametrize
- monkeypatch fixture
- localhost normalization

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
