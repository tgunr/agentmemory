---
type: Error
title: terminal received a 'code' parameter
description: Use execute_code or retry with terminal(command=...) for shell commands
resource: agentmemory://observation/obs_mvfli88s_910c4bc2d592
tags: ["error"]
timestamp: 2026-10-19T18:36:17.587743+00:00
source: agentmemory
session_id: 20261019_133543_980a42
importance: 4
confidence: 0.85
---
# Summary

The terminal received a 'code' parameter with a 'code' value, but it expects a shell command. It seems like a syntax mismatch or an incorrect format for the shell command.

## Facts
- terminal received a 'code' parameter
- but it requires a shell command in 'command'
- Use execute_code(code=...) for Python; for shell, retry as terminal(command=...

_Importance: 4 · Confidence: 0.85_
