---
type: CommandRun
title: Inspect Hermes gateway processes, ports, and env config
description: Checking for stale gateways, active processes, and webhook/allowlist configuration
resource: agentmemory://observation/obs_mrroec6d_4c2f4979d588
tags: ["Process inspection (lsof, ps)", "Environment variables", "LaunchAgent configuration", "Webhook host configuration", "Hermes gateway", "commandrun"]
timestamp: 2026-07-19T10:51:39.683144+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The user ran diagnostic commands to investigate the Hermes gateway setup, specifically checking for stale processes on port 8645. The output confirmed a single active gateway process (PID 7841) listening on the configured webhook host IP, along with its environment and allowlist settings from the .env file and LaunchAgent plist.

## Facts
- Port 8645 is listened on by PID 7841 (hermes_cli.main gateway run --replace) on IP 192.168.88.7
- Two additional hermes_cli.main serve processes are running on 127.0.0.1 with port 0 (PIDs 18684, 56014)
- ~/.hermes/.env configures BLUEBUBBLES_WEBHOOK_HOST=192.168.88.7 and BLUEBUBBLES_SERVER_URL=http://localhost:1234
- BLUEBUBBLES_ALLOW_ALL_USERS=false with specific allowed users defined in ~/.hermes/.env
- LaunchAgent plist at ~/Library/LaunchAgents/ai.hermes.gateway.plist sets VIRTUAL_ENV to the hermes-agent venv

## Concepts
- Process inspection (lsof, ps)
- Environment variables
- LaunchAgent configuration
- Webhook host configuration
- Hermes gateway

## Files
- `~/.hermes/.env`
- `~/Library/LaunchAgents/ai.hermes.gateway.plist`

_Importance: 5 · Confidence: 1_
