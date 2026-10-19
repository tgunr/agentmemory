---
type: CommandRun
title: Running command on remote host
description: Executing ZFS command for data1/sources
resource: agentmemory://observation/obs_mvdwk342_6fd9ef6edbe2
tags: ["ZFS", "ssh", "command", "commandrun"]
timestamp: 2026-10-18T14:10:07.678307+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 5
confidence: 0.9
---
# Summary

The tool executed a command on a remote host, checking the status of a ZFS dataset. The output shows the current usage and allocation information for the dataset.

## Facts
- Command history: "ssh pve.root 'ssh -o BatchMode=yes -o ConnectTimeout=10 -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net \"ps aux | grep \\\"zfs receive\\\" | grep -v grep; echo ===; zfs list -o name,used,refer -r data1/sources 2>&1 | grep -v snapshot; echo ===; zpool list -o name,alloc,free,cap data1\"'"
- Command output: "root 8986   0.0  0.1 14404  2936  -  Is   07:07        0:00.00 sh -c  mbuffer  -q -s 128k -m 16M | lzop -dfc |  zfs receive  -s -F 'data1/sources' 2>&1\nroot 8989   0.0  0.2 20572  8708  -  S    07:07        0:01.05 zfs receive -s -F data1/sources\n===\nNAME            USED  REFER\ndata1/sources   510G   435G\n===\nNAME   ALLOC   FREE    CAP\ndata1  1.32T   460G    74%"

## Concepts
- ZFS
- ssh
- command

_Importance: 5 · Confidence: 0.9_
