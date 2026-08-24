---
type: file_edit
title: Prevent BlueBubbles webhook loops by avoiding pseudo-chat GUIDs
description: Fix self-webhook loop when sending to "any;-" pseudo-chats
resource: agentmemory://observation/obs_mrrpu2y3_b7790242bc0e
tags: ["BlueBubbles integration", "webhook loop prevention", "GUID resolution", "iMessage routing", "pseudo-chat handling", "message gateway", "file_edit"]
timestamp: 2026-07-19T11:31:53.832414+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Fixed a critical webhook loop issue in BlueBubbles integration where sending messages to "any;-" pseudo-chats caused self-webhooks for every outbound reply. The fix skips these pseudo-chat GUIDs during resolution and synthesizes service-specific GUIDs (iMessage;-;{target}) for email/phone targets when no concrete DM chat exists, ensuring messages route as real iMessage DMs.

## Facts
- Modified /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Added check to skip GUIDs starting with "any;-" during chat resolution
- Added fallback to synthesize "iMessage;-;{target}" GUIDs for email addresses and phone numbers
- Prevents self-webhook loops caused by BlueBubbles firing webhooks for outbound replies to pseudo-chats
- Lint status: ok

## Concepts
- BlueBubbles integration
- webhook loop prevention
- GUID resolution
- iMessage routing
- pseudo-chat handling
- message gateway

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 1_
