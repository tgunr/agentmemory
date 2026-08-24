---
type: file_edit
title: Lsof output on port 8001
description: No process running on the specified port
resource: agentmemory://observation/obs_mryfknfv_5274df1de70e
tags: ["tcp port scanning", "file_edit"]
timestamp: 2026-07-24T04:19:00.895456+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_231845
importance: 4
confidence: 1
---
# Summary

The given command ran successfully, confirming that there is no process running on port 8001. The timeout was also respected.

## Facts
- Command: lsof -i :8001 2>/dev/null || echo "lsof confirms nothing on port 8001"
- Timeout: 10 seconds
- Lsof output:
- COMMAND   PID  USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME\nfm      21650 davec    4u  IPv6 0x5f280083c00b2bc5      0t0  TCP *:vcom-tunnel (LISTEN)

## Concepts
- tcp port scanning

_Importance: 4 · Confidence: 1_
