---
type: file_write
title: executing code fails due to missing key-error
description: Error executing code using web_extract
resource: agentmemory://observation/obs_mvsfhdp7_d8bf3cd87333
tags: ["KeyError exception handling", "file_write"]
timestamp: 2026-10-28T18:08:40.601059+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 6
confidence: 1
---
# Summary

The tool execute_code failed with an error when executing the code using the web_extract tool due to a KeyError.

## Facts
- Tool: execute_code
- Input to tool was: {"code": "from hermes_tools import web_extract", ...}
- Output of tool was: {"status": "error", "output": ...}
- Error message: KeyError: 'results'

## Concepts
- KeyError exception handling

## Files
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes_kernel_pceg5by7/hermes_kernel_runner.py`

_Importance: 6 · Confidence: 1_
