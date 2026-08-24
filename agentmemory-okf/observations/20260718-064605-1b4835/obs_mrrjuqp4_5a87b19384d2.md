---
type: FileRead
title: BlueBubbles self-loop diagnosis and layered echo guard
description: Reference documents the working 30-second normalized-text suppression strategy
resource: agentmemory://observation/obs_mrrjuqp4_5a87b19384d2
tags: ["BlueBubbles webhook echo suppression", "normalized text deduplication", "time-window replay guard", "chat GUID normalization", "self-loop prevention", "defense-in-depth filtering", "fileread"]
timestamp: 2026-07-19T08:44:26.918262+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

The reference explains why BlueBubbles outbound messages can loop back into Hermes even after GUID- or channel-based filtering. The robust solution combines reserved-channel filtering with recent normalized-text matching across all chat identifier forms, bounded by a 30-second window to avoid suppressing legitimate later repeats.

## Facts
- BlueBubbles echoes may arrive through both the reserved any;- channel and the real chat GUID, so channel-only filtering is insufficient.
- The working fix records outbound (chat, normalized_text) pairs under both the handle and resolved GUID in an OrderedDict with a 30-second window.
- Webhook filtering checks session_chat_id, chat_identifier, chat_guid, and prefix-stripped variants for a recent normalized-text match.
- Additional guards drop any;- channels and Hermes status messages beginning with 💭, ⚡, 🤔, or 🔧.
- GUID-only suppression failed because AppleScript fallback may return guid="ok" and inbound echo GUIDs may differ.
- Tests cover real-chat normalized matches, expiration after 999 seconds, any;- echoes, and status-prefix suppression.
- Emergency mitigation is stopping the BlueBubbles Server launchctl application, then relaunching BlueBubbles and restarting the Hermes gateway after deploying the fix.

## Concepts
- BlueBubbles webhook echo suppression
- normalized text deduplication
- time-window replay guard
- chat GUID normalization
- self-loop prevention
- defense-in-depth filtering

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/references/bluebubbles-self-loop.md`
- `gateway/platforms/bluebubbles.py`
- `tests/gateway/test_bluebubbles.py`

_Importance: 8 · Confidence: 1_
