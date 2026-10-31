---
type: file_edit
title: Terminal: Execute command with timeout and SSH
description: Retrieve zfs data and check send status
resource: agentmemory://observation/obs_mvtnw1lh_ae16be914f77
tags: ["zfs", "file_edit"]
timestamp: 2026-10-29T14:51:47.857298+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 4
confidence: 0.9
---
# Summary

Executed a command using SSH and a timeout to run. It retrieves data from a file and checks for zfs send status.

## Facts
- Last run: 2026-10-29 09:32:21 - 09:51:47
- Command: timeout 60 ssh pve.root 'echo HOST=$(hostname -s); tail -2 /root/offsite-sources.log | cut -c1-160; ssh -o BatchMode=yes -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net \"zfs list -H -o name,used,avail data1/sources/%recv\"; pgrep -c \"zfs send\"; date'

## Concepts
- zfs

## Files
- `/root/offsite-sources.log`

_Importance: 4 · Confidence: 0.9_
