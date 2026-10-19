---
type: FileRead
title: PS aux grep zfs receive, zfs list, and zpool status
description: No error or exception occurred
resource: agentmemory://observation/obs_mvdunb7l_3772cfbd6fa5
tags: ["zfs receive", "ZFS list", "zpool status", "fileread"]
timestamp: 2026-10-18T13:16:38.891231+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 4
confidence: 0.9
---
# Summary

The command to retrieve ps aux grep zfs receive output, along with zfs list and zpool status was executed without any issues.

## Facts
- Command: ssh pve.root 'ssh -o BatchMode=yes -o ConnectTimeout=10 -o ServerAliveInterval=15 root@syncoid.polymicro.net \"...
- Command: .../bin/wc -l; .../bin/zfs list -o name,used,refer -r data1/sources 2>&1 | .../bin/grep -v snapshot

## Concepts
- zfs receive
- ZFS list
- zpool status

_Importance: 4 · Confidence: 0.9_
