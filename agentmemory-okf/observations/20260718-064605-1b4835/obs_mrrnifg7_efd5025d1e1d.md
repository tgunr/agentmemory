---
type: CommandRun
title: BlueBubbles gateway test suite: 80 passed
description: Env var isolation check for test_default_host
resource: agentmemory://observation/obs_mrrnifg7_efd5025d1e1d
tags: ["pytest", "environment variable isolation", "test pollution / env-bleed", "default webhook host configuration", "commandrun"]
timestamp: 2026-07-19T10:26:50.933030+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The test runner executed the BlueBubbles gateway test suite under `/Users/davec/.hermes/hermes-agent` and confirmed all 80 tests pass. A targeted test for default host behavior was re-run with and without `BLUEBUBBLES_WEBHOOK_HOST` cleared; both passed, suggesting the env-bleed scenario is not currently reproducing.

## Facts
- Full suite run: `tests/gateway/test_bluebubbles.py` passed 80 tests in 1.27s
- Environment variable `BLUEBUBBLES_WEBHOOK_HOST` was unset via `env -u` to avoid potential env-bleed
- Specific test `tests/gateway/test_bluebubbles.py::TestBlueBubblesWebhookUrl::test_default_host` passed both with and without `BLUEBUBBLES_WEBHOOK_HOST` unset
- The "without clear" rerun did not demonstrate the expected env-bleed

## Concepts
- pytest
- environment variable isolation
- test pollution / env-bleed
- default webhook host configuration

## Files
- `tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
