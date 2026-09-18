---
type: Error
title: skill_manage write_file failed: wrong parameter name
description: 
resource: agentmemory://observation/obs_mrqj1gjk_eb9df1bebffb
tags: ["tool parameter validation", "API parameter naming", "error"]
timestamp: 2026-07-18T15:33:54.555421+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The skill_manage tool rejected a write_file operation because it expects the content parameter to be named 'file_content' rather than 'content'. This is a parameter naming mismatch between the tool call and the tool's expected interface.

## Facts
- Tool 'skill_manage' called with action 'write_file'
- Error: 'file_content' parameter required but 'content' was provided
- Target file path: references/bluebubbles-self-loop.md
- Write operation failed despite having valid content payload

## Concepts
- tool parameter validation
- API parameter naming

## Files
- `references/bluebubbles-self-loop.md`

_Importance: 3 · Confidence: 1_
