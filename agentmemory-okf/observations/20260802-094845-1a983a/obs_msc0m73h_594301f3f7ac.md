---
type: Error
title: Background review denied non-whitelisted tool error
description: Noise from failed command invocation in non-memory/skill tool
resource: agentmemory://observation/obs_msc0m73h_594301f3f7ac
tags: ["Whitelisting", "Tool permissions", "error"]
timestamp: 2026-08-02T16:29:05.258363+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 5
confidence: 0.9
---
# Summary

The code executed a command in the terminal, which is not permitted by the current whitelist. The background review mechanism rejected this action, indicating that the terminal was not whitelisted and that only memory/skill tools are allowed.

## Facts
- Error message details: Background review denied non-whitelisted tool: terminal. Only memory/skill tools are allowed.
- Tool used: terminal

## Concepts
- Whitelisting
- Tool permissions

_Importance: 5 · Confidence: 0.9_
