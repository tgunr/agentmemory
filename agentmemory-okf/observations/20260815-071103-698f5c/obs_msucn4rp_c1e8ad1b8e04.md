---
type: file_write
title: MCP \"0 servers connected\" — multi-instance diagnosis & safe cleanup
description: No-line context (none)
resource: agentmemory://observation/obs_msucn4rp_c1e8ad1b8e04
tags: ["hermes gateway", "mcp_stdio_watchdog.py", "Launchd", "TUIGateway", "file_write"]
timestamp: 2026-08-15T12:25:35.449497+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 7
confidence: 0.9
---
# Summary

This script diagnoses and fixes issues with hermes gateway/serve/dashboard/tui launchers, addressing multi-instance problems by safely cleaning up non-TUI strays. After removal, the agent must ask the user to quit all TUI windows and open one instance.

## Facts
- No specific factual details available in the input

## Concepts
- hermes gateway
- mcp_stdio_watchdog.py
- Launchd
- TUIGateway

## Files
- `/Users/davec/.hermes/skills/configuration/hermes-gateway-control/references/mcp-zero-connected-diagnosis.md`

_Importance: 7 · Confidence: 0.9_
