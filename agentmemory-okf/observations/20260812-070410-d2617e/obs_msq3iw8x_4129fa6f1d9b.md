---
type: Observation
title: mcp__apple_mcp__notes tool edit failed
description: AI/API keys query result: missing required argument(s)
resource: agentmemory://observation/obs_msq3iw8x_4129fa6f1d9b
tags: ["parameter schema", "operation parameter", "tool_call", "ai/api keys query result", "observation"]
timestamp: 2026-08-12T12:59:16.542436+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 5
confidence: 0.9
---
# Summary

The tool_call to 'mcp__apple_mcp__notes' failed due to missing operation parameter. The parameters schema for the tool includes fields operation, searchText, title, body and folderName.

## Facts
- tool_call invoked incorrectly (missing operation parameter), parameters schema {\"type\": \"object\", \\n\\ \"properties\": {\\\"operation\\\": {\\\"type\": \"string\", \\n\\ \"description\": \"Operation to perform\">}, ...}
- Incorrect arguments made, retry with correct format

## Concepts
- parameter schema
- operation parameter
- tool_call
- ai/api keys query result

_Importance: 5 · Confidence: 0.9_
