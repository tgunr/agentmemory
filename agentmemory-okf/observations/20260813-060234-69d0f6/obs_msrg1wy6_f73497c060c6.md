---
type: file_edit
title: MCP Troubleshooting Guide
description: a quick reference for MCP server connection failures and SDK compatibility issues.
resource: agentmemory://observation/obs_msrg1wy6_f73497c060c6
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-13T11:37:45.480606+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 5
confidence: 0.9
---
# Summary

The post-tool_call event occurred after editing the SKILL.md file using the skill_view tool, with no notable output or impact on the system.

## Facts
- MCP SDK versions 1.12.x to 1.23.x have a deprecated HTTP client that doesn't support SSL verification parameters.
- Upgrading MCP SDK to 1.24.0+: pip install 'mcp>=1.24.0'

## Concepts
- React hooks

## Files
- `SKILL.md`

_Importance: 5 · Confidence: 0.9_
