---
type: file_edit
title: MCP Troubleshooting Guide
description: Quick reference for MCP server connection failures and SDK compatibility issues.
resource: agentmemory://observation/obs_msrezlin_2fa707a0e109
tags: ["React hooks", "MCP", "sdk compatibility fixes", "file_edit"]
timestamp: 2026-08-13T11:07:57.739148+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 7
confidence: 0.9
---
# Summary

This guide describes common issues with connecting to MCP servers using the SDK, including how to debug errors and improve performance.

## Facts
- MACP SDK versions 1.12.x to 1.23.x have a deprecated HTTP client that doesn't support SSL verification parameters.
- MCP servers can slow Hermes startup and tool selection when enabled.

## Concepts
- React hooks
- MCP
- sdk compatibility fixes

## Files
- `/path/to/mcp-troubleshooting-guide.md`

_Importance: 7 · Confidence: 0.9_
