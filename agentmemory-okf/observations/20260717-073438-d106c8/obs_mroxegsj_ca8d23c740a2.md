---
type: FileRead
title: Read Copilot plugin manifest and MCP config tests
description: Vitest suite validating plugin.json, skills, and .mcp.copilot.json
resource: agentmemory://observation/obs_mroxegsj_ca8d23c740a2
tags: ["Vitest testing framework", "GitHub Copilot plugin manifest", "MCP server configuration", "Copilot lifecycle hooks and events", "fileread"]
timestamp: 2026-07-17T12:40:23.662344+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Read the Vitest test suite for the Copilot plugin. The tests validate the structure of plugin/plugin.json, ensuring the correct plugin name, version sync with the root package, and presence of all expected skill directories. It also checks the shape of the .mcp.copilot.json configuration file and defines the expected Copilot lifecycle events.

## Facts
- File path: /Volumes/AI/agentmemory/test/copilot-plugin.test.ts
- Plugin name expected in manifest: "agentmemory"
- Known skill directories: recall, remember, session-history, forget, handoff, recap, commit-context, commit-history
- Supported Copilot events defined: sessionStart, userPromptSubmitted, preToolUse, postToolUse, postToolUseFailure, preCompact, agentStop, sessionEnd, subagentStart, subagentStop, notification
- Tests verify plugin.json version matches root package.json version
- Tests verify .mcp.copilot.json contains mcpServers.agentmemory configuration

## Concepts
- Vitest testing framework
- GitHub Copilot plugin manifest
- MCP server configuration
- Copilot lifecycle hooks and events

## Files
- `/Volumes/AI/agentmemory/test/copilot-plugin.test.ts`
- `plugin/plugin.json`
- `plugin/.mcp.copilot.json`

_Importance: 4 · Confidence: 1_
