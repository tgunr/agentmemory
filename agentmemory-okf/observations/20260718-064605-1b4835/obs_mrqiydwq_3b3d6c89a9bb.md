---
type: file_edit
title: Fixed BlueBubbles echo detection for multiple chat identifier forms
description: Patch to bluebubbles.py improved echo message filtering logic
resource: agentmemory://observation/obs_mrqiydwq_3b3d6c89a9bb
tags: ["BlueBubbles platform", "echo detection", "message deduplication", "chat identifier resolution", "file_edit"]
timestamp: 2026-07-18T15:31:31.175991+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Modified echo detection in BlueBubbles handler to check multiple chat identifier forms simultaneously. BlueBubbles may echo sent messages under either the resolved chat guid or chat identifier, so the fix uses a set of candidates and any() to catch echoes regardless of which form is used. This prevents duplicate processing of self-sent messages.

## Facts
- Patched /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py lines 1175-1183
- Changed from single key lookup to multi-candidate set {(session_chat_id, chat_identifier, chat_guid)}</arg>
    <fact>Old logic used fallback: session_chat_id or chat_identifier or ""
- New logic checks all three candidates for echo detection within sent_text_window

## Concepts
- BlueBubbles platform
- echo detection
- message deduplication
- chat identifier resolution

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 6 · Confidence: 1_
