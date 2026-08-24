---
type: file_edit
title: xRemove mcp-router from config
description: Python script removed mcp-router block from Hermes config file
resource: agentmemory://observation/obs_msq35f3w_8da646ee5d51
tags: ["mcp_router", "HERMES_CONFIG", "file_edit"]
timestamp: 2026-08-12T12:48:47.797791+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 7
confidence: 0.9
---
# Summary

The execution of the tool_call with arguments as invalid JSON resulted in a failure, prompting a re-run of the hook to remove the mcp-router block from the Hermes config file.

## Facts
- Invalid JSON in tool_call's 'arguments' while triggering hook post_tool_call

## Concepts
- mcp_router
- HERMES_CONFIG

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/scripts/remove_mcp_router.py`

_Importance: 7 · Confidence: 0.9_
