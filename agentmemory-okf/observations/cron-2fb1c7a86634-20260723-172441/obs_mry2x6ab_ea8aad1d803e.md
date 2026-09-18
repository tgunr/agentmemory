---
type: file_edit
title: netstat command with grep
description: Verify TCP connection on port 8001
resource: agentmemory://observation/obs_mry2x6ab_ea8aad1d803e
tags: ["TCP", "file_edit"]
timestamp: 2026-07-23T22:24:50.189200+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_172441
importance: 4
confidence: 1
---
# Summary

The system executed the given netstat command to verify the TCP connection on port 8001.

## Facts
- Netstat command used: netstat -tlnp 2>/dev/null | grep :8001 || lsof -i :8001 2>/dev/null || echo "Checking with alternative method"
- PID: 21650
- User: davec
- Command output:
- LOCAL FDs:
- FD #4: <em>IPv6 </em>0x5f280083c00b2bc5 <em>(LISTEN)</em>

## Concepts
- TCP

_Importance: 4 · Confidence: 1_
