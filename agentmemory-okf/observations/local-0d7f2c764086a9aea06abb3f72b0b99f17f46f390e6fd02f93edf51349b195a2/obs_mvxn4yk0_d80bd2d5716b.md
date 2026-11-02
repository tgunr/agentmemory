---
type: file_edit
title: Update NextCloud MCP servers
description: Configuration command
resource: agentmemory://observation/obs_mvxn4yk0_d80bd2d5716b
tags: ["OAuth authentication", "NextCloud configuration", "Hermetic configuration", "file_edit"]
timestamp: 2026-11-01T09:41:48.909231+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 8
confidence: 0.9
---
# Summary

Updated NextCloud MCP servers configuration with OAuth authorisation. Command output shows the new configuration values.

## Facts
- Command to update NextCloud server configuration: cd /Users/davec && hermes config set mcp_servers.NextCloud.auth oauth 2>&1 | tail -5; echo '---';
- Current output of configuration command: {"output": "✓ Set mcp_servers.NextCloud.auth = oauth in /Users/davec/.hermes/config.yaml\n---\nurl: https://cloud.polymicro.net/apps/mcp/\nauth: oauth", "exit_code": 0, "error": null}

## Concepts
- OAuth authentication
- NextCloud configuration
- Hermetic configuration

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 8 · Confidence: 0.9_
