---
type: CommandRun
title: Herpes UI TUI command
description: Terminal session
resource: agentmemory://observation/obs_mvwp024q_90551acc190a
tags: ["command execution", "hermes ui tui", "test automation", "commandrun"]
timestamp: 2026-10-31T17:46:13.318367+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 6
confidence: 0.9
---
# Summary

This tool is the Hermes UI TUI, running in a terminal session.
  The command executed the `cd` command, sed for the specific line, then printed out a test output.
  The output is JSDOM test output.

## Facts
- Command: "cd ~/.hermes/hermes-agent/ui-tui && sed -n '60,150p' src/__tests__/projectsSlashCommand.test.ts; echo "=== gw request sig:"; grep -n "request<| request(" src/gatewayClient.ts | head"
- Output: JSDOM test output

## Concepts
- command execution
- hermes ui tui
- test automation

## Files
- `<path>/Users/davec/.hermes/hermes-agent/ui-tui</path>`

_Importance: 6 · Confidence: 0.9_
