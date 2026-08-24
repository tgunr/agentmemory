---
type: file_edit
title: MCP_stdio_watchdog Watchdog Script Explanation
description: Spawning and killing of mcp-remote
resource: agentmemory://observation/obs_msuf8isn_5a873aca3e07
tags: ["Process Management", "file_edit"]
timestamp: 2026-08-15T13:38:12.644045+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 6
confidence: 0.9
---
# Summary

The MCP_stdio_watchdog Watchdog Script explains how to properly spawn and kill mcp-remote subprocesses for a clean shutdown experience.

## Facts
- The subprocess is spawned as a direct child of the Hermes process.
- The Python script uses the subprocess module to handle spawning.

## Concepts
- Process Management

## Files
- `/Users/davec/.hermes/hermes-agent/tools/mcp_stdio_watchdog.py`

_Importance: 6 · Confidence: 0.9_
