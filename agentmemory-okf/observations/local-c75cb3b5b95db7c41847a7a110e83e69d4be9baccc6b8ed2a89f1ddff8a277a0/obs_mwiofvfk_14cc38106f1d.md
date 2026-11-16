---
type: FileRead
title: tool_call to failed argument validation
description: MCP NextCloud calendar list events failed
resource: agentmemory://observation/obs_mwiofvfk_14cc38106f1d
tags: ["argument validation", "fileread"]
timestamp: 2026-11-16T03:01:27.389447+00:00
source: agentmemory
session_id: local-c75cb3b5b95db7c41847a7a110e83e69d4be9baccc6b8ed2a89f1ddff8a277a0
importance: 7
confidence: 0.9
---
# Summary

The call to `mcp__NextCloud__calendar_list_events` failed due to invalid arguments. The parameters schema requires specific properties (calendar, from, to) and disallows additional properties. This is a non-critical architectural decision. The `tool_call` was not invoked.

## Facts
- Tool Call Output: {"error": "tools_call to 'mcp__NextCloud__calendar_list_events' failed argument validation at arguments (additionalProperties): Additional properties are not allowed ('end', 'start' were unexpected)"}
- Parameters Schema: {\"type\": \"object\", \"properties\": {\"calendar\": {\"type\": \"string\", \"minLength\": 1, \"maxLength\": 1024, \"description\": \"calendar path (optional)\"}, \"from\": {\"type\": \"string\", \"minLength\": 10, \"maxLength\": 40, \"description\": \"start ISO date\"}, \"to\": {\"type\": \"string\", \"minLength\": 10, \"maxLength\": 40, \"description\": \"end ISO date\"}}, \"additionalProperties\": false, \"required\": []}

## Concepts
- argument validation

_Importance: 7 · Confidence: 0.9_
