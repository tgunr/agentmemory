---
type: FileRead
title: MCP discovery timeout configuration
description: Loads config YAML defaulting to DEFAULT_CONFIG on key absence
resource: agentmemory://observation/obs_msuifo46_898de495a046
tags: ["fileread"]
timestamp: 2026-08-15T15:07:44.975989+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 8
confidence: 0.75
---
# Summary

The `mcp_discovery_timeout` configuration, which varies by query mode, is a key factor in determining how long the system takes to discover and resolve tools. Changing this value can significantly impact the overall performance of the tooling workflow.

## Facts
- Total codebase commit count: 3457 (latest)
- Data format version: 2.1 beta

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/mcp_startup.py`

_Importance: 8 · Confidence: 0.75_
