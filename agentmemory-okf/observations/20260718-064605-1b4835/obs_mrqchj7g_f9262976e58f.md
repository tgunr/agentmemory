---
type: discovery
title: Extracted BlueBubbles/Hermes integration docs from HTML
description: Parsed /tmp/bb_docs.html to find webhook, gateway, and env var configuration details
resource: agentmemory://observation/obs_mrqchj7g_f9262976e58f
tags: ["webhook integration", "BlueBubbles iMessage bridge", "Hermes gateway architecture", "environment variable configuration", "REST API messaging", "access control allowlist", "discovery"]
timestamp: 2026-07-18T12:30:27.193253+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Parsed the BlueBubbles integration documentation HTML to extract configuration and architecture details for the Hermes gateway. Found that Hermes uses a webhook-based (not polling) architecture on port 8645 for instant inbound message delivery, and REST API for outbound. All required environment variables, defaults, and access control options were identified.

## Facts
- Hermes integrates with Apple iMessage via BlueBubbles Server (open-source macOS bridge)
- Gateway started with: `hermes gateway run`
- Inbound: BlueBubbles sends webhook events to local listener (no polling, instant delivery)
- Outbound: Hermes sends messages via BlueBubbles REST API
- Flow: iMessage → Messages.app → BlueBubbles Server → Webhook → Hermes (inbound); Hermes → BlueBubbles REST API → Messages.app → iMessage (outbound)
- Required env vars: BLUEBUBBLES_SERVER_URL, BLUEBUBBLES_PASSWORD
- Webhook config: BLUEBUBBLES_WEBHOOK_HOST (default 127.0.0.1), BLUEBUBBLES_WEBHOOK_PORT (default 8645), BLUEBUBBLES_WEBHOOK_PATH (default /bluebubbles-webhook)
- User access control: BLUEBUBBLES_ALLOWED_USERS (comma-separated), BLUEBUBBLES_ALLOW_ALL_USERS (default false), config in ~/.hermes/.env
- Group chat: BLUEBUBBLES_REQUIRE_MENTION, BLUEBUBBLES_MENTION_PATTERNS for wake words
- BLUEBUBBLES_HOME_CHANNEL for cron delivery (phone/email)
- Media supported both directions: images, voice messages, videos, documents; inbound attachments cached locally
- Requires BlueBubbles Server v1.0.0+ with webhooks enabled

## Concepts
- webhook integration
- BlueBubbles iMessage bridge
- Hermes gateway architecture
- environment variable configuration
- REST API messaging
- access control allowlist

## Files
- `/tmp/bb_docs.html`

_Importance: 7 · Confidence: 1_
