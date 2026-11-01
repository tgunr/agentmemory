---
type: CommandRun
title: tui-tooling-examples
description: Executing shell commands from the TUI
resource: agentmemory://observation/obs_mvwotfjs_ece51d09e531
tags: ["shell scripting", "commandrun"]
timestamp: 2026-10-31T17:41:04.116607+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 5
confidence: 0.9
---
# Summary

The tool made a post_tool_call hook call to the terminal tool with the command \"cd ~/.hermes/hermes-agent/ui-tui/src && sed -n '1,80p' lib/rpc	ts\". This command executed successfully and produced output. The tool returned a exit code of 0, indicating no errors.

## Facts
- Executed shell commands successfully

## Concepts
- shell scripting

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/lib/rpc.ts`
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/app/userMessages.ts`

_Importance: 5 · Confidence: 0.9_
