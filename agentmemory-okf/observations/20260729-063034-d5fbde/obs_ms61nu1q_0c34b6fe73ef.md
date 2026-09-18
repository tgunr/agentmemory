---
type: file_edit
title: Hermes web tools found under .hermes dir
description: Run `find /Users/davec/.hermes -name "*.py"` to find Hermes related files
resource: agentmemory://observation/obs_ms61nu1q_0c34b6fe73ef
tags: ["file_edit"]
timestamp: 2026-07-29T12:11:44.220014+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 8
confidence: 0.75
---
# Summary

The tool executed a command using Python and matched the process against multiple web tools in hermes directory of user directory.
The Hermes Agent found all related files (web_tools.py, website-policy.py, webhook.py etc.) under .hermes directories by piped result with 'find'.

## Facts
- Heracles output size is approximately 120KB after piping | head -20.

## Files
- `/Users/davec/.hermes/hermes-agent/tools/web_tools.py`

_Importance: 8 · Confidence: 0.75_
