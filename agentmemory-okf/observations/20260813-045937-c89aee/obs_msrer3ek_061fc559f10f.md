---
type: file_edit
title: MCP Server Configuration Failed
description: TCC Sandbox Blocking Hermes Launcher Volume Accessible
resource: agentmemory://observation/obs_msrer3ek_061fc559f10f
tags: ["TCC Sandbox Grant", "file_edit"]
timestamp: 2026-08-13T11:01:21.002412+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 8
confidence: 0.9
---
# Summary

An MCPServer in `~/.hermes/config.yaml` fails `hermes mcp test name` with Connection closed due to TCC sandbox and volume mounted processes have different access permissions, leading to the failure due to file system permissions issues

## Facts
- Cause of Connection Closure: TCE Sandbox File Access Denied
- Main issue:**macOS **TCC sandbox** grants file access to the **launchd-launched**: but NOT to the**Hermes agent process tree (the terminal backend runs as davec over ssh; Hermes spawns node / the venv python3 from there)**

## Concepts
- TCC Sandbox Grant

## Files
- `/Users/davec/.../Server/sandbox/block.txt`

_Importance: 8 · Confidence: 0.9_
