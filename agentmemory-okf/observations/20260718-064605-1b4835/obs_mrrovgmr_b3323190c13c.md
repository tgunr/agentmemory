---
type: FileRead
title: BlueBubbles self-loop echo debugging reference
description: Gateway fix for self-echo loop where BlueBubbles re-webhooks sent messages
resource: agentmemory://observation/obs_mrrovgmr_b3323190c13c
tags: ["self-echo loop prevention", "BlueBubbles webhook echo", "message deduplication", "chat GUID normalization", "OrderedDict LRU cache", "defense-in-depth filtering", "text normalization for matching", "fileread"]
timestamp: 2026-07-19T11:04:58.607535+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Retrieved a detailed debugging reference for a BlueBubbles gateway self-loop issue where the platform re-webhooks its own sent messages as inbound, creating echo loops. The document captures the diagnosis path, the multi-layer fix implementation with code anchors, test coverage, and lessons from failed single-layer approaches. This is critical reference material for the bluebubbles-gateway skill.

## Facts
- BlueBubbles gateway echoed its own replies creating infinite loops; two chat values appeared: reserved echo channel (any;-;+1...) and real chat GUID (iMessage;-;+1... or bare +1...)
- Fix in gateway/platforms/bluebubbles.py uses _sent_guids (OrderedDict, max 500) and _sent_texts (OrderedDict mapping (chat, norm_text) → timestamp) with 30s window
- Critical insight: BB re-webhooks replies as BARE handle (+1...) even though sent under prefixed form (iMessage;-;+1...), so prefix-stripped keys must also be recorded
- Three-layer defense: (1) reserved echo channel (any;-) skip, (2) recent-send echo match on real chat GUID with normalized text, (3) status bubble emoji prefix drop (💭⚡🤔🔧)
- Text normalization: re.sub(r"\s+", " ", text.strip().lower()) for case/whitespace-insensitive matching
- Tests in tests/gateway/test_bluebubbles.py class TestBlueBubblesSelfLoopGuard cover: real-chat echo drop, prefixed-then-bare echo drop, old-send not dropped (30s window), any-echo channel drop, status bubble prefix drop
- Earlier single-layer fixes failed: GUID-only matching failed because BB doesn't always return the same GUID format; channel-only guard insufficient because real-chat-GUID echoes also occur

## Concepts
- self-echo loop prevention
- BlueBubbles webhook echo
- message deduplication
- chat GUID normalization
- OrderedDict LRU cache
- defense-in-depth filtering
- text normalization for matching

## Files
- `references/bluebubbles-self-loop.md`
- `gateway/platforms/bluebubbles.py`
- `tests/gateway/test_bluebubbles.py`

_Importance: 8 · Confidence: 1_
