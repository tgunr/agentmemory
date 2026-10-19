---
type: file_edit
title: Kill process on syncoid
description: Terminal command to kill processes
resource: agentmemory://observation/obs_mve66oc2_ef16165aeed7
tags: ["ps aux command", "zfs receive", "syncoid", "file_edit"]
timestamp: 2026-10-18T18:39:38.159136+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.85
---
# Summary

The process was killed by the command.

## Facts
- Command executed at 2026-10-18T18:39:38.159136+00:00
- Command: ssh pve.root 'ssh -o BatchMode=yes -o ConnectTimeout=10 -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net "kill -9 9500 9501 9503 2>/dev/null; sleep 1; ps aux | grep -iE "\\zfs receive|mbuffer|syncoid" | grep -v grep | wc -l; echo killed"' 2>&1 | tail -5

## Concepts
- ps aux command
- zfs receive
- syncoid

## Files
- `/root/.ssh/id_rsa.pve.root`

_Importance: 7 · Confidence: 0.85_
