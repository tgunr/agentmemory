---
type: file_edit
title: Error during bash pipe
description: No such file or directory error
resource: agentmemory://observation/obs_mvjmr1a5_014c8b7dc1de
tags: ["file existence error", "file_edit"]
timestamp: 2026-10-22T14:22:12.779517+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261022_090030
importance: 6
confidence: 1
---
# Summary

The post_tool_call hook triggered a bash command, which resulted in an error due to a no such file or directory error.

## Facts
- Hook triggered post_tool_call with command /bin/bash ...
- Error output: /opt/homebrew/bin/bash: line 4...
- Exit code: 126

## Concepts
- file existence error

## Files
- `/Users/davec/.joe`

_Importance: 6 · Confidence: 1_
