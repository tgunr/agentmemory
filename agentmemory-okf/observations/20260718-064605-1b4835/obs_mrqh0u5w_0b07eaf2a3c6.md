---
type: FileRead
title: Read BlueBubbles webhook registration and server setup
description: aiohttp webhook server and BlueBubbles API registration logic
resource: agentmemory://observation/obs_mrqh0u5w_0b07eaf2a3c6
tags: ["aiohttp webhook server", "BlueBubbles API integration", "Webhook authentication via query params", "Crash resilience / idempotent registration", "fileread"]
timestamp: 2026-07-18T14:37:26.321142+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The agent read the BlueBubbles platform integration file to understand how the webhook server is set up and registered. It reveals that the webhook URL embeds the password as a query parameter for authentication and includes logic to prevent duplicate registrations after crashes.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Uses aiohttp (web.AppRunner, web.TCPSite) to host the webhook receiver
- Webhook URL embeds password as a query param because BlueBubbles API lacks custom header support for webhooks
- Implements crash resilience by checking for existing webhook registrations via /api/v1/webhook to avoid duplicates
- Disconnect logic unregisters the webhook and cleans up the aiohttp runner

## Concepts
- aiohttp webhook server
- BlueBubbles API integration
- Webhook authentication via query params
- Crash resilience / idempotent registration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
