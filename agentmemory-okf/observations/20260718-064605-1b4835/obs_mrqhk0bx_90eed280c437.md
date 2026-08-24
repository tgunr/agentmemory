---
type: FileRead
title: BlueBubbles-Hermes Gateway Integration Reference
description: iMessage as Hermes prompt interface via webhook
resource: agentmemory://observation/obs_mrqhk0bx_90eed280c437
tags: ["BlueBubbles", "Hermes AI", "iMessage integration", "webhook", "LaunchAgent", "macOS automation", "device pairing", "fileread"]
timestamp: 2026-07-18T14:52:20.776037+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent read the BlueBubbles-Hermes gateway reference documentation, which describes how to integrate iMessage as a prompt interface for the Hermes AI assistant. The gateway uses webhooks for instant inbound message delivery and requires a pairing code for authorization.

## Facts
- File: references/bluebubbles-gateway.md (skill: macos-integrations)
- BlueBubbles server runs on :1234, gateway webhook on :8645 (default), path /bluebubbles-webhook
- Env vars: BLUEBUBBLES_SERVER_URL, BLUEBUBBLES_PASSWORD, BLUEBUBBLES_ALLOW_ALL_USERS, BLUEBUBBLES_ALLOWED_USERS
- Gateway command: hermes gateway run (registers webhook automatically, no manual BlueBubbles config)
- Pairing flow: hermes pairing approve bluebubbles &lt;CODE&gt;, hermes pairing list
- Inbound flow: iMessage → Messages.app → BlueBubbles Server → webhook → Hermes
- Outbound flow: Hermes → BlueBubbles REST API → Messages.app → iMessage (AppleScript path)
- Diagnostic script: scripts/bluebubbles-diag.sh checks server health, password drift, port 8645
- Always-on via LaunchAgent: references/macos-launchd.md
- Optional vars: BLUEBUBBLES_HOME_CHANNEL, BLUEBUBBLES_REQUIRE_MENTION, BLUEBUBBLES_MENTION_PATTERNS

## Concepts
- BlueBubbles
- Hermes AI
- iMessage integration
- webhook
- LaunchAgent
- macOS automation
- device pairing

## Files
- `references/bluebubbles-gateway.md`

_Importance: 3 · Confidence: 1_
