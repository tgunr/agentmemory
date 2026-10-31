---
type: FileRead
title: Action in Hermes agent
description: Accessing files in Hermes
resource: agentmemory://observation/obs_mvttjqjc_217430ef252e
tags: ["Grep command", "fileread"]
timestamp: 2026-10-29T17:30:11.349266+00:00
source: agentmemory
session_id: local-230964ff7fe1a3c188e9807fd8a7dfcdd60af9a86e0214180374df6875793fa9
importance: 5
confidence: 0.9
---
# Summary

The script executed a command in the Hermes agent to access specific files.

## Facts
- executed a command in the Hermes agent
- Command was 'cd ~/.hermes/hermes-agent && grep -rn \"EMAIL_ADDRESS\" --include=\"*.py\" gateway/ hermes_plugins/ 2>/dev/null | grep -v test | head -15'

## Concepts
- Grep command

## Files
- `~/.hermes/hermes-agent/gateway/*.py`

_Importance: 5 · Confidence: 0.9_
