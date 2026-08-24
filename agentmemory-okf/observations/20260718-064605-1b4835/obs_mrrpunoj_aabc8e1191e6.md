---
type: CommandRun
title: Pytest reveals 2 failures in BlueBubbles GUID resolution tests
description: Compilation OK, but 2 tests fail at line 963 regardless of env vars
resource: agentmemory://observation/obs_mrrpunoj_aabc8e1191e6
tags: ["pytest execution", "Python py_compile", "Environment variable isolation (env -u)", "BlueBubbles gateway testing", "GUID resolution logic", "Self-loop guard validation", "commandrun"]
timestamp: 2026-07-19T11:32:20.705059+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed Python compilation and pytest for the BlueBubbles gateway. While compilation succeeded, two tests concerning GUID resolution and pseudochat self-loop guards failed with an AssertionError at line 963. The identical failures in both standard and environment-cleared runs indicate the issue is not caused by the BLUEBUBBLES_WEBHOOK_HOST variable.

## Facts
- Working directory: /Users/davec/.hermes/hermes-agent
- py_compile succeeded for gateway/platforms/bluebubbles.py and tests/gateway/test_bluebubbles.py
- 81 tests passed, 2 failed in both standard and env-cleared runs
- Failing tests: TestBlueBubblesGuidResolution::test_participant_only_match_does_not_resolve_to_group, TestBlueBubblesSelfLoopGuard::test_resolve_chat_guid_refuses_any_pseudochat
- Failures are AssertionErrors at tests/gateway/test_bluebubbles.py:963
- Env var BLUEBUBBLES_WEBHOOK_HOST was cleared in the second run using `env -u`

## Concepts
- pytest execution
- Python py_compile
- Environment variable isolation (env -u)
- BlueBubbles gateway testing
- GUID resolution logic
- Self-loop guard validation

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
