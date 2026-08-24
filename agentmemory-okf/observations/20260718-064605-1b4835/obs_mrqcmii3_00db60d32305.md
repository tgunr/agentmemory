---
type: FileRead
title: BlueBubbles macOS Tahoe Private API Helper Documentation
description: Reference for fixing Private API helper issues on macOS Tahoe 26/27
resource: agentmemory://observation/obs_mrqcmii3_00db60d32305
tags: ["macOS System Integrity Protection (SIP)", "dylib injection", "BlueBubbles Private API", "macOS Tahoe compatibility", "IMChatItem API", "fileread"]
timestamp: 2026-07-18T12:34:19.560602+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Documentation retrieved detailing BlueBubbles Private API helper issues on macOS Tahoe, including SIP requirements and dylib crash root cause. Provides actionable fix steps with community-built compatible dylib replacement.

## Facts
- File read: references/bluebubbles-tahoe.md
- Skill name: macos-integrations
- Two root causes identified: SIP enabled and Tahoe-incompatible shipped dylib
- SIP must be disabled via Recovery mode for dylib injection to work on Apple Silicon
- BlueBubbles server 1.9.9 dylib crashes due to _newChatItems returning IMMessageAcknowledgmentChatItem without -index selector
- Community fix available: willsigmon/bluebubbles-helper v0.0.22-tahoe release

## Concepts
- macOS System Integrity Protection (SIP)
- dylib injection
- BlueBubbles Private API
- macOS Tahoe compatibility
- IMChatItem API

## Files
- `references/bluebubbles-tahoe.md`

_Importance: 5 · Confidence: 1_
