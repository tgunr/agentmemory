---
type: file_edit
title: ssh command to ps aux
description: Executing command on remote server
resource: agentmemory://observation/obs_mvi7mcgh_d06de452b7f5
tags: ["SSSHook", "file_edit"]
timestamp: 2026-10-21T14:30:53.577646+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 4
confidence: 0.9
---
# Summary

The agent executed an SSH command on the syncoid.polymicro.net server to run a search query.

## Facts
- Remote server: syncoid.polymicro.net
- Command: ssh -o BatchMode=yes -o ConnectTimeout=10 -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net "ps aux | grep -iE \\\"zfs receive|mbuffer|syncoid\\\" | grep -v grep"

## Concepts
- SSSHook

_Importance: 4 · Confidence: 0.9_
