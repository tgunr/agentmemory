---
type: CommandRun
title: Run BlueBubbles self-loop guard tests
description: Verified TestBlueBubblesSelfLoopGuard passes without webhook host env var
resource: agentmemory://observation/obs_mrritumw_a60352f25a05
tags: ["pytest", "environment variable manipulation", "BlueBubbles gateway", "self-loop guard", "commandrun"]
timestamp: 2026-07-19T08:15:45.749605+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Executed the BlueBubbles self-loop guard test suite with the BLUEBUBBLES_WEBHOOK_HOST environment variable explicitly unset. All 12 tests passed, confirming the self-loop guard logic functions correctly without the webhook host configuration.

## Facts
- Command executed in ~/.hermes/hermes-agent directory
- Environment variable BLUEBUBBLES_WEBHOOK_HOST explicitly unset using env -u
- Ran pytest targeting tests/gateway/test_bluebubbles.py::TestBlueBubblesSelfLoopGuard
- All 12 tests passed successfully in 0.47s

## Concepts
- pytest
- environment variable manipulation
- BlueBubbles gateway
- self-loop guard

## Files
- `~/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 4 · Confidence: 1_
