---
type: file_edit
title: web_extract error handling
description: Testing web_extract with incorrect backend
resource: agentmemory://observation/obs_mvjl2my4_452d49ca2a93
tags: ["web_extract error handling", "file_edit"]
timestamp: 2026-10-22T13:35:14.856232+00:00
source: agentmemory
session_id: 20261022_083459_a05ab0
importance: 8
confidence: 0.9
---
# Summary

The web_extract tool failed when using Brave Search as the backend due to a KeyError in the 'results' key. We need to update the web.extract_backend configuration to fix this.

## Facts
- execute_code tool made one tool call
- Tool call lasted 0.03 seconds

## Concepts
- web_extract error handling

## Files
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes_kernel_efmckml5/hermes_kernel_runner.py`

_Importance: 8 · Confidence: 0.9_
