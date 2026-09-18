---
type: file_edit
title: Fix test_default_host env isolation
description: Clear BLUEBUBBLES_WEBHOOK_HOST so default path is exercised
resource: agentmemory://observation/obs_mrqhu6pt_56a83ce3881a
tags: ["pytest monkeypatch", "env var isolation", "webhook host normalization", "BlueBubbles adapter tests", "file_edit"]
timestamp: 2026-07-18T15:00:15.615482+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Updated test_default_host to delete ambient BLUEBUBBLES_WEBHOOK_HOST so the default host normalization path is actually covered regardless of local .env. This isolates the unit test from developer environment configuration.

## Facts
- Patched test_default_host in tests/gateway/test_bluebubbles.py
- Added monkeypatch.delenv("BLUEBUBBLES_WEBHOOK_HOST", raising=False) before adapter creation
- Ensures default webhook_host 0.0.0.0 → localhost normalization is tested independent of dev .env
- Lint status ok; patch applied successfully
- File was previously read with pagination; warning to re-read whole file before full overwrite

## Concepts
- pytest monkeypatch
- env var isolation
- webhook host normalization
- BlueBubbles adapter tests

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 4 · Confidence: 1_
