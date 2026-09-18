---
type: FileRead
title: Test branding McpCount
description: Rendering TUI reporting MCP count
resource: agentmemory://observation/obs_msuijd99_cde626507a9b
tags: ["React hooks and streams", "fileread"]
timestamp: 2026-08-15T15:10:37.530584+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 5
confidence: 0.9
---
# Summary

A bug was found that caused inconsistent MCP reports between TUI and CLI. This test ensures the correct count.

## Facts
- Limits TUI output to first 110 MCPs
- Streams captured with false TTY setting

## Concepts
- React hooks and streams

_Importance: 5 · Confidence: 0.9_
