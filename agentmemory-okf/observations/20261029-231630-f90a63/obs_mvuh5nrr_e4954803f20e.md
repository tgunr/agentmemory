---
type: Observation
title: SSH command execution
description: executes hermes backend and retrieves dashboard info
resource: agentmemory://observation/obs_mvuh5nrr_e4954803f20e
tags: ["SSH command execution", "Hermetic isolated mode", "observation"]
timestamp: 2026-10-30T04:31:05.360656+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 1
---
# Summary

Hermes backend executed with isolated mode using an SSH command. The process reported an exit code of 0 without any reported errors. A token was generated for SSH session storage, and the token was stored in an isolated location. The Hermes dashboard displayed the backend listening on port 65095.

## Facts
- Python script executing command
- SSH command executed with isolated mode
- Port 65095 used by hermes backend
- Exit code 0, no error reported
- Directory created with restricted permissions
- Token generated for SSH session
- Token stored in isolated location

## Concepts
- SSH command execution
- Hermetic isolated mode

## Files
- `~/.hermes/desktop-ssh/$(python3 -c "import secrets;print(secrets.token_hex(16))")`
- `/tmp/hprobe.token`
- `/tmp/hprobe.path`

_Importance: 6 · Confidence: 1_
