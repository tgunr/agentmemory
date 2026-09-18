---
type: file_edit
title: MCP Troubleshooting Guide
description: Quick reference for MCP server connection failures and SDK compatibility issues.
resource: agentmemory://observation/obs_msuiw0wb_bc4acf3532b4
tags: ["mcp compatibility", "file_edit"]
timestamp: 2026-08-15T15:20:28.029767+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 7
confidence: 0.9
---
# Summary

fix: upgrade mcp sdk to 1.24.0+ or use workaround for deprecated api, remove ssl_verify and client_cert config

## Facts
- MCP SDK versions 1.12.x to 1.23.x have a deprecated HTTP client that doesn't support SSL verification parameters.
- The version that still exports `ToolAnnotations` + `Server.list_tools` is `mcp<=1.6

## Concepts
- mcp compatibility

_Importance: 7 · Confidence: 0.9_
