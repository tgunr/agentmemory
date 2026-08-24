---
type: file_write
title: MCP Connection Closed - Trriage Recipe
description: Loading in skill_manage with a reference to uncatalogued file
resource: agentmemory://observation/obs_msrf1vdx_eca8deb16e00
tags: ["Uncatalogued files in skills documents", "MCP Server Configuration Issues", "file_write"]
timestamp: 2026-08-13T11:09:43.839078+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 0.9
---
# Summary

The tool skill_manage tried to write a file that caused issues because it had not finished loading a required reference document.

## Facts
- Action is write and not read to prevent background curator from updating the skills cache
- Current content of references/mcp-connection-closed-triage.md has specific format for mcp_servers entries

## Concepts
- Uncatalogued files in skills documents
- MCP Server Configuration Issues

## Files
- `references/mcp-connection-closed-triage.md`

_Importance: 8 · Confidence: 0.9_
