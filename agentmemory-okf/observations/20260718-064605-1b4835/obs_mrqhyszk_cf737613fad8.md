---
type: FileRead
title: BlueBubbles Gateway iMessage Integration Documentation
description: Configuration and troubleshooting for Hermes Messaging Gateway with iMessage via BlueBubbles
resource: agentmemory://observation/obs_mrqhyszk_cf737613fad8
tags: ["iMessage integration", "webhook binding", "IPv4/IPv6 compatibility", "macOS networking", "Hermes gateway", "BlueBubbles server", "fileread"]
timestamp: 2026-07-18T15:03:51.101676+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Documentation describes how to configure the Hermes Messaging Gateway to receive iMessage prompts via BlueBubbles server. It details the webhook registration process, pairing flow, and a critical IPv4/IPv6 binding issue that silently breaks inbound message delivery on macOS. The fix requires setting a concrete LAN IPv4 address for the webhook host instead of localhost.

## Facts
- Gateway runs via `hermes gateway run` and listens on BLUEBUBBLES_WEBHOOK_PORT (default 8645)
- Required env vars: BLUEBUBBLES_SERVER_URL and BLUEBUBBLES_PASSWORD in ~/.hermes/.env
- Authorization via BLUEBUBBLES_ALLOW_ALL_USERS=true or BLUEBUBBLES_ALLOWED_USERS=+15551234567,you@icloud.com
- First message triggers pairing code approval via `hermes pairing approve bluebubbles &lt;CODE&gt;`
- CRITICAL IPv4/IPv6 bug: localhost resolves to ::1 (IPv6) on macOS but Hermes binds to 127.0.0.1 (IPv4)
- Fix requires setting BLUEBUBBLES_WEBHOOK_HOST to LAN IPv4 address (e.g., 192.168.88.7), NOT localhost or 0.0.0.0
- Diagnostic script available: scripts/bluebubbles-diag.sh checks server health and :8645 bind address
- Optional configs: BLUEBUBBLES_HOME_CHANNEL, BLUEBUBBLES_REQUIRE_MENTION, BLUEBUBBLES_WEBHOOK_HOST/PORT/PATH

## Concepts
- iMessage integration
- webhook binding
- IPv4/IPv6 compatibility
- macOS networking
- Hermes gateway
- BlueBubbles server

## Files
- `references/bluebubbles-gateway.md`

_Importance: 8 · Confidence: 1_
