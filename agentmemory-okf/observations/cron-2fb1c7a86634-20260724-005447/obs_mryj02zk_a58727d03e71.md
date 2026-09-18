---
type: file_edit
title: Lsof Command to Find Open Ports
description: Finding open ports on port 8001
resource: agentmemory://observation/obs_mryj02zk_a58727d03e71
tags: ["netstat, grep, lsof", "file_edit"]
timestamp: 2026-07-24T05:54:59.739048+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_005447
importance: 6
confidence: 1
---
# Summary

The lsof command was executed to find open ports on port 8001. The command returned output in a specific format and identified the running process.

## Facts
- Command executed: lsof -i :8001 2>/dev/null || netstat -tlnp 2>/dev/null | grep :8001 || echo "Checking with ps..." && ps aux | grep -E "fm serve|8001" | grep -v grep
- Output format: COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
- Process details:
- PID: 21650, User: davec, Executable: /usr/bin/fm serve --host 0.0.0.0 --port 8001
- Auditing information:
- Command exit code: 0, Output empty, Empty error log

## Concepts
- netstat, grep, lsof

_Importance: 6 · Confidence: 1_
