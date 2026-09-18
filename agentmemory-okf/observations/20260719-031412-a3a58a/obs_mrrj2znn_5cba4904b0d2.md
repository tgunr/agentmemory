---
type: Observation
title: Viewed bluebubbles-gateway skill documentation
description: iMessage bridge setup, Tahoe limitations, and self-loop echo bug fixes
resource: agentmemory://observation/obs_mrrj2znn_5cba4904b0d2
tags: ["BlueBubbles iMessage bridge", "Hermes gateway webhook configuration", "macOS Tahoe helper limitations", "Self-loop echo bug mitigation", "IPv4 vs IPv6 webhook binding", "URL encoding in API query strings", "observation"]
timestamp: 2026-07-19T08:22:52.159767+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 7
confidence: 1
---
# Summary

The agent viewed the bluebubbles-gateway skill to understand how to integrate BlueBubbles with the Hermes gateway. The documentation details critical configuration for macOS Tahoe, specifically the IPv4 webhook requirement to avoid IPv6 resolution failures and the self-loop echo bug caused by the missing isFromMe flag when the native helper is disconnected.

## Facts
- BlueBubbles bridges iMessage to Hermes gateway via HTTP API (localhost:1234) and webhooks
- Passwords with a trailing ! must be URL-encoded as %21 in query strings to avoid 401 errors
- macOS 26 (Tahoe) has helper_connected=false due to a dylib crash; AppleScript fallback is used
- Tahoe fallback causes outbound messages to lack the isFromMe flag, triggering a self-loop echo bug
- Webhook host (BLUEBUBBLES_WEBHOOK_HOST) must be a LAN IPv4; localhost resolves to IPv6 ::1 and 0.0.0.0 rewrites to localhost
- Configuration environment variables are stored in ~/.hermes/.env
- Gateway restart (hermes gateway restart) must be executed in Terminal.app, not in-chat

## Concepts
- BlueBubbles iMessage bridge
- Hermes gateway webhook configuration
- macOS Tahoe helper limitations
- Self-loop echo bug mitigation
- IPv4 vs IPv6 webhook binding
- URL encoding in API query strings

## Files
- `~/.hermes/.env`

_Importance: 7 · Confidence: 1_
