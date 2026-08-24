---
type: file_edit
title: Fix BlueBubbles pseudo-chat resolution to prevent webhook loops
description: Modified GUID resolution logic to track and avoid "any;-" pseudo-chats
resource: agentmemory://observation/obs_mrrpwg1y_3d6cb32f12ac
tags: ["webhook loop prevention", "pseudo-chat resolution", "GUID caching", "BlueBubbles integration", "iMessage service-specific GUIDs", "file_edit"]
timestamp: 2026-07-19T11:33:44.132519+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Modified the GUID resolution function in BlueBubbles integration to properly handle "any;-" pseudo-chats. The fix tracks when only pseudo-chats match a target and synthesizes service-specific GUIDs to prevent webhook loops that occur when sending to these pseudo-chats, which would otherwise trigger infinite self-webhook cycles.

## Facts
- Added _saw_any_pseudochat flag to track when only pseudo-chats match target
- Moved pseudo-chat detection inside identifier match condition for proper tracking
- Synthesis now triggers when _saw_any_pseudochat is True OR target contains "@" OR matches phone pattern
- Prevents self-webhook loops from BlueBubbles "any;-" pseudo-chats on outbound messages

## Concepts
- webhook loop prevention
- pseudo-chat resolution
- GUID caching
- BlueBubbles integration
- iMessage service-specific GUIDs

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 1_
