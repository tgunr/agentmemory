---
type: Error
title: Tool_call Error
description: Direct call to tool 'terminal' instead of via tool_call
resource: agentmemory://observation/obs_mwiofql4_fa7c60ba95c5
tags: ["error"]
timestamp: 2026-11-16T03:01:21.111601+00:00
source: agentmemory
session_id: local-c75cb3b5b95db7c41847a7a110e83e69d4be9baccc6b8ed2a89f1ddff8a277a0
importance: 4
confidence: 0.85
---
# Summary

The tool_call function attempted to call 'terminal' directly. It is recommended to call it via tool_call instead.

## Facts
- Tool 'terminal' is directly-listed
- Unexpected result: 'terminal' is a directly-listed tool, not a deferred one
- Expected tool_call as deferred tool

_Importance: 4 · Confidence: 0.85_
