---
type: FileRead
title: MCP Troubleshooting Guide
description: Quick reference for MCP server connection failures and SDK compatibility issues.
resource: agentmemory://observation/obs_msufsxgu_722b0a551258
tags: ["mcp_server_git", "MCP SDK version compatibility", "fileread"]
timestamp: 2026-08-15T13:54:04.764224+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 8
confidence: 0.9
---
# Summary

Quick reference for troubleshooting connectivity failures and compatibility issues with MCP servers, specifically focusing on SDK upgrades and version skew issues involving older versions of mcp-server-* builds.

## Facts
- a deprecated HTTP client does not support SSL verification parameters, fix upgrade MCP SDK to 1.24.0+
- The `mcp` SDK pulled transitively by `uvx`/`npx` is newer than the server package expects.

## Concepts
- mcp_server_git
- MCP SDK version compatibility

## Files
- `/home/agent/mcp-troubleshooting.md`

_Importance: 8 · Confidence: 0.9_
