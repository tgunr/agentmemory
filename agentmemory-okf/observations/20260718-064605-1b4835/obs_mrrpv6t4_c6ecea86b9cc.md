---
type: CommandRun
title: BlueBubbles GUID resolution tests failing
description: Two pytest assertions failed in test_bluebubbles.py
resource: agentmemory://observation/obs_mrrpv6t4_c6ecea86b9cc
tags: ["BlueBubbles gateway chat GUID resolution", "regression test #24157", "DM leak prevention", "iMessage GUID synthesis", "participant vs chatIdentifier matching", "commandrun"]
timestamp: 2026-07-19T11:32:45.493294+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Two regression tests in tests/gateway/test_bluebubbles.py are failing, indicating a bug in the BlueBubbles adapter's _resolve_chat_guid logic. The first test expects a synthesized iMessage GUID for self/single-address cases but receives None. The second test (regression #24157) expects the resolver to return None when only a participant match is found in a group chat, but it instead returns a synthesized DM GUID, which would cause DM replies to leak into group threads.

## Facts
- test_resolve_chat_guid_refuses_any_pseudochat FAILED: expected synthesized GUID 'iMessage;-;+155****1111' but got None
- test_participant_only_match_does_not_resolve_to_group FAILED: expected None but got 'iMessage;-;user@example.com' (DM leak into group thread)
- Test is a regression for issue #24157 — contact as participant in group chat must not be selected when no DM with exact chatIdentifier exists
- Both tests target adapter._resolve_chat_guid method
- Tests ran in 0.42s with exit_code 0 (pytest returned failures but command itself succeeded)
- Test fake_api_post returns a group chat entry with chatIdentifier "chat0000000000" and participants [user@example.com, +155****0100]

## Concepts
- BlueBubbles gateway chat GUID resolution
- regression test #24157
- DM leak prevention
- iMessage GUID synthesis
- participant vs chatIdentifier matching

## Files
- `tests/gateway/test_bluebubbles.py`

_Importance: 7 · Confidence: 1_
