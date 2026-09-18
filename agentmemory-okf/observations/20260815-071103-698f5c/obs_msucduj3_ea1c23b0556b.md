---
type: FileRead
title: TUI Gateway Logs
description: Serve command output
resource: agentmemory://observation/obs_msucduj3_ea1c23b0556b
tags: ["TUI Gateway", "fileread"]
timestamp: 2026-08-15T12:18:22.276835+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 4
confidence: 0.9
---
# Summary

The terminal tool executed the 'bash' command to run the diag_inv.sh script, which displayed hermes gateway / dashboard / serve / tui launchers (parents) information. The output includes the total number of launchers and running processes.

## Facts
- Total launchers: 77463
- Total running processes: 92115

## Concepts
- TUI Gateway

## Files
- `/Users/davec/.hermes/hermes-agent/venv/bin/python -m hermes_cli.main gateway run --replace`

_Importance: 4 · Confidence: 0.9_
