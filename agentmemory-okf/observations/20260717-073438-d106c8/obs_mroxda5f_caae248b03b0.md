---
type: CommandRun
title: Explore agentmemory plugin structure and config
description: Inspecting hooks directory and plugin.json manifests
resource: agentmemory://observation/obs_mroxda5f_caae248b03b0
tags: ["AI agent plugins", "MCP tools", "hook configurations", "persistent memory", "plugin manifests", "commandrun"]
timestamp: 2026-07-17T12:39:28.404997+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

The agent explored the agentmemory plugin directory to understand its structure and configuration files. It revealed separate hook configurations for different AI platforms (Codex, Copilot, Claude) and detailed the plugin's capabilities including 53 MCP tools and varying skill counts across manifests.

## Facts
- Path explored: /Volumes/AI/agentmemory/plugin
- Hooks directory contains hooks.codex.json, hooks.copilot.json, and hooks.json
- plugin.json defines version 0.9.27 with 12 hooks, 53 MCP tools, 15 skills
- .claude-plugin/plugin.json defines version 0.9.27 with 8 skills
- Plugin provides persistent memory for AI coding agents via LLM compression
- Author is Rohit Ghumare, licensed under Apache-2.0
- plugin.json references hooks/hooks.copilot.json and .mcp.copilot.json

## Concepts
- AI agent plugins
- MCP tools
- hook configurations
- persistent memory
- plugin manifests

## Files
- `/Volumes/AI/agentmemory/plugin/hooks/hooks.codex.json`
- `/Volumes/AI/agentmemory/plugin/hooks/hooks.copilot.json`
- `/Volumes/AI/agentmemory/plugin/hooks/hooks.json`
- `/Volumes/AI/agentmemory/plugin/plugin.json`
- `/Volumes/AI/agentmemory/plugin/.claude-plugin/plugin.json`

_Importance: 4 · Confidence: 1_
