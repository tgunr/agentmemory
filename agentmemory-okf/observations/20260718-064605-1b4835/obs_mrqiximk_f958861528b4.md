---
type: CommandRun
title: Run BlueBubbles tests and compile check
description: 1 test failed in self-loop guard, compilation succeeded
resource: agentmemory://observation/obs_mrqiximk_f958861528b4
tags: ["pytest", "BlueBubbles integration", "self-loop prevention", "message routing", "commandrun"]
timestamp: 2026-07-18T15:30:50.634224+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Ran the BlueBubbles gateway test suite with the webhook host environment variable unset. While the module compiled successfully and most tests passed, the self-loop guard test for dropping real chat text failed, indicating a logic issue to debug.

## Facts
- Executed in ~/.hermes/hermes-agent with BLUEBUBBLES_WEBHOOK_HOST env var unset
- 78 tests passed, 1 failed in tests/gateway/test_bluebubbles.py
- Failed test: TestBlueBubblesSelfLoopGuard::test_recent_sent_text_on_real_chat_dropped at line 880
- gateway/platforms/bluebubbles.py compiled successfully (COMPILE OK)

## Concepts
- pytest
- BlueBubbles integration
- self-loop prevention
- message routing

## Files
- `tests/gateway/test_bluebubbles.py`
- `gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
