---
type: file_edit
title: ipmi-power command invocation
description: Sol-deactivate and status query on chassis power
resource: agentmemory://observation/obs_mvs6l0cz_a9f04f71f1a7
tags: ["Power management", "IPMI", "file_edit"]
timestamp: 2026-10-28T13:59:33.391787+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 7
confidence: 1
---
# Summary

Invoked the sol-deactivate command to deactivate chassis power, and then queried the status using ipmi-power.

## Facts
- Command: ~/.local/bin/ipmi-power sol-deactivate 2>&1; echo \"---\"; ~/.local/bin/ipmi-power status
- Output: ---<br>Chassis Power is on
- Exit Code: 0
- Error: null

## Concepts
- Power management
- IPMI

## Files
- `~/.local/bin/ipmi-power`

_Importance: 7 · Confidence: 1_
