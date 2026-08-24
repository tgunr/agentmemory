---
type: CommandRun
title: Explore agentmemory and kilo hooks directory structure
description: Mapping shell scripts and plugin architecture for agent memory system
resource: agentmemory://observation/obs_mroxcdl1_f1404d0df182
tags: ["agent memory hooks", "shell session management", "MCP plugin configuration", "kilocode integration", "commandrun"]
timestamp: 2026-07-17T12:38:46.204782+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Command explored two key directories in the agent memory system. Found shell-based session management scripts in agentmemory-kilo-hooks and a structured plugin system with MCP configurations in agentmemory/plugin. The kilo hooks search revealed no custom hook implementations, only Node.js type definitions in dependencies.

## Facts
- /Volumes/AI/Servers/agentmemory-kilo-hooks contains shell scripts: agentmemory-wrapper.sh, agentmemory-standalone.sh, agentmemory-stop.sh, session-start.sh, session-end.sh, cleanup-stale-sessions.sh
- /Volumes/AI/agentmemory/plugin contains plugin.json, .mcp.json, .mcp.copilot.json, and directories: hooks, scripts, skills, opencode, .claude-plugin, .codex-plugin
- Search for kilo hooks .ts/.json files returned only node_modules type definitions (async_hooks.d.ts, perf_hooks.d.ts) from kilocode project dependencies
- All files owned by user davec with recent modifications on Jul 16-17, 2026

## Concepts
- agent memory hooks
- shell session management
- MCP plugin configuration
- kilocode integration

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks`
- `/Volumes/AI/agentmemory/plugin`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-end.sh`
- `/Volumes/AI/agentmemory/plugin/plugin.json`
- `/Volumes/AI/agentmemory/plugin/.mcp.json`

_Importance: 3 · Confidence: 1_
