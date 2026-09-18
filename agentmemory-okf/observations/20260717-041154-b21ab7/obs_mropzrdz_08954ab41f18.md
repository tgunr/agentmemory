---
type: CommandRun
title: Diagnostic check of agentmemory processes, launchd, and DB files
description: System state inspection for agentmemory service debugging
resource: agentmemory://observation/obs_mropzrdz_08954ab41f18
tags: ["macOS process management", "launchd service configuration", "MCP stdio watchdog pattern", "agentmemory architecture", "BSD vs GNU coreutils incompatibility", "commandrun"]
timestamp: 2026-07-17T09:13:00.259747+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

A diagnostic command was run to inspect the running state of the agentmemory service ecosystem. Multiple processes were found active including the main node service, iii indexer, several MCP server instances with watchdog wrappers, and TypeScript language servers. The database modification time check failed due to GNU/BSD ls incompatibility on macOS.

## Facts
- Main agentmemory process running: `node dist/index.mjs` (PID 61660, started 4:00AM)
- iii process running with config at /Volumes/AI/agentmemory/iii-config.yaml (PID 61657)
- Multiple agentmemory-mcp instances running (PIDs: 90492, 22924, 21746, 16991, 6974)
- mcp_stdio_watchdog.py processes managing MCP stdio connections via agentmemory-wrapper.sh
- TypeScript server processes (tsserver.js, typingsInstaller.js) active for /Volumes/AI/agentmemory project
- LaunchAgent plists found: com.github.agentmemory.plist and .bak in ~/Library/LaunchAgents/
- DB paths checked: /Users/davec/data/agentmemory/state_store.db, /Users/davec/data/agentmemory/data/state_store.db/state.db, /Users/davec/data/agentmemory/agentmemory.db
- ls --time-style failed: macOS BSD ls does not support GNU --time-style flag

## Concepts
- macOS process management
- launchd service configuration
- MCP stdio watchdog pattern
- agentmemory architecture
- BSD vs GNU coreutils incompatibility

## Files
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist`
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist.bak`
- `/Volumes/AI/agentmemory/iii-config.yaml`
- `/Users/davec/data/agentmemory/state_store.db`
- `/Users/davec/data/agentmemory/data/state_store.db/state.db`
- `/Users/davec/data/agentmemory/agentmemory.db`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`

_Importance: 4 · Confidence: 1_
