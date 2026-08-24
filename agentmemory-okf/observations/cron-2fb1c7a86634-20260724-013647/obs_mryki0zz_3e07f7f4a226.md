---
type: FileRead
title: Output of Netstat command
description: Lists running TCP connections and port 8001 status
resource: agentmemory://observation/obs_mryki0zz_3e07f7f4a226
tags: ["Netstat and port usage detection", "fileread"]
timestamp: 2026-07-24T06:36:56.586593+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_013647
importance: 4
confidence: 0.9
---
# Summary

Netstat command output displays TCP connections, with port 8001 identified as being used by "vcom-tunnel".

## Facts
- TCP connections listed
- Port 8001 in use by "vcom-tunnel" (LISTEN)

## Concepts
- Netstat and port usage detection

## Files
- `/dev/null`
- `/usr/bin/netstat`
- `/usr/bin/lsof`

_Importance: 4 · Confidence: 0.9_
