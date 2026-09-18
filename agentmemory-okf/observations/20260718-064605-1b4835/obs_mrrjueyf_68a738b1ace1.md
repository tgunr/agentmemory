---
type: Observation
title: Viewed bluebubbles-gateway skill for Hermes iMessage bridge
description: Troubleshooting and setup guide for BlueBubbles integration with Hermes gateway
resource: agentmemory://observation/obs_mrrjueyf_68a738b1ace1
tags: ["BlueBubbles iMessage bridge", "Hermes gateway webhook integration", "macOS Tahoe AppleScript fallback", "Self-loop echo bug mitigation", "IPv4 vs IPv6 webhook routing", "Environment variable configuration", "observation"]
timestamp: 2026-07-19T08:44:11.699123+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Retrieved the bluebubbles-gateway skill to understand the integration between BlueBubbles and the Hermes gateway. The skill details critical environment constraints, specifically the self-loop echo bug caused by macOS Tahoe's lack of isFromMe flagging and the strict IPv4 requirement for webhook routing to avoid IPv6 resolution failures.

## Facts
- BlueBubbles acts as macOS iMessage bridge for Hermes gateway via local HTTP API (port 1234) and webhooks.
- Password requires URL-encoding for trailing exclamation mark (%21) to avoid 401 errors.
- On macOS Tahoe, helper_connected=false due to dylib crash; AppleScript fallback is used but lacks isFromMe flag.
- Missing isFromMe flag causes self-loop echo bug where Hermes replies to its own outbound messages.
- Webhook host (BLUEBUBBLES_WEBHOOK_HOST) must be explicit LAN IPv4; localhost fails due to IPv6 ::1 resolution, and 0.0.0.0 gets rewritten to localhost.
- Gateway restart (hermes gateway restart) must be executed in Terminal.app, not in-chat.
- Configuration environment variables are stored in ~/.hermes/.env.

## Concepts
- BlueBubbles iMessage bridge
- Hermes gateway webhook integration
- macOS Tahoe AppleScript fallback
- Self-loop echo bug mitigation
- IPv4 vs IPv6 webhook routing
- Environment variable configuration

## Files
- `~/.hermes/.env`

_Importance: 7 · Confidence: 1_
