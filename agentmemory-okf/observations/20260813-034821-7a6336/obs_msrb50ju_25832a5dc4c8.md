---
type: file_edit
title: Proxmox VE Firewall Configuration
description: L list-units command output
resource: agentmemory://observation/obs_msrb50ju_25832a5dc4c8
tags: ["nftables", "file_edit"]
timestamp: 2026-08-13T09:20:12.038751+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 6
confidence: 1
---
# Summary

The agent ran a command in the terminal to inspect Proxmox VE firewall configuration, including nftables and iptables services. The output shows relevant details about the firewalls.

## Facts
- Proxmox nftables firewall is running (pve-firewall.service, proxmox-firewall.service)
- Proxmox VE firewall logger service is running (pvefw-logger.service)
- /etc/nftables.conf file permissions

## Concepts
- nftables

## Files
- `/etc/nftables.conf`
- `/etc/nftables.d/`
- `/etc/iptables/`

_Importance: 6 · Confidence: 1_
