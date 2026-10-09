---
type: Error
title: Terminal tool failed to execute shell command
description: Tool received 'code' parameter but requires a shell command
resource: agentmemory://observation/obs_muzsuqyw_2c4dc73fbe60
tags: ["API documentation mismatch", "error"]
timestamp: 2026-10-08T17:17:40.228317+00:00
source: agentmemory
session_id: 20261002_131040_9b1d3a
importance: 5
confidence: 0.9
---
# Summary

The terminal tool received a 'code' parameter, but it is not designed to execute shell commands directly. The tool expects a shell command in the 'command' parameter instead.

## Facts
- Post_tool_call tool failed
- Expected shell command, received 'code' parameter

## Concepts
- API documentation mismatch

_Importance: 5 · Confidence: 0.9_
