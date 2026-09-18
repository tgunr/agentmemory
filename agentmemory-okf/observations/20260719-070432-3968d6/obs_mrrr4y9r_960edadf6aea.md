---
type: FileRead
title: MCP Router Server Visibility Troubleshooting Guide
description: Reference for diagnosing missing servers in MCP Router UI
resource: agentmemory://observation/obs_mrrr4y9r_960edadf6aea
tags: ["MCP Router", "SQLite database troubleshooting", "Electron UI sync delay", "Process management", "iMCP integration", "fileread"]
timestamp: 2026-07-19T12:08:20.595132+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 4
confidence: 1
---
# Summary

The agent read a reference guide for troubleshooting MCP Router server visibility issues. The guide clarifies that missing servers are typically caused by UI sync delays, manual start requirements, or missing GUI dependencies rather than actual data loss in the SQLite backend.

## Facts
- MCP Router uses SQLite DB at ~/Library/Application Support/MCP Router/mcprouter.db as single source of truth
- DB schema: `servers` table with columns `name`, `auto_start`, `disabled`, `server_type`, `id`
- UI takes 5-15 seconds to populate after launch; backend DB is already populated
- Servers may need manual "Start" click in UI even if `auto_start=1` and `disabled=0` in DB
- iMCP's MCP server (`imcp-server`) requires the iMCP GUI app to be running to function properly
- MCP Router is a Chromium/Electron app where UI state syncs slowly with SQLite backend after relaunch, sleep/wake, or port changes
- Recovery steps: wait 10s, check DB via sqlite3, click Start in UI, verify processes via `ps aux | grep mcp`, restart app if needed

## Concepts
- MCP Router
- SQLite database troubleshooting
- Electron UI sync delay
- Process management
- iMCP integration

## Files
- `references/mcp-router-server-visibility.md`

_Importance: 4 · Confidence: 1_
