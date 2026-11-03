---
type: file_edit
title: SSH command execution
description: Executing custom command on remote host
resource: agentmemory://observation/obs_mvzmbqzj_310f742b415c
tags: ["SSH command execution", "ZFS receive", "file_edit"]
timestamp: 2026-11-02T18:54:38.424851+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 4
confidence: 0.9
---
# Summary

The script executed a custom command on the remote host using SSH, while displaying relevant system information.

## Facts
- Timestamp: 2026-11-02T18:54:38.424851+00:00
- Command: ssh pve.root 'echo \"HOST=$(hostname -s)\"; sed -n 405,430p /usr/local/bin/syncoid-runner; ps -eo pid,etime,cmd | grep \"zfs receive\" | grep -v grep | cut -c1-100; zfs list -Hp -o used tank/alpha/sources'

## Concepts
- SSH command execution
- ZFS receive

## Files
- `/usr/local/bin/syncoid-runner`

_Importance: 4 · Confidence: 0.9_
