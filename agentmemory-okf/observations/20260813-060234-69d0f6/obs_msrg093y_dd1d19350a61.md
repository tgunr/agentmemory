---
type: FileRead
title: MCP Connection closed due to TCC sandbox blockage
description: TCC volume block grants file access to launchd-launched processes but not to Hermes agent process tree
resource: agentmemory://observation/obs_msrg093y_dd1d19350a61
tags: ["TCC (Targeted Compression Control) sandbox", "fileread"]
timestamp: 2026-08-13T11:36:27.919705+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 0.9
---
# Summary

This skill fixes MCU Connection closed due to the single systemic cause of TCC volume block in macOS. The issue results from the TCC sandbox granting file access only to `launchd-launched` processes, while blocking access for the `Hermes` agent process tree.

## Facts
- macOS TCC (Targeted Compression Control) sandbox blocks file access from the agent tree
- Filesystem access is allowed for launchd-launched services but not the Hermes agent process

## Concepts
- TCC (Targeted Compression Control) sandbox

## Files
- `/Volumes/AI`
- `/Users/davec/~/AI/Servers/MCP/zen-mcp-server/server.py`

_Importance: 8 · Confidence: 0.9_
