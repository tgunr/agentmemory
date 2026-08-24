---
type: file_edit
title: Enhance BlueBubbles self-loop guard to catch real-GUID echoes
description: Prevents agent from answering its own echoed messages by tracking recent sends
resource: agentmemory://observation/obs_mrqiwv1s_f5b1e20fdfbf
tags: ["webhook echo prevention", "self-loop guard", "message deduplication", "BlueBubbles integration", "normalized text matching", "file_edit"]
timestamp: 2026-07-18T15:30:20.077196+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Updated the self-loop guard in the BlueBubbles webhook handler to prevent the agent from replying to its own echoed messages. Since echoes can arrive on the real chat GUID (not just the "any;-" channel), the fix adds a secondary check that drops inbound messages matching a recently sent (chat, normalized text) pair within a configurable time window.

## Facts
- Modified self-loop guard in BlueBubbles webhook handler to prevent infinite reply loops
- Echoes can arrive on the real chat GUID, not just the reserved "any;-" channel
- Added secondary check using _sent_texts dictionary keyed by (chat_id, normalized_text)
- Drops inbound messages matching a recently sent pair within _sent_text_window seconds
- Uses record.get("__now__") or current UTC timestamp for time comparison

## Concepts
- webhook echo prevention
- self-loop guard
- message deduplication
- BlueBubbles integration
- normalized text matching

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 6 · Confidence: 1_
