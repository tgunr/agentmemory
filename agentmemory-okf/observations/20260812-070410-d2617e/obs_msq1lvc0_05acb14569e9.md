---
type: FileRead
title: MCP Router Process Start
description: No HERMES config matches found
resource: agentmemory://observation/obs_msq1lvc0_05acb14569e9
tags: ["command pipeline and syntax", "Grep pattern matching", "fileread"]
timestamp: 2026-08-12T12:05:36.092878+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 5
confidence: 1
---
# Summary

The MCP Router process has started with a unique command. While some HERMES config values matched the search pattern, others did not.

## Facts
- TotalCommand="zsh -c 'echo \"=== HERMES CONFIG (mcp sections) ===\"; grep -n -A30 -E \"^(mcp_servers|mcp_router|mcpRouter|plugins):\" ~/.hermes/config.yaml 2>/dev/null | head -120; echo \"=== MCP ROUTER APP CONFIG ===\"; ls -la \"${HOME}/.config/mcp-router\" 2>/dev/null; find \"${HOME}/.config/mcp-router\" -maxdepth 2 -name '*.yaml' -o -maxdepth 2 -name '*.json' 2>/dev/null | head; echo DONE_MARKER'"
- ProcessStarted=true, PID=25214, shell=/bin/zsh
- InitialOutput="\nzsh:1: no matches found..."

## Concepts
- command pipeline and syntax
- Grep pattern matching

## Files
- `/home/user/.config/mcp-router/mcp_routes.yaml`

_Importance: 5 · Confidence: 1_
