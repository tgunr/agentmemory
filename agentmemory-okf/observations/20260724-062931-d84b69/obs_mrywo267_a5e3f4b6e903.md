---
type: file_write
title: Probe xcode-mcp bridge tools exposeability
description: No Xcode project open, or Intelligence MCP toggle off.
resource: agentmemory://observation/obs_mrywo267_a5e3f4b6e903
tags: ["Tool exposeability testing using xcrun mcpbridge", "file_write"]
timestamp: 2026-07-24T12:17:33.108486+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 7
confidence: 0.9
---
# Summary

The tool probe_xcode-mcp-tools.py, which uses the xcrun command for the MCP bridge, was written successfully. However, due to lack of Xcode project open or Intelligence MCP toggle off, it showed no tools exposed through the `tools/list` method.

## Facts
- mcpbridge returns ZERO tools with a stdio handshake succeeded.
- connection to xcrun mcpbridge succeeds as well.

## Concepts
- Tool exposeability testing using xcrun mcpbridge

## Files
- `/Users/davec/.hermes/skills/software-development/xcode-ai-agents/scripts/probe-xcode-mcp-tools.py`

_Importance: 7 · Confidence: 0.9_
