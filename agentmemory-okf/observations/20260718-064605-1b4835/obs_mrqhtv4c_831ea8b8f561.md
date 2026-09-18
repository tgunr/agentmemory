---
type: CommandRun
title: Run BlueBubbles test suite with unset webhook env var
description: Verified previous test failure was an environment bleed artifact
resource: agentmemory://observation/obs_mrqhtv4c_831ea8b8f561
tags: ["pytest", "environment variable isolation", "test environment bleed", "BlueBubbles gateway", "commandrun"]
timestamp: 2026-07-18T15:00:00.585905+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The agent ran the full BlueBubbles gateway test suite with the BLUEBUBBLES_WEBHOOK_HOST environment variable explicitly unset. All 67 tests passed successfully, confirming that a previously observed single test failure was an artifact of environment variable bleed rather than a code defect.

## Facts
- Command executed in ~/.hermes/hermes-agent directory
- Environment variable BLUEBUBBLES_WEBHOOK_HOST was explicitly unset using env -u
- pytest executed on tests/gateway/test_bluebubbles.py
- All 67 tests passed in 1.08s
- Purpose was to prove a previous 1-test failure was caused by environment variable bleed

## Concepts
- pytest
- environment variable isolation
- test environment bleed
- BlueBubbles gateway

## Files
- `tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
