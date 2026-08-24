---
type: file_edit
title: Added self-loop guard to prevent Hermes responding to its own messages
description: BlueBubbles re-webhooks outbound messages causing infinite loop potential
resource: agentmemory://observation/obs_mrqhrjue_eac2cec96b1a
tags: ["self-loop prevention", "message deduplication", "webhook handling", "BlueBubbles integration", "file_edit"]
timestamp: 2026-07-18T14:58:12.659064+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Added a self-loop guard mechanism in BlueBubbles platform handler to track outbound message GUIDs and prevent Hermes from responding to its own messages when BlueBubbles re-webhooks them back as new-message events. This defensive programming avoids infinite reply loops on Tahoe installations where message origin detection is unreliable.

## Facts
- Added _sent_guids OrderedDict[str, float] to track outbound message GUIDs with timestamps
- Added _sent_guids_max = 500 as maximum cache size limit
- Problem occurs when BlueBubbles re-webhooks outbound messages as new events, especially on Tahoe with helper_connected=false where isFromMe is unreliable
- Solution: drop inbound webhooks whose message GUID matches sent GUIDs

## Concepts
- self-loop prevention
- message deduplication
- webhook handling
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 8 · Confidence: 1_
