---
type: CommandRun
title: sdk compatibility fixes and error diagnosis for MCP connectivity troubleshooting
description: using mcp-troubleshooting skill
resource: agentmemory://observation/obs_msrc3lcf_b89c0e7eb4fa
tags: ["MCP SDK versions", "SSL verification parameters", "HTTP client", "commandrun"]
timestamp: 2026-08-13T09:47:05.291345+00:00
source: agentmemory
session_id: 20260813_044640_76f82a
importance: 5
confidence: 0.9
---
# Summary

During a tool call, the "mcp-troubleshooting" skill was used, leading to a fix for MCP connectivity issues and error diagnosis, highlighting the importance of SDK compatibility fixes using Hermes Agent.

## Facts
- The deprecated HTTP client in MCP SDK versions 1.12.x to 1.23.x doesn't support SSL verification parameters.

## Concepts
- MCP SDK versions
- SSL verification parameters
- HTTP client

_Importance: 5 · Confidence: 0.9_
