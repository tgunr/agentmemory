---
type: CommandRun
title: Searching cli.py for user_and quick commands
description: Tooling for Hermes
resource: agentmemory://observation/obs_mvv2m3fi_e686e97ba527
tags: ["grep command", "regex pattern", "pipeline command", "commandrun"]
timestamp: 2026-10-30T14:31:44.090564+00:00
source: agentmemory
session_id: local-5f21df6e0d37aa0be3f21982ea90776a250afe8e05aa9497317ec4cef073fc91
importance: 6
confidence: 0.9
---
# Summary

The terminal tool executes a series of commands on cli.py, searching for specific pattern matches, and produces zero exit code.

## Facts
- Command: cd ~/.hermes/hermes-agent && grep -rn \"user_args\" cli.py | head -5; grep -rn \"quick_command\" cli.py | head -8

## Concepts
- grep command
- regex pattern
- pipeline command

## Files
- `~/.hermes/hermes-agent/cli.py`

_Importance: 6 · Confidence: 0.9_
