---
type: file_edit
title: Add text-based echo detection to BlueBubbles self-loop guard
description: Prevents infinite loops when channel-based GUID guards fail
resource: agentmemory://observation/obs_mrqiwosj_f528444bf529
tags: ["Webhook echo prevention", "Self-loop guard", "LRU cache eviction", "BlueBubbles integration", "file_edit"]
timestamp: 2026-07-18T15:30:11.968004+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Enhanced the BlueBubbles platform integration's self-loop guard to track normalized (chat, text) pairs in addition to message GUIDs. This prevents infinite ingestion loops when webhook echoes occur on real chat GUIDs where standard channel-based guards are ineffective.

## Facts
- Modified /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Added tracking of normalized (chat_id, self._norm_text(chunk)) tuples in self._sent_texts
- Eviction logic uses popitem(last=False) bounded by self._sent_guids_max
- Catches webhook echoes on real chat GUIDs where channel-based guards do not apply

## Concepts
- Webhook echo prevention
- Self-loop guard
- LRU cache eviction
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 6 · Confidence: 1_
