---
type: file_edit
title: Add self-loop guard for BlueBubbles webhook echoes
description: Prevent infinite loops from bot's own message echoes
resource: agentmemory://observation/obs_mrqibu6k_1f3d36c6983d
tags: ["webhook self-loop prevention", "BlueBubbles echo channel", "infinite loop guard", "message echo detection", "file_edit"]
timestamp: 2026-07-18T15:13:59.177313+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Added a self-loop guard to prevent the bot from responding to its own message echoes. In BlueBubbles with Tahoe/helper_connected=false, outbound replies are re-webhooked as new-message events with the reserved "any;-" channel GUID. Plain-text echoes were bypassing existing guards, so this channel check provides a reliable catch to prevent infinite response loops.

## Facts
- Added self-loop guard in BlueBubbles webhook handler at line 1143
- Guard checks if chat GUID starts with "any;-" (BlueBubbles' reserved echo channel)
- Prevents bot from responding to its own outbound replies that get re-webhooked as new-message events
- Addresses Tahoe/helper_connected=false scenario where echoes slip past existing GUID/prefix guards
- Returns early with web.Response(text="ok") when echo detected

## Concepts
- webhook self-loop prevention
- BlueBubbles echo channel
- infinite loop guard
- message echo detection

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 1_
