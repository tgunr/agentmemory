---
type: CommandRun
title: Nextcloud DB Query
description: executed an sqlite query on a remote server
resource: agentmemory://observation/obs_mvxs8sh8_c816ea70cbff
tags: ["DB migration", "commandrun"]
timestamp: 2026-11-01T12:04:45.736857+00:00
source: agentmemory
session_id: local-6015392bac2447fba91c08dcc2b00d0cecfd07ce6940bf233580153a9dd37671
importance: 5
confidence: 1
---
# Summary

The nextcloud database was queried for user settings, and the output was piped to the head command to display the first 20 lines of output.

## Facts
- ssh command with timeout set to 15 seconds
- grep commands to extract database credentials
- mysql query to select user_id, config_key, and config_value from oc_preferences
- head command to show the first 20 lines of output

## Concepts
- DB migration

## Files
- `config/config.php`

_Importance: 5 · Confidence: 1_
