---
type: file_edit
title: Extracting MCP list from Hermes config
description: Sandbox tool call event data
resource: agentmemory://observation/obs_msq1mrsa_fca6b9ea9f67
tags: ["mcp router", "file_edit"]
timestamp: 2026-08-12T12:06:18.150177+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 4
confidence: 0.9
---
# Summary

The tool started the mcp_router and executed a grep command to extract an MCP list from the Hermes config file. The list is now available as part of the output.

## Facts
- mcp_router command execution started successfully
- Shell process for mcp_router created with PID 25525

## Concepts
- mcp router

## Files
- `/home/$(id -un)/.hermes/config.yaml`

_Importance: 4 · Confidence: 0.9_
