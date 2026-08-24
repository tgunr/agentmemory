---
type: CommandRun
title: Run BlueBubbles tests with cleared env
description: Verified all 80 tests pass without BLUEBUBBLES_WEBHOOK_HOST env var
resource: agentmemory://observation/obs_mrrnhovm_94d00493ead5
tags: ["pytest", "environment variable isolation", "BlueBubbles gateway", "test automation", "commandrun"]
timestamp: 2026-07-19T10:26:16.496104+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed the BlueBubbles gateway test suite with the BLUEBUBBLES_WEBHOOK_HOST environment variable explicitly unset to ensure tests do not rely on external environment configurations. All 80 tests passed successfully.

## Facts
- Executed in /Users/davec/.hermes/hermes-agent
- Unset BLUEBUBBLES_WEBHOOK_HOST environment variable using env -u
- Ran pytest on tests/gateway/test_bluebubbles.py
- Result: 80 tests passed in 1.24s

## Concepts
- pytest
- environment variable isolation
- BlueBubbles gateway
- test automation

## Files
- `tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
