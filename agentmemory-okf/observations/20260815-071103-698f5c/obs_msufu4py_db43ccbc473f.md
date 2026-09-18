---
type: file_edit
title: TUI shows \"0 connected\" but `hermes mcp test` is GREEN
description: Symptom reported by TUI banner with zero servers connected, yet server discovery returns green
resource: agentmemory://observation/obs_msufu4py_db43ccbc473f
tags: ["mcp", "file_edit"]
timestamp: 2026-08-15T13:55:00.831609+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 7
confidence: 0.9
---
# Summary

This observation is about a failure mode where TUI reports zero connected servers, but `hermes mcp test` returns green. This is not a config bug, but rather a runtime-state issue.

## Facts
- The symptom was reported due to a transient boot race when ~18 servers spawn at once and saturate the shared MCP event loop.
- The bug occurred because `get_mcp_status()` was called out-of-process, instead of using the live gateway process's state.

## Concepts
- mcp

## Files
- `/Users/davec/.hermes/skills/mcp/mcp-troubleshooting/SKILL.md`

_Importance: 7 · Confidence: 0.9_
