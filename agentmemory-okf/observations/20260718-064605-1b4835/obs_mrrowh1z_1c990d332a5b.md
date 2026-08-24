---
type: Observation
title: Patched SKILL.md verification section for bluebubbles-gateway skill
description: Updated test documentation with additional self-loop guard tests and environment handling guidance
resource: agentmemory://observation/obs_mrrowh1z_1c990d332a5b
tags: ["pytest testing", "environment variable handling", "self-loop guard", "test suite isolation", "observation"]
timestamp: 2026-07-19T11:05:45.811633+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Updated the verification documentation in the bluebubbles-gateway skill to include a new self-loop guard test and critical guidance about running the test suite in both environment configurations to detect state leakage from .env files.

## Facts
- Action: patch applied to SKILL.md in 'bluebubbles-gateway' skill
- Added test: test_status_reply_echo_with_prefix_and_multiline_dropped (new 13th test)
- Tests now include: any; drops, status-bubble prefix drops, real-chat-GUID echo drop, bare-handle echo regression, and 30s-window regression
- Must run pytest both with ambient env and with `env -u BLUEBUBBLES_WEBHOOK_HOST` to catch env bleed
- Reference document: references/bluebubbles-self-loop.md contains "Test-suite pitfalls" and diagnostic guidance
- Files involved: gateway/platforms/bluebubbles.py, tests/gateway/test_bluebubbles.py, references/bluebubbles-self-loop.md

## Concepts
- pytest testing
- environment variable handling
- self-loop guard
- test suite isolation

## Files
- `tests/gateway/test_bluebubbles.py`
- `gateway/platforms/bluebubbles.py`
- `references/bluebubbles-self-loop.md`

_Importance: 4 · Confidence: 1_
