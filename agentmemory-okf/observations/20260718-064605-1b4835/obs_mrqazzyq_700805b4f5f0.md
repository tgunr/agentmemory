---
type: CommandRun
title: SQLite config database inspection
description: Queried BlueBubbles server configuration database to examine settings and table sizes
resource: agentmemory://observation/obs_mrqazzyq_700805b4f5f0
tags: ["SQLite database", "server configuration", "BlueBubbles", "commandrun"]
timestamp: 2026-07-18T11:48:49.399540+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Executed SQLite queries against the BlueBubbles server configuration database to examine current settings and table row counts, revealing the server's network configuration and feature flags.

## Facts
- Database path: ~/Library/Application Support/bluebubbles-server/config.db
- Config table has 37 rows total
- Alert table has 15 rows, all other tables are empty except migrations with 2 rows
- Server configured with socket_port=1234 and server_address=http://10.1.2.7:1234
- Private API enabled but facial recognition calling disabled

## Concepts
- SQLite database
- server configuration
- BlueBubbles

## Files
- `config.db`

_Importance: 4 · Confidence: 1_
