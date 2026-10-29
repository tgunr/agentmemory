---
type: file_edit
title: Simulating apt-get with downgrades allowed
description: Running a customized bash script using ssh to update Proxmox VE
resource: agentmemory://observation/obs_mvsey5s4_0eebf4f52c6d
tags: ["apt_get", "Proxmox VE", "file_edit"]
timestamp: 2026-10-28T17:53:43.873837+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 6
confidence: 0.9
---
# Summary

The script uses apt-get with a custom timeout and downgrades allowed to update Proxmox VE packages, including proxmox-ve and pve-manager.

## Facts
- Proxmox VE package manager command
- Apt_preferences file updated

## Concepts
- apt_get
- Proxmox VE

## Files
- `/etc/apt/preferences.d/zz-prefer-stable`
- `/tmp/du5.txt`

_Importance: 6 · Confidence: 0.9_
