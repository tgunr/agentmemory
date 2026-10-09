---
type: FileRead
title: Executing shell command on PVE
description: Synopsis: Get PVE version using ssh
resource: agentmemory://observation/obs_muzqxj98_befaf6411b4f
tags: ["terminal commands", "PVE versioning", "fileread"]
timestamp: 2026-10-08T16:23:50.963793+00:00
source: agentmemory
session_id: 20261002_131040_9b1d3a
importance: 5
confidence: 0.9
---
# Summary

This terminal action retrieves PVE node information.
The output includes the PVE version, memory status, storage allocation, virtual machines, and LXC instances, and indicates a successful execution with no errors.

## Facts
- Tool: terminal
- Command: ssh -o BatchMode=yes -o ConnectTimeout=8 davec@pve.local 'hostname; pveversion -v 2>/dev/null | head -1; echo&quot;--- mem ---&quot;; free -h | head -2; echo&quot;--- storage ---&quot;; df -h /var/lib/vz 2>/dev/null | tail -1; echo&quot;--- vms ---&quot;; qm list 2>/dev/null; echo&quot;--- lxc ---&quot; 2>&1'

## Concepts
- terminal commands
- PVE versioning

## Files
- `None`

_Importance: 5 · Confidence: 0.9_
