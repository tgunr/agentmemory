---
type: FileRead
title: Accessing Hermes config files
description: Running grep command in hermes agent
resource: agentmemory://observation/obs_mvugumdc_771d86bf70ea
tags: ["fileread"]
timestamp: 2026-10-30T04:22:30.332822+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 4
confidence: 0.75
---
# Summary

Retrieved Hermes config file contents from terminal using grep command.

## Facts
- Tool: terminal, command: grep -rn
- Command: cd ~/.hermes/hermes-agent && grep -rn "x-hermes-client | clientVersion | client_version | XVERSION | x-hermes-app" --include=*.py hermes_cli/ | head -20

## Files
- `~/.hermes/hermes-agent`

_Importance: 4 · Confidence: 0.75_
