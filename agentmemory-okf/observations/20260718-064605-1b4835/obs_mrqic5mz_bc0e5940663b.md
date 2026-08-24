---
type: file_edit
title: Added BlueBubbles echo suppression and real DM tests
description: Two new pytest cases guard against answering self-echoes on 'any;-' channel
resource: agentmemory://observation/obs_mrqic5mz_bc0e5940663b
tags: ["BlueBubbles webhook", "iMessage chat GUID filtering", "echo suppression", "pytest async parametrized tests", "file_edit"]
timestamp: 2026-07-18T15:14:14.024604+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Two new test cases were added to the BlueBubbles gateway test suite to prevent the bot from replying to its own outbound message echoes sent via the reserved 'any;-' channel, while ensuring legitimate direct messages still pass through to handle_message.

## Facts
- Added test_any_echo_channel_dropped verifying outbound reply echoes on 'any;-;+15550001111' chat GUID are dropped
- Added test_real_dm_chat_not_dropped verifying real inbound DMs with 'iMessage;-;+15550001111' are dispatched to handle_message
- Existing test_status_bubble_prefix_is_dropped test preserved in same file
- Patch applied successfully with no lint errors

## Concepts
- BlueBubbles webhook
- iMessage chat GUID filtering
- echo suppression
- pytest async parametrized tests

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 5 · Confidence: 1_
