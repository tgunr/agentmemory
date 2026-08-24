---
type: FileRead
title: Route commands and prompts
description: 
resource: agentmemory://observation/obs_mrxe9n9x_254c45c0d1b4
tags: ["Route commands and prompts", "fileread"]
timestamp: 2026-07-23T10:54:41.671301+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 6
confidence: 0.9
---
# Summary

This change helps users avoid the old CLI shell-quoting bug fix and understand how the `/route` dispatch path works. The WebUI doesn't shell out directly, so users must switch models themselves if they want to use `/route`. Additionally, note that Desktop `/model` is a picker, not an argument-taking slash command.

## Facts
- Added `quick_commands: route` to one `config.yaml` is not enough to make `/route` available everywhere.
- Required setup for each profile includes `profile/config.yaml`, `hermes_cli/commands.py` registry entry, and `cli.py::process_command` dispatch branch.

## Concepts
- Route commands and prompts

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/SKILL.md`

_Importance: 6 · Confidence: 0.9_
