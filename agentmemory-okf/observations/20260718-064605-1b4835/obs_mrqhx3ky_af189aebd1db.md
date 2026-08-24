---
type: CommandRun
title: Test file not found: tests/gateway/test_webhook.py
description: Pytest collection failure - missing test_webhook.py
resource: agentmemory://observation/obs_mrqhx3ky_af189aebd1db
tags: ["pytest collection error", "missing test file", "BlueBubbles webhook", "test discovery", "commandrun"]
timestamp: 2026-07-18T15:02:31.519388+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Attempted to run two gateway test files but pytest failed at collection because tests/gateway/test_webhook.py does not exist. Only test_bluebubbles.py exists in the tests/gateway/ directory. This suggests either the file was never created, was renamed, or needs to be created for webhook-related test coverage.

## Facts
- Command run: pytest tests/gateway/test_bluebubbles.py tests/gateway/test_webhook.py -q -p no:cacheprovider
- test_webhook.py does not exist in tests/gateway/ directory
- BLUEBUBBLES_WEBHOOK_HOST env var was unset for the test run
- Working directory: ~/.hermes/hermes-agent
- Result: no tests ran in 0.00s due to collection error
- Exit code reported as 0 despite pytest ERROR

## Concepts
- pytest collection error
- missing test file
- BlueBubbles webhook
- test discovery

## Files
- `tests/gateway/test_bluebubbles.py`
- `tests/gateway/test_webhook.py`

_Importance: 4 · Confidence: 1_
