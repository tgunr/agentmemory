---
type: file_edit
title: pmxcfs log check
description: Checking recent pmxcfs log for errors
resource: agentmemory://observation/obs_mvs85w5h_ad068a7fead4
tags: ["pmxcfs", "pve-cluster", "file_edit"]
timestamp: 2026-10-28T14:43:47.327060+00:00
source: agentmemory
session_id: local-513b631d6a88dad15f29360760f1a97a48f656f26061d79b4c34dde2f8e62a99
importance: 6
confidence: 1
---
# Summary

Check recent pmxcfs log for errors and failures during Proxmox VE cluster restart.

## Facts
- pmxcfs running
- /etc/pve mounted
- authkey.pub
- authkey.pub.old
- recent pmxcfs log:
- Oct 28 09:41:50 pve systemd[1]: pve-cluster.service: Failed with result 'exit-code'
- Oct 28 09:41:50 pve systemd[1]: pve-cluster.service: Changed dead -> failed
- Oct 28 09:41:50 pve systemd[1]: pve-cluster.service: Job 2452609 pve-cluster.service/start finished, result=failed
- Oct 28 09:41:50 pve systemd[1]: Failed to start pve-cluster.service - The Proxmox VE cluster filesystem.

## Concepts
- pmxcfs
- pve-cluster

## Files
- `/var/log/pve/pve-cluster.log`
- `/lib/systemd/system/pve-cluster.service`

_Importance: 6 · Confidence: 1_
