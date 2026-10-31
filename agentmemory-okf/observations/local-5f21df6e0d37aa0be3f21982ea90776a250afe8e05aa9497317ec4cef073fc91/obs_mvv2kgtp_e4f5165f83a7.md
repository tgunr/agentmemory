---
type: file_edit
title: Analysis of stash@{\$i} for i in $(seq 1 11)
description: A summary of git apply and cat-file results
resource: agentmemory://observation/obs_mvv2kgtp_e4f5165f83a7
tags: ["git apply", "git patch", "reversed 3way clean", "file_edit"]
timestamp: 2026-10-30T14:30:28.137157+00:00
source: agentmemory
session_id: local-5f21df6e0d37aa0be3f21982ea90776a250afe8e05aa9497317ec4cef073fc91
importance: 5
confidence: 1
---
# Summary

The script iterates over the stash@{\$i} and checks which patches were applied directly to the files or reversed during clean. Files or test/commands are reported as missing. Application backends are failing error due to index absence of those file contents.

## Facts
- Reversed 3way clean result for stash@{\$i} applied with conflicts
- Reversed 3way clean result for stash@{\$i} applied with conflicts
- Tests/hermes_cli/test_quick_command_args.py does not exist in index error is triggered
- Website/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-kanban-codex-lane.md does not exist in index error is triggered
- Tests/tools/test_approval_heartbeat.py does not exist in index error is triggered
- Plugins/web/brave_free/provider.py application result is falling back to direct application
- Commands/commands.py application result is clean but includes conflicts
- Package-lock.json application result is falling back to conflicts

## Concepts
- git apply
- git patch
- reversed 3way clean

_Importance: 5 · Confidence: 1_
