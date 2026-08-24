---
type: FileRead
title: Docker container inspect
description: Inspecting 'vcom' tunnel
resource: agentmemory://observation/obs_mrypv346_8abed957cd1d
tags: ["Docker container management", "fileread"]
timestamp: 2026-07-24T09:07:03.939768+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_040654
importance: 6
confidence: 0.9
---
# Summary

The terminal tool was called to check the Docker container's status after a recent update. The 'vcom' tunnel is still running, listening on port 8001.

## Facts
- Running command: lsof -i :8001 2>/dev/null; curl -s -o /dev/null -w \"%{http_code}\" http://127.0.0.1:8001/v1/models 2>/dev/null || echo \"not_running\"
- Output:
<fm>
 PID:21650
 User:davec
 FD:4
 TYPE:TCP
 DEVICE:vcom-tunnel (LISTEN)
 SIZE/OFF:0
 NAME:*:vcom-tunnel (LISTEN):
 HTTP_CODE:200
</fm>

## Concepts
- Docker container management

## Files
- `/dev/null`
- `/vcom-tunnel (LISTEN)`

_Importance: 6 · Confidence: 0.9_
