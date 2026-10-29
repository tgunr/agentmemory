---
type: CommandRun
title: Update grubdefault file on proxmox server
description: No line to add context to this tool call
resource: agentmemory://observation/obs_mvr2y9q4_d93fd4585d32
tags: ["Proxmox servers", "Grub configuration", "Intel IOMMU", "commandrun"]
timestamp: 2026-10-27T19:30:07.414940+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 8
confidence: 0.9
---
# Summary

The script copies the default grub file to a unique location, removes outdated settings, and updates GRUB_CMDLINE_LINUX_DEFAULT to enable Intel IOMMU on a Proxmox server.

## Facts
- Command to update grubdefault file: ssh pve.root 'cp -v /etc/default/grub /root/grub.default.bak.$(date +%F)'
- Command used to apply intel iommu update: sed -i \"s|^GRUB_CMDLINE_LINUX_DEFAULT=.*|GRUB_CMDLINE_LINUX=\\\"\\\"|\" /etc/default/grub

## Concepts
- Proxmox servers
- Grub configuration
- Intel IOMMU

## Files
- `/root/grub.default.bak.2026-10-27`
- `/etc/default/grub`

_Importance: 8 · Confidence: 0.9_
