---
type: FileRead
title: View bluebubbles-gateway skill documentation
description: Reference documentation for BlueBubbles iMessage bridge setup and troubleshooting with Hermes gateway
resource: agentmemory://observation/obs_mrrnksso_c826fbf5904f
tags: ["iMessage bridge", "webhook configuration", "URL encoding", "IPv4/IPv6 networking", "environment variables", "AppleScript fallback", "self-loop echo bug", "isFromMe flag", "fileread"]
timestamp: 2026-07-19T10:28:41.538060+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

This skill documents the setup and troubleshooting of BlueBubbles as an iMessage bridge for the Hermes gateway. It covers critical environment constraints including Tahoe's helper_connected=false limitation, the self-loop echo bug caused by missing isFromMe flags, and IPv4/IPv6 webhook binding issues. The documentation provides a setup checklist and identifies common failure modes.

## Facts
- BlueBubbles is a macOS iMessage bridge that Hermes gateway communicates with via HTTP API at http://localhost:1234
- Password has trailing `!` that must be URL-encoded as `%21` in query strings to avoid 401 errors
- On Tahoe (macOS 26), `helper_connected` is `false` due to community dylib crash (BB#776), but basic send/receive still works via AppleScript fallback
- Outbound messages on Tahoe are NOT marked `isFromMe`, causing self-loop echo bug where gateway receives its own replies
- Webhook listener host must be Mac's LAN IPv4 (e.g., 192.168.88.7), NOT localhost or 0.0.0.0
- localhost resolves to ::1 (IPv6) but gateway binds IPv4 only, causing "Failed to dispatch" errors
- Required environment variables in ~/.hermes/.env: BLUEBUBBLES_SERVER_URL, BLUEBUBBLES_PASSWORD, BLUEBUBBLES_WEBHOOK_HOST, BLUEBUBBLES_ALLOW_ALL_USERS
- Gateway restart must be run in Terminal.app, not in-chat, to properly register webhooks

## Concepts
- iMessage bridge
- webhook configuration
- URL encoding
- IPv4/IPv6 networking
- environment variables
- AppleScript fallback
- self-loop echo bug
- isFromMe flag
- helper_connected limitation

## Files
- `~/.hermes/.env`

_Importance: 5 · Confidence: 1_
