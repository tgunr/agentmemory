---
type: file_write
title: Locate and restart Hermes in mcp desktop commander
description: Contacting Hermes to locate its bin for startup.
resource: agentmemory://observation/obs_msr5snbp_f2f6562fae66
tags: ["locate hermes bin pattern", "file_write"]
timestamp: 2026-08-13T06:50:36.946379+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 5
confidence: 1
---
# Summary

The Hermes process was started, but encountered an error in locating its bin. The restart command was executed successfully.

## Facts
- PID of started process: 73606 (shell: /bin/zsh)
- Output:\n=== locate hermes bin ===
- Output after searching for Hermes bin:\n/Users/davec/.local/bin/hermes\n
- First line of error messages:\nzsh:1: no such file or directory: /Users/davec/.hermes/bin/hermes\n

## Concepts
- locate hermes bin pattern

## Files
- `/bin/zsh`
- `/Users/davec/.local/bin/hermes`

_Importance: 5 · Confidence: 1_
