---
type: file_edit
title: Restrict iMessage GUID synthesis to prevent group thread leaks
description: Fixes issue #24157 by removing fallback synthesis for emails/phone numbers
resource: agentmemory://observation/obs_mrrpwvm9_59b25aab1c8d
tags: ["iMessage routing", "GUID synthesis", "pseudo-chat resolution", "group thread leak prevention", "BlueBubbles platform", "file_edit"]
timestamp: 2026-07-19T11:34:04.302246+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

The code was updated to restrict iMessage GUID synthesis to only occur when a pseudo-chat is seen. Previously, it would also synthesize GUIDs for emails and phone numbers, which could lead to DMs leaking into group threads or inventing GUIDs for unknown addresses. This fix addresses issue #24157.

## Facts
- File modified: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Removed fallback conditions for GUID synthesis: `"@" in target` and `re.match(r"^\+\d+$", target)`
- Now only synthesizes `iMessage;-;{target}` if `_saw_any_pseudochat` is true
- Prevents leaking DMs into group threads or inventing GUIDs for unknown addresses
- References issue #24157

## Concepts
- iMessage routing
- GUID synthesis
- pseudo-chat resolution
- group thread leak prevention
- BlueBubbles platform

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 1_
