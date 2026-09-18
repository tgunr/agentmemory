---
type: CommandRun
title: Investigating potential message loop in gateway.log
description: Checking if agent responses are being echoed back as inbound messages
resource: agentmemory://observation/obs_mrqhnf0g_9c850d1cd416
tags: ["message loop detection", "inbound message handling", "isFromMe logic", "gateway logging", "BlueBubbles platform integration", "commandrun"]
timestamp: 2026-07-18T14:54:59.772910+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

The investigation reveals a potential message loop where agent/system responses ("Interrupting current task", "Reasoning") are being received back as inbound messages. The similar count of inbound messages (22) and responses sent (24) suggests the isFromMe logic may not be properly filtering out the agent's own messages.

## Facts
- 22 inbound messages from platform=bluebubbles in last 2 minutes
- 24 "Sending response" entries in gateway log
- Repeated "Interrupting current task" messages detected in inbound log
- Only one session directory found: /Users/davec/.hermes/sessions/saved/
- Messages showing "💭 Reasoning" and system messages as inbound

## Concepts
- message loop detection
- inbound message handling
- isFromMe logic
- gateway logging
- BlueBubbles platform integration

## Files
- `/Users/davec/.hermes/logs/gateway.log`
- `/Users/davec/.hermes/sessions/saved/`

_Importance: 8 · Confidence: 1_
