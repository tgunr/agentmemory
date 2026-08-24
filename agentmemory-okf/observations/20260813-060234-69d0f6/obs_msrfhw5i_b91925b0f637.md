---
type: file_edit
title: Update comfyui-mcp process
description: No notification required
resource: agentmemory://observation/obs_msrfhw5i_b91925b0f637
tags: ["command parsing and shell scripting", "file_edit"]
timestamp: 2026-08-13T11:22:11.323499+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 5
confidence: 0.9
---
# Summary

The terminal tool experienced an error due to the use of backgrounding in the command string.

## Facts
- Foreground command uses '&' backgrounding (fix command signature)

## Concepts
- command parsing and shell scripting

## Files
- `/Users/davec/.hermes/node/bin/comfyui-mcp`

_Importance: 5 · Confidence: 0.9_
