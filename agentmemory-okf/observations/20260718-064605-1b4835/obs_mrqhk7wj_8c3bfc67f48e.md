---
type: FileRead
title: Viewed BlueBubbles diagnostics script from macos-integrations skill
description: Bash script for checking BlueBubbles server and Hermes gateway health
resource: agentmemory://observation/obs_mrqhk7wj_8c3bfc67f48e
tags: ["bash scripting", "health checks", "SQLite queries", "curl API calls", "configuration validation", "fileread"]
timestamp: 2026-07-18T14:52:30.593179+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Read a bash diagnostic script that probes BlueBubbles server health and validates configuration consistency. It checks API connectivity, password synchronization between environment and database, and gateway listener status. This is a maintenance utility for monitoring the BlueBubbles-iMessage integration stack.

## Facts
- Script path: scripts/bluebubbles-diag.sh
- Outputs BlueBubbles server ping and server/info status
- Checks password drift between .env and config.db using SQLite
- Verifies Hermes gateway is listening on TCP port 8645
- Sources environment from ~/.hermes/.env if present
- Uses curl for API calls and python3 for JSON parsing

## Concepts
- bash scripting
- health checks
- SQLite queries
- curl API calls
- configuration validation

## Files
- `scripts/bluebubbles-diag.sh`

_Importance: 5 · Confidence: 1_
