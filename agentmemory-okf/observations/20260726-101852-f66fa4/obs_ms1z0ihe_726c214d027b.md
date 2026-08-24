---
type: FileRead
title: xcode-ai-agents connecting to Xcode 27 MVP
description: Connecting external AI coding agents to Xcode 27 MCP bridge for tool usage and project editing
resource: agentmemory://observation/obs_ms1z0ihe_726c214d027b
tags: ["Apple's Model Context Protocol (MCP) documentation", "Xcode 27 bridge to external agents", "fileread"]
timestamp: 2026-07-26T15:46:32.206612+00:00
source: agentmemory
session_id: 20260726_101852_f66fa4
importance: 6
confidence: 0.9
---
# Summary

The post_tool_call_hook observed xcode-ai-agents securely connecting to Xcode 27 using its MCP bridge, enabling external tool usage and project editing capabilities. This connection process involves user registration and verification of external agent permissions within the Intelligent settings.

## Facts
- Xcode 27 ships xcrun mcpbridge, a stdio MCP server exposing Xcode's project/build tools.
- User installs Kilo Code CLI (`@kilocode/cli`) and registers it with the `xcrun mcpbridge`.

## Concepts
- Apple's Model Context Protocol (MCP) documentation
- Xcode 27 bridge to external agents

_Importance: 6 · Confidence: 0.9_
