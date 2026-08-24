---
type: file_write
title: TUI \"0 connected\" but `hermes mcp test` is GREEN — diagnostic recipe
description: Diagnostic session for TUI zero-connected vs green case
resource: agentmemory://observation/obs_msuftkyv_75a0f81ad673
tags: ["Background daemon thread exit and live gateway process state", "TUI banner displays empty registry when background daemon thread exits with zero connected servers", "LIVE gateway process state is meaningful only under specific conditions", "file_write"]
timestamp: 2026-08-15T13:54:35.235749+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 7
confidence: 0.9
---
# Summary

The problem occurs when the background daemon thread exits with zero connected servers, and the live gateway process's _servers registry stays empty, causing `hermes mcp test` to display \"0 connected\". This can be solved by re-running discovery in place or restarting the TUI, which repopulates the live fleet.

## Facts
- Background daemon thread exits with zero connected servers, causing live gateway process's _servers registry to empty.
- Only the live gateway process's state is meaningful when `get_mcp_status()` is called, not a fresh python3 shell or execute_code.

## Concepts
- Background daemon thread exit and live gateway process state
- TUI banner displays empty registry when background daemon thread exits with zero connected servers
- LIVE gateway process state is meaningful only under specific conditions

## Files
- `/Users/davec/.hermes/skills/mcp/mcp-troubleshooting/references/tui-zero-connected-vs-green-test.md`

_Importance: 7 · Confidence: 0.9_
