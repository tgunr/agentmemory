---
type: CommandRun
title: BlueBubbles pytest suite passes with and without BLUEBUBBLES_WEBHOOK_HOST
description: Reproduced harness-style plain pytest and cleared-env conditions
resource: agentmemory://observation/obs_mrron9r0_14316f926bf6
tags: ["pytest", "environment variable isolation", "BlueBubbles webhook", "test harness condition", "commandrun"]
timestamp: 2026-07-19T10:58:36.440903+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Verified the BlueBubbles webhook test suite is stable whether BLUEBUBBLES_WEBHOOK_HOST is present or cleared. The test harness previously discussed no longer fails under plain pytest conditions, and the default host test is unaffected by environment cleanup.

## Facts
- Command changed to /Users/davec/.hermes/hermes-agent
- Single test tests/gateway/test_bluebubbles.py::TestBlueBubblesWebhookUrl::test_default_host passed in 0.16s
- Full suite with ambient environment present (plain pytest): 81 passed in 1.03s
- Full suite with BLUEBUBBLES_WEBHOOK_HOST unset (env -u): 81 passed in 1.09s

## Concepts
- pytest
- environment variable isolation
- BlueBubbles webhook
- test harness condition

## Files
- `tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
