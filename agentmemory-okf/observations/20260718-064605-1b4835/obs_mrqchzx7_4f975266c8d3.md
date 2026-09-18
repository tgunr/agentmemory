---
type: CommandRun
title: Debug BlueBubbles gateway configuration and status
description: Investigating why BlueBubbles integration may not be working
resource: agentmemory://observation/obs_mrqchzx7_4f975266c8d3
tags: ["BlueBubbles integration", "gateway configuration", "hermes webhook", "commandrun"]
timestamp: 2026-07-18T12:30:48.855051+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Investigated BlueBubbles integration configuration: .env has server URL and password set, and gateway is enabled in config.yaml, but the gateway server_url fields are empty strings in the config while the process is not running and webhook port 8645 shows no listeners, indicating incomplete configuration or failed service startup.

## Facts
- BLUEBUBBLES_SERVER_URL=http://localhost:1234 is defined in .env
- BLUEBUBBLES_PASSWORD is set in .env (credentials redacted)
- use_gateway: true appears in config.yaml on lines 161, 427, 443
- gateway server_url is empty ('') in config.yaml line 702
- bluebubbles server_url is empty ('') in config.yaml line 708
- No hermes gateway process currently running
- Nothing listening on webhook port 8645

## Concepts
- BlueBubbles integration
- gateway configuration
- hermes webhook

## Files
- `~/.hermes/.env`
- `~/.hermes/config.yaml`

_Importance: 7 · Confidence: 1_
