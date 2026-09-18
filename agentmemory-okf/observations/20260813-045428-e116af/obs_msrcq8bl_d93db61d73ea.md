---
type: file_edit
title: Bundled Hermes CLI command search
description: searched through main.py for specific command
resource: agentmemory://observation/obs_msrcq8bl_d93db61d73ea
tags: ["command_search", "file_edit"]
timestamp: 2026-08-13T10:04:41.487193+00:00
source: agentmemory
session_id: 20260813_045428_e116af
importance: 5
confidence: 0.9
---
# Summary

The Hermes Agent executed a custom search using the bundled CLI, focusing on specific dashboard-related commands.

## Facts
- Terminal was used as the tool
- Command: "cd /Users/davec/.hermes/hermes-agent && grep -n \"_parse_dashboard_runtime\\|def _find_stale_dashboard_pids\\|def _dashboard_probe_host\" hermes_cli/main.py | head -20"

## Concepts
- command_search

_Importance: 5 · Confidence: 0.9_
