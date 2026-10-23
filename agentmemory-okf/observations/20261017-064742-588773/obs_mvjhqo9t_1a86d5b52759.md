---
type: FileRead
title: syncoid-runner in alpha/sources
description: zsh: Bash shell, syncoid-runner
resource: agentmemory://observation/obs_mvjhqo9t_1a86d5b52759
tags: ["syncoid-runner", "zsh", "fileread"]
timestamp: 2026-10-22T12:01:57.844437+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

The syncoid-runner command was successfully run in the alpha/sources dataset. The command output includes several zsh shell processes, as well as the syncoid-runner command itself, which indicates successful execution of the dataset cleanup task.

## Facts
- Command: ssh pve.root 'ps aux | grep -iE \"syncoid|zfs receive|mbuffer\" | grep -v grep; echo ===; ssh -o BatchMode=yes -o ConnectTimeout=10 -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net \"zfs list -o name,used,refer -r data1/sources 2>&1 | grep -v snapshot; zpool list -o name,alloc,free,cap data1 2>&1\"' 2>&1 | tail -8
- Command timeout: 30 seconds

## Concepts
- syncoid-runner
- zsh

## Files
- `/usr/local/bin/syncoid-runner`

_Importance: 7 · Confidence: 0.9_
