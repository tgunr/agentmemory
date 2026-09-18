---
type: FileRead
title: Lsof and ss command to find open port on 8001
description: Navigating potential errors while searching for an open Port 8001
resource: agentmemory://observation/obs_mry7un31_68a869c1fbc4
tags: ["Process monitoring and system information", "fileread"]
timestamp: 2026-07-24T00:42:49.967875+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_194243
importance: 7
confidence: 0.9
---
# Summary

The tool execution used lsof command in conjunction with redirection, the use of both ss and grep for the purpose investigating opened ports.

## Facts
- Called lsof with argument: -ti:8001

## Concepts
- Process monitoring and system information

## Files
- `/dev/null`
- `/proc self (PID:21650)`

_Importance: 7 · Confidence: 0.9_
