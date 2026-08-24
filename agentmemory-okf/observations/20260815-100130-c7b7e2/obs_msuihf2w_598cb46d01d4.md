---
type: file_edit
title: Tool Command on Live Servers Registry Check
description: 
resource: agentmemory://observation/obs_msuihf2w_598cb46d01d4
tags: ["status query", "file_edit"]
timestamp: 2026-08-15T15:09:06.580315+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 6
confidence: 1
---
# Summary

The tool executed in terminal and checked the state of live servers registry by querying `get_mcp_status`. The output contained details on MCP connections.

## Facts
- Tool: terminal
- Input Command: echo \"=== does get_mcp_status reflect the LIVE _servers registry? read its body ===\"; sed -n '4300,4420p' /Users/davec/.hermes/hermes-agent/tools/mcp_tool.py 2>/dev/null | grep -nE \"def get_mcp_status|connected|_servers|status|return|name\" | head -40
- Output: {"output": "=== does get_mcp_status reflect the LIVE _servers registry? read its body ===\n6:         a non-error JSON payload. Otherwise return the ``needs_reauth\\n12:        server_name: Name of the MCP server that raised.\...}", "exit_code": 0, "error": null}

## Concepts
- status query

_Importance: 6 · Confidence: 1_
