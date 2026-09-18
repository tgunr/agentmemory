---
type: CommandRun
title: Configure BlueBubbles webhook host in .env
description: Appends IPv4 to bind webhook, bypassing localhost IPv6 resolution issues
resource: agentmemory://observation/obs_mrqh2e39_ddb1c9753ff9
tags: ["Environment variable configuration", "Webhook network binding", "IPv4 vs IPv6 localhost resolution", "Idempotent scripting", "commandrun"]
timestamp: 2026-07-18T14:38:38.803201+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The agent configured the BlueBubbles webhook host in ~/.hermes/.env to bypass an issue where BlueBubbles resolves localhost to the IPv6 address ::1. An idempotent Python script appended the hardcoded IPv4 192.168.88.7 to the environment file, although the actual detected LAN IP on en0 was 10.1.2.7.

## Facts
- Target file: ~/.hermes/.env
- Appended variable: BLUEBUBBLES_WEBHOOK_HOST=192.168.88.7
- Actual detected LAN IPv4 on en0 was 10.1.2.7, but 192.168.88.7 was hardcoded in the Python script
- Change addresses issue where BlueBubbles resolves localhost to IPv6 (::1)
- Script used idempotent check before appending

## Concepts
- Environment variable configuration
- Webhook network binding
- IPv4 vs IPv6 localhost resolution
- Idempotent scripting

## Files
- `~/.hermes/.env`

_Importance: 5 · Confidence: 1_
