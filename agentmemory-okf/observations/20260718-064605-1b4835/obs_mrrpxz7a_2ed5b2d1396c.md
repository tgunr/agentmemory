---
type: Observation
title: Skill View: BlueBubbles-Hermes Gateway Integration
description: Troubleshooting iMessage bridge, Tahoe limitations, and self-loop echo bug
resource: agentmemory://observation/obs_mrrpxz7a_2ed5b2d1396c
tags: ["iMessage bridge", "Webhook configuration", "IPv4 vs IPv6 resolution", "URL encoding", "Self-loop echo bug", "macOS Tahoe limitations", "observation"]
timestamp: 2026-07-19T11:34:55.603155+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

The agent retrieved the bluebubbles-gateway skill documentation to understand the integration between BlueBubbles and the Hermes gateway. The skill details critical environment configurations, specifically addressing macOS Tahoe's helper_connected=false limitation, the resulting self-loop echo bug, and strict IPv4 requirements for webhook routing to prevent IPv6 resolution failures.

## Facts
- BlueBubbles acts as a macOS iMessage bridge for the Hermes gateway via local HTTP API (localhost:1234) and webhooks.
- Passwords with a trailing '!' must be URL-encoded as '%21' in query strings to prevent 401 authentication errors.
- On macOS Tahoe (26), helper_connected is false due to a dylib crash; an AppleScript fallback is used but outbound messages lack the isFromMe flag.
- The missing isFromMe flag causes a self-loop echo bug where Hermes replies to its own outbound messages indefinitely.
- The webhook host (BLUEBUBBLES_WEBHOOK_HOST) must be a LAN IPv4 address; localhost resolves to IPv6 ::1 causing dispatch failures.
- Gateway restarts (hermes gateway restart) must be executed in Terminal.app, not from within the chat interface.

## Concepts
- iMessage bridge
- Webhook configuration
- IPv4 vs IPv6 resolution
- URL encoding
- Self-loop echo bug
- macOS Tahoe limitations

## Files
- `~/.hermes/.env`

_Importance: 7 · Confidence: 1_
