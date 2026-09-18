---
type: CommandRun
title: Gateway health check: BlueBubbles webhook and tunnel status
description: Verifying port bindings, connectivity, and webhook registration for Hermes gateway
resource: agentmemory://observation/obs_mrqhdzwc_1273bade57ad
tags: ["Hermes gateway", "BlueBubbles webhook", "Port binding", "Cloudflare tunnel", "Telegram bot", "Kanban dispatcher", "commandrun"]
timestamp: 2026-07-18T14:47:40.278981+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Diagnostic command executed to verify Hermes gateway status, specifically BlueBubbles webhook registration and network connectivity. Results show the gateway is running and bound to a local LAN IP for webhooks, with successful tunnel connectivity but failed direct localhost access to the BlueBubbles server.

## Facts
- Gateway webhook listener bound to 192.168.88.7:8645
- BlueBubbles connected to localhost:1234
- Webhook registered with server at 192.168.88.7:8645/bluebubbles-webhook
- localhost:1234 connectivity failed (HTTP 000)
- Tunnel URL connectivity successful (HTTP 200)
- Telegram platform registered 60 commands
- Kanban dispatcher embedded in gateway with singleton lock
- Email platform warning: Non-bytes IMAP payload skipped for UID 357748

## Concepts
- Hermes gateway
- BlueBubbles webhook
- Port binding
- Cloudflare tunnel
- Telegram bot
- Kanban dispatcher

## Files
- `~/.hermes/logs/gateway.log`
- `/Users/davec/.hermes/kanban/.dispatcher.lock`

_Importance: 6 · Confidence: 1_
