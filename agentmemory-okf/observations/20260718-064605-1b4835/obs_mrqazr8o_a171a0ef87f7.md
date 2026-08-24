---
type: CommandRun
title: Inspect BlueBubbles SQLite database structure and config
description: Checking tables and configuration keys in config.db
resource: agentmemory://observation/obs_mrqazr8o_a171a0ef87f7
tags: ["SQLite database inspection", "BlueBubbles Server", "configuration storage", "commandrun"]
timestamp: 2026-07-18T11:48:38.181155+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Inspected the BlueBubbles Server SQLite database to understand its schema and locate server password or configuration settings. The database contains 9 tables, but the config table appears to be empty or does not contain the expected keys.

## Facts
- Database path: ~/Library/Application Support/bluebubbles-server/config.db
- Tables found: alert, config, contact, contact_address, device, migrations, queue, scheduled_message, webhook
- Queries for config keys containing 'password' or 'server' returned no results
- Query for all config keys returned no results, indicating the config table is empty or has a different schema

## Concepts
- SQLite database inspection
- BlueBubbles Server
- configuration storage

## Files
- `~/Library/Application Support/bluebubbles-server/config.db`

_Importance: 4 · Confidence: 1_
