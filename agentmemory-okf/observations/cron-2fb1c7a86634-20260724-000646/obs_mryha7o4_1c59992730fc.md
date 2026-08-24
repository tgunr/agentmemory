---
type: FileRead
title: Lsof command output
description: Checking for open ports on port 8001 via multiple methods.
resource: agentmemory://observation/obs_mryha7o4_1c59992730fc
tags: ["lsof command", "fileread"]
timestamp: 2026-07-24T05:06:53.137819+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_000646
importance: 7
confidence: 0.9
---
# Summary

The tool invoked the 'lsof' command and retrieved information about open ports on port 8001.

## Facts
- Command: lsof -ti:8001 2>/dev/null || ss -tlnp | grep :8001 | netstat -tlnp 2>/dev/null | grep :8001, Output: 21650

## Concepts
- lsof command

## Files
- `None`

_Importance: 7 · Confidence: 0.9_
