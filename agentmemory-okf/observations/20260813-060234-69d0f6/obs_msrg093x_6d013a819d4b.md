---
type: CommandRun
title: MCP Troubleshooting Guide
description: 
resource: agentmemory://observation/obs_msrg093x_6d013a819d4b
tags: ["SQL, HTTP transport, MCP, SDK compatibility", "commandrun"]
timestamp: 2026-08-13T11:36:27.917101+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 7
confidence: 0.9
---
# Summary

The tool `skill_view` executed the command `mcp-troubleshooting`, which is a guide for MCP server connection failures
    and SDK compatibility issues. This can impact performance, so it's recommended to add servers as necessary and disable
    unused ones. Additionally, using `hermes mcp test` and checking installed versions can help troubleshoot issues.

## Facts
- The deprecated HTTP client in MCP SDK versions 1.12.x to 1.23.x doesn't support SSL verification parameters,
      and upgrading to 1.24.0+ fixes the issue.
- MCP server connectivity can be tested manually using `hermes mcp test` and checking the installed version
      with `pip show mcp | grep Version`.

## Concepts
- SQL, HTTP transport, MCP, SDK compatibility

## Files
- `/path/to/wrapper.sh`

_Importance: 7 · Confidence: 0.9_
