---
type: CommandRun
title: Check BlueBubbles env vars and CLI tools status
description: Environment discovery for messaging integrations
resource: agentmemory://observation/obs_mrqax8rs_cd5ef88c4e10
tags: ["messaging CLI tools", "environment configuration", "BlueBubbles integration", "commandrun"]
timestamp: 2026-07-18T11:46:40.932922+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Checked environment configuration and CLI tool availability for BlueBubbles integration. Found server URL and password configured, imsg CLI available but no bluebubbles CLI binary found.

## Facts
- BLUEBUBBLES_SERVER_URL=http://localhost:1234 configured in ~/.hermes/.env
- BLUEBUBBLES_PASSWORD configured (value redacted)
- imsg CLI installed at /opt/homebrew/bin/imsg version 0.4.0
- bluebubbles CLI not installed

## Concepts
- messaging CLI tools
- environment configuration
- BlueBubbles integration

## Files
- `~/.hermes/.env`

_Importance: 4 · Confidence: 1_
