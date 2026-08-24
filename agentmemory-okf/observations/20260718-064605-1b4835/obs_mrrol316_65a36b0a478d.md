---
type: FileRead
title: Read BlueBubbles webhook URL normalization tests
description: Reviewing pytest cases for _webhook_url property host normalization
resource: agentmemory://observation/obs_mrrol316_65a36b0a478d
tags: ["pytest", "monkeypatch", "webhook URL normalization", "BlueBubbles gateway", "environment variable mocking", "fileread"]
timestamp: 2026-07-19T10:56:54.421748+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 2
confidence: 1
---
# Summary

The agent read a section of the BlueBubbles gateway test file to review the webhook URL normalization logic. The tests verify that various local host addresses are correctly normalized to 'localhost' in the generated webhook URL using pytest and monkeypatch.

## Facts
- File: /Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py (1357 lines total, read 655-676)
- Tests TestBlueBubblesWebhookUrl class verifying _webhook_url property normalizes local hosts to 'localhost'
- Parametrized tests cover 0.0.0.0, 127.0.0.1, localhost, and ::
- Uses monkeypatch to clear BLUEBUBBLES_WEBHOOK_HOST env var and inject webhook_host arguments

## Concepts
- pytest
- monkeypatch
- webhook URL normalization
- BlueBubbles gateway
- environment variable mocking

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 2 · Confidence: 1_
