---
type: file_edit
title: MCP Non-Volume Failures - SDK Skew & HuggingFace Recipe Fixes
description: 
resource: agentmemory://observation/obs_msrg2k2v_68e2a4498d26
tags: ["MCP server annotations", "HuggingFace token recipes", "file_edit"]
timestamp: 2026-08-13T11:38:15.458870+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 6
confidence: 0.9
---
# Summary

The tool skill manage performed a file edit operation. The changes made were related to fixes for non-volume failures in the mcp SDK, including error handling and recipe updates. Also fixed issues with HuggingFace token recipes.

## Facts
- Newer `mcp` removed `Server.list_tools()` and renamed `ToolAnnotations`→`Annotations`.`
- Older `mcp-server-*` builds (and `@latest` npx servers) then fail on import.

## Concepts
- MCP server annotations
- HuggingFace token recipes

## Files
- `/Users/davec/.hermes/skills/mcp/mcp-troubleshooting/references/mcp-non-volume-failures.md`

_Importance: 6 · Confidence: 0.9_
