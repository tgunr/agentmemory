---
type: file_edit
title: Hermes agent skill commands search output
description: No specific context available
resource: agentmemory://observation/obs_mvuim4ta_f3535c54fcf1
tags: ["agent skill management", "file_edit"]
timestamp: 2026-10-30T05:11:53.562798+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 4
confidence: 0.9
---
# Summary

The tool agent executed a command on the terminal and retrieved skill commands from a Python file. The command output includes information about skill directories and templates.

## Facts
- Command executed on terminal

## Concepts
- agent skill management

## Files
- `/home/user/.hermes/hermes-agent && grep -rn "get_skill_commands" --include=*.py . | grep -v test | head && echo ---- && sed -n 1450,1520p hermes_cli/config_defaults.py`

_Importance: 4 · Confidence: 0.9_
