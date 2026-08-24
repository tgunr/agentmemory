---
type: file_edit
title: Patched BlueBubbles self-loop guard documentation into macos-integrations skill
description: Documentation update for critical infinite message loop fix on macOS Tahoe
resource: agentmemory://observation/obs_mrqi02eb_5d411d5bf5a2
tags: ["BlueBubbles integration", "message loopback prevention", "macOS Tahoe compatibility", "webhook deduplication", "launchctl emergency procedures", "file_edit"]
timestamp: 2026-07-18T15:04:49.950461+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Added critical documentation about an infinite loop bug where Hermes would reply to its own messages due to BlueBubbles' isFromMe flag being unreliable on macOS Tahoe without SIP+dylib. The fix tracks sent message GUIDs and drops them from inbound webhook processing, with additional guards for Hermes status prefixes. Tests and emergency procedures are documented to prevent future incidents.

## Facts
- Tool patched references/bluebubbles-gateway.md in skill 'macos-integrations'
- Added documentation about self-answering message infinite loop on macOS Tahoe with helper_connected=false
- Root cause: BlueBubbles cannot set isFromMe flag reliably without SIP + dylib, causing Hermes to ingest its own replies as new messages
- Fix implemented in gateway/platforms/bluebubbles.py with _sent_guids tracking and status-bubble prefix guards
- 7 tests added in tests/gateway/test_bluebubbles.py::TestBlueBubblesSelfLoopGuard to verify the guard
- Emergency stop procedure uses launchctl stop for BlueBubbles server to halt loops without restart

## Concepts
- BlueBubbles integration
- message loopback prevention
- macOS Tahoe compatibility
- webhook deduplication
- launchctl emergency procedures

## Files
- `references/bluebubbles-gateway.md`
- `gateway/platforms/bluebubbles.py`
- `tests/gateway/test_bluebubbles.py`

_Importance: 8 · Confidence: 1_
