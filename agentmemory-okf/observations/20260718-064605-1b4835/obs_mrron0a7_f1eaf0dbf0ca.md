---
type: file_edit
title: Fix BlueBubbles test env var leakage from dev .env
description: Reorder imports and env clearing to prevent .env reload interference
resource: agentmemory://observation/obs_mrron0a7_f1eaf0dbf0ca
tags: ["pytest monkeypatch", "environment variable leakage", "python-dotenv import-time reload", "test isolation", "file_edit"]
timestamp: 2026-07-19T10:58:24.173458+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The test_default_host test was compromised because the dev .env file was leaking the BLUEBUBBLES_WEBHOOK_HOST variable into the test environment via import-time reloads. The fix reorders the test setup to import the modules first, flush the reloads, and then clear the environment variable before constructing the adapter to ensure strict test isolation.

## Facts
- Modified test_default_host in /Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py
- Dev .env sets BLUEBUBBLES_WEBHOOK_HOST=192.168.88.7, which leaks into plain pytest runs
- Module imports can trigger .env reloads that re-inject the ambient variable
- Fix imports modules first to flush import-time reloads, then clears the env var via monkeypatch
- Replaced _make_adapter helper with explicit BlueBubblesAdapter and PlatformConfig instantiation

## Concepts
- pytest monkeypatch
- environment variable leakage
- python-dotenv import-time reload
- test isolation

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
