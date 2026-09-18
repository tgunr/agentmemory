---
type: CommandRun
title: Update nftables to allow SMB on Debian Proxmox server
description: Restricting incoming SYn flood during backup process.
resource: agentmemory://observation/obs_mseiquj7_9414ae3dccbd
tags: ["nftables configuration", "SMB security group policy", "commandrun"]
timestamp: 2026-08-04T10:32:07.696117+00:00
source: agentmemory
session_id: bc9da2941347
importance: 7
confidence: 0.9
---
# Summary

The script writes a fix for incoming SYN flood on SMB during the backup process. The changes place a new counter accept rule between the current catch-all 'DROP IN' block, allowing MBs to arrive and be retained instead of being silently dropped.

## Facts
- Caught nftables catch-all drop handle at position 49.
- SMB and NetBIOS counters enabled and placed above the catch-all drop.

## Concepts
- nftables configuration
- SMB security group policy

## Files
- `/tmp/fix-samba-firewall.sh`
- `/private/tmp/fix-samba-firewall.sh`

_Importance: 7 · Confidence: 0.9_
