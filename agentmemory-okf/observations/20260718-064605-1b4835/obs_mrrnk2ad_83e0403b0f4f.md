---
type: FileRead
title: BlueBubbles self-loop echo debugging reference
description: Debugging path and fix for gateway echoing its own outbound messages
resource: agentmemory://observation/obs_mrrnk2ad_83e0403b0f4f
tags: ["self-loop echo prevention", "BlueBubbles gateway integration", "message deduplication", "webhook echo filtering", "text normalization for dedup", "defense-in-depth message filtering", "iMessage chat GUID parsing", "fileread"]
timestamp: 2026-07-19T10:28:07.184361+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

A reference document capturing the full debugging path for a BlueBubbles gateway self-loop where outbound messages were echoed back as inbound. Three iterative fix attempts are documented: GUID-based (failed due to AppleScript fallback), channel-only guard (failed because echoes arrive on real chat GUID), and the working (chat, normalized_text) 30s window approach that checks multiple chat identifier forms.

## Facts
- Self-loop diagnosed via two distinct chat values: `any;-;+1...` (reserved echo channel) and real chat GUID like `iMessage;-;+1...`
- Fix uses OrderedDict tracking of `_sent_texts` keyed by (chat, normalized_text) with 30-second window
- Text normalization: lowercase, strip, collapse whitespace via `_norm_text` static method
- Three-layer defense: (1) reserved `any;-` echo channel skip, (2) recent-send echo on real chat GUID, (3) status bubble emoji prefix filter (💭⚡🤔🔧)
- GUID-based dedup failed because AppleScript-fallback sends return `guid="ok"` and echo GUID differs from recorded
- Channel-only guard failed because most echoes arrive on the REAL chat GUID, not `any;-`
- Working solution checks guid/identifier/prefix-stripped forms against `_sent_texts` within 30s window
- Tests in tests/gateway/test_bluebubbles.py class TestBlueBubblesSelfLoopGuard cover: real chat drop, old text not dropped, any-echo dropped, status bubble dropped
- Emergency loop-stop: `launchctl stop application.com.BlueBubbles.BlueBubbles-Server.*` then relaunch
- Code anchors in gateway/platforms/bluebubbles.py: `__init__` state, `send()` recording, `_handle_webhook` filtering

## Concepts
- self-loop echo prevention
- BlueBubbles gateway integration
- message deduplication
- webhook echo filtering
- text normalization for dedup
- defense-in-depth message filtering
- iMessage chat GUID parsing

## Files
- `references/bluebubbles-self-loop.md`
- `gateway/platforms/bluebubbles.py`
- `tests/gateway/test_bluebubbles.py`

_Importance: 7 · Confidence: 1_
