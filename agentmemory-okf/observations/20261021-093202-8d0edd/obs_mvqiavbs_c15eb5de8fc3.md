---
type: CommandRun
title: Davec activates personal MCP connection and tests auth end-to-end
description: Runs a personal script using the Hermes profile
resource: agentmemory://observation/obs_mvqiavbs_c15eb5de8fc3
tags: ["authToken management", "commandrun"]
timestamp: 2026-10-27T09:52:03.348629+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 6
confidence: 1
---
# Summary

Davec activates their personal MCP connection and tests the auth end-to-end by initializing an app, retrieving a token, and running some tools. A new token is minted and deleted to test revoke functionality.

## Facts
- /usr/bin/php8.4 occ user:auth-tokens:add --name=mcp-e2e davec
- /usr/bin/php8.4 occ user:auth-tokens:list davec
- /usr/bin/php8.4 occ user:auth-tokens:list davec 2>/dev/null | grep -oE '[A-Za-z0-9]{30,}'

## Concepts
- authToken management

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/mcp_e2e.sh`

_Importance: 6 · Confidence: 1_
