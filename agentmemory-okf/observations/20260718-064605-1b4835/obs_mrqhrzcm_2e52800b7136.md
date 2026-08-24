---
type: file_edit
title: Replace self._now() with datetime.now in bluebubbles
description: Self-loop guard timestamp source changed
resource: agentmemory://observation/obs_mrqhrzcm_2e52800b7136
tags: ["self-loop guard", "webhook echo suppression", "sent GUID tracking", "UTC timestamps", "file_edit"]
timestamp: 2026-07-18T14:58:32.755663+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Updated the BlueBubbles platform self-loop guard so outbound message GUIDs are timestamped with datetime.now(timezone.utc).timestamp() instead of self._now(). This keeps echo-suppression bookkeeping on an explicit UTC epoch timestamp while preserving existing GUID retention limits.

## Facts
- File patched: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Changed self._sent_guids timestamp from self._now() to datetime.now(timezone.utc).timestamp()
- Change is in self-loop guard that records outbound message GUIDs to drop webhook echoes
- Still skips when msg_id is missing or equals "ok"; still trims _sent_guids beyond _sent_guids_max via popitem(last=False)
- Patch succeeded; lint status ok

## Concepts
- self-loop guard
- webhook echo suppression
- sent GUID tracking
- UTC timestamps

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
