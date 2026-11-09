---
type: file_edit
title: rsync timeout
description: Executing rsync with timeout hit
resource: agentmemory://observation/obs_mw89zysl_b66162fa7052
tags: ["Timing out due to time out parameter", "file_edit"]
timestamp: 2026-11-08T20:19:28.857177+00:00
source: agentmemory
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
importance: 6
confidence: 0.9
---
# Summary

When executing rsync command, it timed out due to exceeding 600s maximum time allowed, despite the use of time command to profile the execution. This raises concern about command behavior.

## Facts
- Command invoked via terminal with time command for profiling
- Timing out after 180 seconds, max 600 seconds allowed

## Concepts
- Timing out due to time out parameter

## Files
- `/Users/davec/.config/rsync/rsync.excludes`
- `/Volumes/design/Separators/`
- `/tmp/rsynctest/`

_Importance: 6 · Confidence: 0.9_
