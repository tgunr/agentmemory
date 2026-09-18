---
type: file_edit
title: Terminal tool configuration
description: Edit terminal CWD
resource: agentmemory://observation/obs_mryzflmj_0d88153d3030
tags: ["file_edit"]
timestamp: 2026-07-24T13:34:57.585062+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 5
confidence: 0.75
---
# Summary

The terminal CWD in .hermes/hermes-agent was printed out to check its configuration. A `Resolve a path relative to TERMINAL_CWD` error occurred when trying to read `.hermes/hermes-agent`. The issue is possibly due to the unsetting of TERMINAL_CWD

## Facts
- Resolve a path relative to TERMINAL_CWD (the worktree base directory)
- Sentinel values for Terminator configuration (empty, dot, parent, auto, cwd) and absolute values are handled

## Files
- `/Users/davec/.hermes/hermes-agent`

_Importance: 5 · Confidence: 0.75_
