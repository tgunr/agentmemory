---
type: FileRead
title: BlueBubbles self-loop echo diagnosis and fix
description: Reference documents chat-key normalization and recent-send suppression
resource: agentmemory://observation/obs_mrrq0vca_81615e6e1cc7
tags: ["webhook echo suppression", "chat GUID normalization", "recent-send deduplication", "BlueBubbles gateway", "regression testing", "fileread"]
timestamp: 2026-07-19T11:37:10.566812+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The reference explains that BlueBubbles may echo a sent message under a bare handle even when it was sent using an iMessage-prefixed GUID. The robust solution records normalized sent text under all equivalent chat keys and suppresses matching webhooks only within a short time window, with regression tests preserving this behavior.

## Facts
- BlueBubbles can re-webhook outbound replies through both the reserved any;-; channel and the real chat GUID, so a channel-only guard is insufficient.
- The fix in gateway/platforms/bluebubbles.py tracks normalized outbound text by chat key for 30 seconds, including prefixed GUIDs and prefix-stripped bare handles.
- Webhook handling drops reserved echo channels, recent matching outbound text on candidate chat identifiers, and Hermes status bubbles beginning with 💭, ⚡, 🤔, or 🔧.
- Text normalization trims, lowercases, and collapses whitespace, allowing case and multiline variations to match.
- Regression tests in tests/gateway/test_bluebubbles.py cover real-chat echoes, prefixed-send-to-bare-handle echoes, multiline /status loops, and expiration of the 30-second suppression window.

## Concepts
- webhook echo suppression
- chat GUID normalization
- recent-send deduplication
- BlueBubbles gateway
- regression testing

## Files
- `references/bluebubbles-self-loop.md`
- `gateway/platforms/bluebubbles.py`
- `tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
