---
type: FileRead
title: QM Status and top output
description: Running qemu command
resource: agentmemory://observation/obs_mvxrbvo9_fe462ed29ffa
tags: ["QM status and top output", "fileread"]
timestamp: 2026-11-01T11:39:10.229276+00:00
source: agentmemory
session_id: local-bfeeed19924dd12b0f500c5ead9c6dbb3fa0f6c5c27db1988acaba32f78061a3
importance: 6
confidence: 0.9
---
# Summary

The tool used was 'ssh' to run a command that retrieved the status and top output of a qm, the output included useful information about the qmp and CPU usage

## Facts
- Command invoked ssh pve.root '...' for qm status and top output
- In stdout: qm start failed

## Concepts
- QM status and top output

## Files
- `/var/run/qemu-server/111.pid`
- `/var/log/pve/tasks/index`

_Importance: 6 · Confidence: 0.9_
