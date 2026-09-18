---
type: CommandRun
title: BlueBubbles service endpoint and webhook diagnostics
description: Checking BB listening addresses and tunnel webhook configuration
resource: agentmemory://observation/obs_mrqhfjtx_f7d83f17131a
tags: ["BlueBubbles server", "Cloudflare tunnel", "webhook configuration", "service endpoint discovery", "API diagnostics", "commandrun"]
timestamp: 2026-07-18T14:48:52.769882+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Diagnostic command executed to verify BlueBubbles service availability across multiple endpoints and inspect tunnel configuration. All local endpoints are responsive (HTTP 200), but server identity fields are mostly null via the tunnel. One webhook is registered pointing to the local BlueBubbles instance on port 8645.

## Facts
- BlueBubbles service responds on 127.0.0.1:1234, 192.168.88.7:1234, and localhost:1234 (all HTTP 200)
- Cloudflare tunnel URL: https://significantly-affiliate-albert-mixed.trycloudflare.com
- Server identity via tunnel returns mostly None values (server_name, mac, private_api, helper, version)
- One webhook registered pointing to http://192.168.88.7:8645/bluebubbles-webhook
- Webhook includes password parameter in URL

## Concepts
- BlueBubbles server
- Cloudflare tunnel
- webhook configuration
- service endpoint discovery
- API diagnostics

_Importance: 4 · Confidence: 1_
