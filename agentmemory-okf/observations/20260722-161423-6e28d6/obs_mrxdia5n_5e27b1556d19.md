---
type: CommandRun
title: Error using 'read_file' tool
description: No 'read_file' command on the system
resource: agentmemory://observation/obs_mrxdia5n_5e27b1556d19
tags: ["shell_command_not_found", "agent_skill_bundle_location", "commandrun"]
timestamp: 2026-07-23T10:33:24.968744+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 5
confidence: 0.9
---
# Summary

The agent ran an attempt at the 'read_file' command but encountered this error due to the tool not being available on the system. This indicates that the skill bundle location path requires a command that is not found by the terminal.

## Facts
- User attempted to run a non-existent command: read_file
- Agent was unable to find the 'read_file' command in the terminal's PATH

## Concepts
- shell_command_not_found
- agent_skill_bundle_location

_Importance: 5 · Confidence: 0.9_
