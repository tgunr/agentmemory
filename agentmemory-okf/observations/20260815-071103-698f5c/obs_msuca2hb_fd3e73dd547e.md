---
type: file_edit
title: The command used to edit files and gather configuration information
description: sourced from the Hermes agent's TUI interface
resource: agentmemory://observation/obs_msuca2hb_fd3e73dd547e
tags: ["MCP servers", "file_edit"]
timestamp: 2026-08-15T12:15:25.963217+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 7
confidence: 1
---
# Summary

The post-tool-call hook executed a command in the terminal to gather configuration data from the Hermes agent's TUI interface, specifically looking for patterns containing "connect", "count", or "status" and gathering files related to MCP servers.

## Facts
- Tool used: terminal
- Command executed: echo "=== where the TUI MCP banner count comes from (source) ==="; grep -rn -i "mcp" ...
- Files searched for patterns containing "connect", "count", or "status": ~/.hermes/hermes-agent/ui-tui/src/lib/*.ts & ~/.hermes/hermes-agent/ui-tui/src/app/*.ts

## Concepts
- MCP servers

## Files
- `~/.hermes/hermes-agent/ui-tui/src/lib/*.ts`
- `~/.hermes/hermes-agent/ui-tui/src/app/*.ts`

_Importance: 7 · Confidence: 1_
