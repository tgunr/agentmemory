---
type: file_edit
title: Canonical test failed
description: No supported command found
resource: agentmemory://observation/obs_mvwe77eq_d9965b31ac80
tags: ["test failure", "unsupported command", "file_edit"]
timestamp: 2026-10-31T12:43:50.974101+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 5
confidence: 1
---
# Summary

Canonical test for unsupported command failed. The test output shows the line where the error occurred.

## Facts
- Tool used: terminal
- Command entered: grep -rln ...
- Search pattern: worktree
- Input directory: /Users/davec/.hermes/hermes-agent/ui-tui/src

## Concepts
- test failure
- unsupported command

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/__tests__/canonicalUnsupportedCommand.test.ts`

_Importance: 5 · Confidence: 1_
