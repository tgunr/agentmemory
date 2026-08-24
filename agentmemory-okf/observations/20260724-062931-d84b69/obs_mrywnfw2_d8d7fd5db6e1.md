---
type: file_edit
title: Ai Coding Agents Integration with Xcode 27
description: 
resource: agentmemory://observation/obs_mrywnfw2_d8d7fd5db6e1
tags: ["MCP bridge", "file_edit"]
timestamp: 2026-07-24T12:17:04.548445+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 8
confidence: 0.9
---
# Summary

Firms utilize external AI coding agents via Xcode 27's Model Context Protocol bridge. Enable the Xcode MCP bridge and register your project for tool discovery to connect an IDE (e.g., Kilo Code CLI) with a third-party agent «in» / «with» Xcode 27.

## Facts
- Xcode 27 ships `xcrun mcpbridge` for external agent usage.
- The supported path for tools like Kilo/Claude/Codex/Cursor is the **external-agent MCP bridge**: launch the agent outside Xcode, point it at Xcode's MCP server.

## Concepts
- MCP bridge

_Importance: 8 · Confidence: 0.9_
