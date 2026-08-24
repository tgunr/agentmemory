---
type: file_write
title: Created BlueBubbles Tahoe troubleshooting guide
description: Documentation for Private API helper issues on macOS 26/27
resource: agentmemory://observation/obs_mrqbrxxi_0c1fed7157ff
tags: ["BlueBubbles Private API", "macOS Tahoe compatibility", "System Integrity Protection (SIP)", "dylib injection", "AMFI bypass", "Messages.app helper", "AppleScript fallback", "file_write"]
timestamp: 2026-07-18T12:10:33.217692+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Created comprehensive troubleshooting documentation for BlueBubbles Private API helper on macOS Tahoe. The guide addresses two blocking issues: SIP preventing dylib injection and a crash loop in the shipped helper due to incompatible chat item classes. Provides community-built dylib solution and clarifies which features work without the helper.

## Facts
- File written to references/bluebubbles-tahoe.md in macos-integrations skill
- Documents two root causes for helper_connected=false on macOS Tahoe: SIP enabled and incompatible shipped dylib
- SIP must be disabled for dylib injection; requires AMFI bypass on Apple Silicon
- BlueBubbles 1.9.9 helper crashes on Tahoe due to IMMessageAcknowledgmentChatItem missing -index selector
- Community fix available: willsigmon/bluebubbles-helper v0.0.22-tahoe
- Basic send/receive works without helper via AppleScript; only Private API features (tapbacks, reactions, editing, read receipts) require helper

## Concepts
- BlueBubbles Private API
- macOS Tahoe compatibility
- System Integrity Protection (SIP)
- dylib injection
- AMFI bypass
- Messages.app helper
- AppleScript fallback

## Files
- `references/bluebubbles-tahoe.md`

_Importance: 5 · Confidence: 1_
