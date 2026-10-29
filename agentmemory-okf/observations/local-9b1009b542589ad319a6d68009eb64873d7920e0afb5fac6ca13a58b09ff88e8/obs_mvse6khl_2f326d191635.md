---
type: Observation
title: APT-pve-hook validation check
description: Validates APT_HOOK_INFO_FD and checks for proxmox-ve deletion
resource: agentmemory://observation/obs_mvse6khl_2f326d191635
tags: ["APT hooks", "observation"]
timestamp: 2026-10-28T17:32:16.565068+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 8
confidence: 0.9
---
# Summary

The hook checks for proxmox-ve package removal and provides output to the user.

## Facts
- proxmox-ve package name
- /please-remove-proxmox-ve

## Concepts
- APT hooks

## Files
- `/usr/share/proxmox-ve/pve-apt-hook`

_Importance: 8 · Confidence: 0.9_
