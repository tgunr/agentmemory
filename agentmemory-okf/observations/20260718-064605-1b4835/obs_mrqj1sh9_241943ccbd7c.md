---
type: file_write
title: Write BlueBubbles self-loop echo debugging documentation
description: Documentation of diagnosis and fix for BlueBubbles gateway self-loop echo issue
resource: agentmemory://observation/obs_mrqj1sh9_241943ccbd7c
tags: ["BlueBubbles gateway", "self-loop echo prevention", "OrderedDict message tracking", "webhook message filtering", "macOS Tahoe", "file_write"]
timestamp: 2026-07-18T15:34:10.024774+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Documentation was written explaining how a self-loop echo bug was diagnosed and fixed in the BlueBubbles gateway. The echo messages were arriving on real chat GUIDs rather than the reserved "any;-" channel, making simple channel-based guards insufficient. The solution tracks sent messages by (chat, normalized_text) with a 30-second window and checks multiple candidate chat identifiers including prefix-stripped forms.

## Facts
- Tool used: skill_manage with action write_file
- Target file: references/bluebubbles-self-loop.md in bluebubbles-gateway skill
- Issue captured: 2026-07-18 on macOS Tahoe (26) with Hermes gateway, helper_connected=false
- Root cause: Echo messages arrive on real chat GUID, not just "any;-" reserved channel
- Fix uses OrderedDict to track sent (chat, normalized_text) pairs with 30s window
- Fix checks session_chat_id, chat_identifier, chat_guid, and prefix-stripped variants
- Defense-in-depth also drops messages starting with 💭⚡🤔🔧 status bubbles
- Three test cases in TestBlueBubblesSelfLoopGuard class validate the fix

## Concepts
- BlueBubbles gateway
- self-loop echo prevention
- OrderedDict message tracking
- webhook message filtering
- macOS Tahoe

## Files
- `references/bluebubbles-self-loop.md`
- `gateway/platforms/bluebubbles.py`
- `tests/gateway/test_bluebubbles.py`

_Importance: 8 · Confidence: 1_
