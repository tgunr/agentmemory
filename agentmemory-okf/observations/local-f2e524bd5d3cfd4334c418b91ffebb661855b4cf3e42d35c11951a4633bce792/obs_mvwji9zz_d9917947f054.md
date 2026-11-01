---
type: Observation
title: skill_view:hermes-slash-command-dispatch add/edit function
description: Adding or debugging a Hermes slash command.
resource: agentmemory://observation/obs_mvwji9zz_d9917947f054
tags: ["State ownership for shell commands", "observation"]
timestamp: 2026-10-31T15:12:25.626415+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 5
confidence: 0.9
---
# Summary

The post_tool_call skill_view hook executed the 'hermes-slash-command-dispatch' tool for adding or debugging a Hermes slash command. This process involves understanding state ownership and registering the command in the 'hermes_cli/commands.py' registry.

## Facts
- Dispatch layer is not passing user's typed args into the configured shell command.

## Concepts
- State ownership for shell commands

_Importance: 5 · Confidence: 0.9_
