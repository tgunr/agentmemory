---
type: FileRead
title: mcp_router process output
description: Process started with PID 36508 and native servers check
resource: agentmemory://observation/obs_msq36dxv_9d538bbff522
tags: ["mcp_router process", "MCP Stdio Watchdog", "fileread"]
timestamp: 2026-08-12T12:49:32.944422+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 4
confidence: 0.9
---
# Summary

The mcp_router process was started successfully, native servers are up, and watchdogs seem to be running correctly. This is a routine outcome.

## Facts
- Process PIDs: 36508, 37202
- MCP Stdio Watchdog command: /Users/davec/.hermes/hermes-agent/venv/bin/python /Users/davec/.hermes/hermes-agent/tools/mcp_stdio_watchdog.py --ppid 37066 -- /Users/davec/.hermes/node/bin/npx -y @mcp_router/cli@latest connect

## Concepts
- mcp_router process
- MCP Stdio Watchdog

_Importance: 4 · Confidence: 0.9_
