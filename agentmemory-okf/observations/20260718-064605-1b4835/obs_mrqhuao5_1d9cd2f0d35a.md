---
type: FileRead
title: Read BlueBubbles webhook URL tests
description: Reviewing pytest cases for webhook registration, URL encoding, and log masking
resource: agentmemory://observation/obs_mrqhuao5_1d9cd2f0d35a
tags: ["pytest", "webhook registration", "URL encoding", "log masking", "BlueBubbles adapter", "fileread"]
timestamp: 2026-07-18T15:00:20.726449+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent read a section of the BlueBubbles adapter test file to review webhook URL registration logic. The tests verify correct URL construction, special character encoding, and secure log masking of webhook passwords.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py
- Read lines 680-709 of 1059 total lines
- Tests cover _webhook_register_url appending passwords and URL-encoding special characters
- Tests verify _webhook_register_url_for_log masks passwords with *** for safe logging
- Tests verify query parameters are omitted when no password is configured

## Concepts
- pytest
- webhook registration
- URL encoding
- log masking
- BlueBubbles adapter

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
