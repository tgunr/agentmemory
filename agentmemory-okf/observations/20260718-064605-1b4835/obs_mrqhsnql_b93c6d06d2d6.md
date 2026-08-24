---
type: file_edit
title: Added self-loop guard to BlueBubbles gateway to prevent message echo loops
description: Patch to bluebubbles.py prevents Hermes from responding to its own messages
resource: agentmemory://observation/obs_mrqhsnql_b93c6d06d2d6
tags: ["message echo prevention", "self-loop guard", "BlueBubbles webhook handling", "GUID-based deduplication", "file_edit"]
timestamp: 2026-07-18T14:59:04.363119+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Patch adds critical guards in the BlueBubbles gateway to prevent Hermes from entering infinite feedback loops where it would respond to its own messages. This addresses a reliability issue with the isFromMe flag and adds additional filtering for status indicator messages.

## Facts
- Added GUID-based echo detection using self._sent_guids set to filter inbound messages matching recently sent ones
- Added defense-in-depth filter for status bubbles with prefixes: 💭, ⚡, 🤔, 🔧
- Handles unreliable isFromMe flag on Tahoe when helper_connected=false
- Modified /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py at line 1023+

## Concepts
- message echo prevention
- self-loop guard
- BlueBubbles webhook handling
- GUID-based deduplication

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 8 · Confidence: 1_
