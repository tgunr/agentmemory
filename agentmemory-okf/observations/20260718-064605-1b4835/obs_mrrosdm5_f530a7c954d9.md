---
type: Observation
title: Viewed bluebubbles-gateway skill for iMessage bridge troubleshooting
description: Technical documentation for BlueBubbles-Hermes integration issues
resource: agentmemory://observation/obs_mrrosdm5_f530a7c954d9
tags: ["iMessage bridge integration", "BlueBubbles gateway", "macOS Tahoe compatibility", "webhook IPv4 configuration", "self-loop echo bug", "helper_connected=false limitation", "observation"]
timestamp: 2026-07-19T11:02:34.729114+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Accessed skill documentation outlining critical integration details between BlueBubbles macOS iMessage bridge and Hermes gateway. The skill covers Tahoe (macOS 26) specific limitations, a self-loop echo bug caused by missing isFromMe flags, and IPv4 webhook configuration requirements that are essential for proper inbound message delivery.

## Facts
- Password has trailing ! that must be URL-encoded as %21 in query strings
- helper_connected=false on Tahoe (macOS 26) due to community dylib crash BB#776
- AppleScript fallback enables basic send/receive without SIP when helper_connected=false
- Outbound messages lack isFromMe flag on Tahoe, causing self-loop echo bug
- Webhook host must be LAN IPv4 (e.g., 192.168.88.7), not localhost or 0.0.0.0

## Concepts
- iMessage bridge integration
- BlueBubbles gateway
- macOS Tahoe compatibility
- webhook IPv4 configuration
- self-loop echo bug
- helper_connected=false limitation

## Files
- `~/.hermes/.env`

_Importance: 8 · Confidence: 1_
