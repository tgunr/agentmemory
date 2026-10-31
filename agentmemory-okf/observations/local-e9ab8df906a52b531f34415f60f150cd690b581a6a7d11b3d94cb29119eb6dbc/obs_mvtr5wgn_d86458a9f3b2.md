---
type: file_edit
title: Check qm status and config for VM 106
description: Using SSH command
resource: agentmemory://observation/obs_mvtr5wgn_d86458a9f3b2
tags: ["QM configuration", "file_edit"]
timestamp: 2026-10-29T16:23:26.612231+00:00
source: agentmemory
session_id: local-e9ab8df906a52b531f34415f60f150cd690b581a6a7d11b3d94cb29119eb6dbc
importance: 6
confidence: 0.9
---
# Summary

The agent executed a command using the terminal to check the status and configuration of a VM named 'vm-106' and extract relevant information from system logs.

## Facts
- Tool used was 'terminal'
- Command executed was 'ssh pve.root 'qm status 106; qm config 106 | grep -E "unused|efi|sata0" ; zfs list -t volume | grep vm-106''

## Concepts
- QM configuration

_Importance: 6 · Confidence: 0.9_
