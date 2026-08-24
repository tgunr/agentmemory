---
type: file_edit
title: Error during skill execution
description: Access to unauthorized tool.
resource: agentmemory://observation/obs_mshj3qba_7c7ec865165b
tags: ["file_edit"]
timestamp: 2026-08-06T13:05:27.282413+00:00
source: agentmemory
session_id: 20260806_072921_2e9d20
importance: 8
confidence: 0.75
---
# Summary

The tool &quot;terminal&quot; was used despite being unapproved, which resulted in a background review error.

## Facts
- Tool usage observation for skill "productivity" triggered an error at post_tool_call.
- Background review denied non-whitelisted tool: terminal. Only memory/skill tools are allowed.

_Importance: 8 · Confidence: 0.75_
