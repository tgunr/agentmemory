---
type: file_edit
title: MCP SDK stdio subprocess stderr redirection
description: Redirecting MCP server stdout to shared log file and preventing TUI corruption
resource: agentmemory://observation/obs_msufdsj6_09c020681d6b
tags: ["MCP SDK stdio subprocess redirection", "Threading mechanics with asyncio's subprocess machinery", "file_edit"]
timestamp: 2026-08-15T13:42:18.540157+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 5
confidence: 1
---
# Summary

The description explains how to avoid display corruption and hang sessions by redirecting MCP server stdout into a shared log file.

## Facts
- The MCP SDK's ``stdio_client(server, errlog=sys.stderr)`` defaults the subprocess stderr stream to the parent process's real stderr.
- The MCP server writes directly onto the terminal while prompt_toolkit / Rich is rendering the TUI.
- The MCP SDK redirects every stdio MCP subprocess's stderr into a shared per-profile log file (~/.hermes/logs/mcp-stderr.log).

## Concepts
- MCP SDK stdio subprocess redirection
- Threading mechanics with asyncio's subprocess machinery

_Importance: 5 · Confidence: 1_
