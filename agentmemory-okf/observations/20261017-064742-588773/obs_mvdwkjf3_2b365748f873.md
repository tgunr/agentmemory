---
type: file_edit
title: SSH termination of process 8986-8989
description: Terminating processes via ZFS receive
resource: agentmemory://observation/obs_mvdwkjf3_2b365748f873
tags: ["ZFS receive", "ps aux", "file_edit"]
timestamp: 2026-10-18T14:10:28.809137+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

The process 8986-8989 was terminated using ZFS receive mechanism, with a timeout of 30 seconds.

## Facts
- Tool: terminal
- Command: ssh -o BatchMode=yes -o ConnectTimeout=10 -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net \"kill -9 8986 8987 8989 2>/dev/null; sleep 1; echo killed; ps aux | grep -iE \\\"zfs receive|mbuffer|syncoid\\\" | grep -v grep | wc -l\""

## Concepts
- ZFS receive
- ps aux

_Importance: 7 · Confidence: 0.9_
