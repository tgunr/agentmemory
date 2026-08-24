---
type: FileRead
title: Validate workspace to add
description: A validating function for adding new workspaces
resource: agentmemory://observation/obs_ms87tg9a_e855d52aa7c6
tags: ["workspace validation", "path safety", "fileread"]
timestamp: 2026-07-31T00:39:36.331469+00:00
source: agentmemory
session_id: 85016383fe9f
importance: 6
confidence: 0.9
---
# Summary

The post_tool_call hook is triggered after reading the workspace.py file. The function validates workspace paths and checks for path traversal issues.

## Facts
- The tool reads a Python file at /Users/davec/hermes-webui/api/workspace.py

## Concepts
- workspace validation
- path safety

## Files
- `/Users/davec/hermes-webui/api/workspace.py`

_Importance: 6 · Confidence: 0.9_
