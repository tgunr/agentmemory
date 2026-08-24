---
type: FileRead
title: Read Hermes configuration file with MCP server and platform toolset settings
description: Config file contains MCP servers and platform-specific tool configurations
resource: agentmemory://observation/obs_mrqcfyzr_2a9a9799ab4f
tags: ["MCP server configuration", "platform toolsets", "Hermes config", "fileread"]
timestamp: 2026-07-18T12:29:14.338632+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Read a portion of the Hermes configuration file showing MCP server definitions and platform-specific toolset mappings. The configuration includes enabled servers for agentmemory and comfyui with specific command paths and environment variables, plus tool assignments for various messaging platforms like Discord and Slack.

## Facts
- Read /Users/davec/.hermes/config.yaml with offset 655-774 of 879 lines
- MCP servers configured: agentmemory, comfyui, mcp-router (all enabled)
- Platform toolsets defined for CLI, Discord, Google Chat, HomeAssistant, QQBot, Signal, Slack, Teams, Telegram
- agentmemory server uses wrapper script at /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
- mcp-router uses npx with @mcp_router/cli@latest and redacted MCPR_* environment variables

## Concepts
- MCP server configuration
- platform toolsets
- Hermes config

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`

_Importance: 5 · Confidence: 1_
