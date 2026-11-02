---
type: file_edit
title: skill_view: native-mcp client
description: Connecting to MCP servers and making tools available
resource: agentmemory://observation/obs_mvxn2a08_cfed765dd929
tags: ["MCP client", "file_edit"]
timestamp: 2026-11-01T09:39:43.779067+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 6
confidence: 0.9
---
# Summary

The skill_view tool connects to MCP servers at startup, discovers their tools, and makes them available as first-class tools. This allows users to use MCP tools directly within the agent. The MCP client is used to connect to servers, discover available tools, and register them with the agent.

## Facts
- MCP client connects to servers at startup, discovers tools, and makes them available as first-class tools
- Tools are registered with the prefix `mcp_time_*` and injected into platform toolsets

## Concepts
- MCP client

## Files
- `references/native-mcp.md`

_Importance: 6 · Confidence: 0.9_
