---
type: Observation
title: Viewed bluebubbles-gateway skill documentation
description: Troubleshooting and setup reference for BlueBubbles iMessage bridge with Hermes gateway
resource: agentmemory://observation/obs_mrqolo2i_2f583cd90e45
tags: ["BlueBubbles iMessage bridge", "Hermes gateway", "webhook configuration", "IPv4 vs IPv6 binding", "self-loop echo bug", "URL encoding", "macOS Tahoe compatibility", "AppleScript fallback", "observation"]
timestamp: 2026-07-18T18:09:35.507666+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Viewed the bluebubbles-gateway skill which documents wiring, troubleshooting, and maintenance of BlueBubbles as an iMessage bridge for the Hermes gateway. The skill covers critical environment facts including the Tahoe helper_connected=false limitation, self-loop echo bug caused by missing isFromMe flags, IPv4 webhook host requirements, and the operational trap of restarting gateway from in-chat.

## Facts
- BlueBubbles is a macOS iMessage bridge; Hermes gateway communicates via local HTTP API (http://localhost:1234) and receives inbound messages via webhook
- BlueBubbles password has trailing `!` that must be URL-encoded as `%21` in query strings; missing `!` causes 401 errors
- `helper_connected` is false on macOS Tahoe (26) due to community dylib crash (BB#776); basic send/receive still works via AppleScript fallback
- Outbound messages NOT marked `isFromMe` on Tahoe, causing self-loop echo bug where Hermes receives its own replies as new messages
- Webhook listener host must be Mac's LAN IPv4 (e.g. 192.168.88.7), NOT localhost or 0.0.0.0
- localhost resolves to ::1 (IPv6) but gateway binds IPv4 only, causing "Failed to dispatch"; 0.0.0.0 gets rewritten to localhost
- BLUEBUBBLES_WEBHOOK_HOST set in ~/.hermes/.env; requires gateway restart to apply
- BLUEBUBBLES_SERVER_URL stays http://localhost:1234 for local communication
- hermes gateway restart MUST run in Terminal.app, not in-chat (operational trap)

## Concepts
- BlueBubbles iMessage bridge
- Hermes gateway
- webhook configuration
- IPv4 vs IPv6 binding
- self-loop echo bug
- URL encoding
- macOS Tahoe compatibility
- AppleScript fallback

## Files
- `~/.hermes/.env`

_Importance: 5 · Confidence: 1_
