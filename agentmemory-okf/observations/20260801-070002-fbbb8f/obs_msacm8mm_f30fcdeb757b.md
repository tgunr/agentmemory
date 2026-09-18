---
type: FileRead
title: Read Hermes code file
description: Desktop hermes-agent project source code read operation
resource: agentmemory://observation/obs_msacm8mm_f30fcdeb757b
tags: ["hermes-agent", "desktop development", "fileread"]
timestamp: 2026-08-01T12:29:30.282016+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 4
confidence: 1
---
# Summary

The hermes-agent tool read a file from the user's desktop directory, displaying up to 30 lines of source code (total lines = 1215) in the post_tool_call function.

## Facts
- Tool: read_file
- Input path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts
- Input limit: 30
- Start line: 499, End line: 520
- File size: 41292 bytes
- Truncated: true with offset=31
- Total lines: 1215

## Concepts
- hermes-agent
- desktop development

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`

_Importance: 4 · Confidence: 1_
