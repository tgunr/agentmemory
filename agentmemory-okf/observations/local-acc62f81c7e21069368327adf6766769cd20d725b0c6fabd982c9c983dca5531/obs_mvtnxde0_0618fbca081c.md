---
type: CommandRun
title: Proxmox VE host administration
description: Use when administering or upgrading a host
resource: agentmemory://observation/obs_mvtnxde0_0618fbca081c
tags: ["Proxmox VE management", "commandrun"]
timestamp: 2026-10-29T14:52:49.791045+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 8
confidence: 0.9
---
# Summary

This command is used to administer or upgrade a Proxmox VE host. It applies to the fleet's hypervisor/storage hosts. To determine if a repository is contributing to an individual host, run `apt-cache policy pve-manager`. If the version table shows only `/var/lib/dpkg/status`, the repository is frozen and no command will move it.

## Facts
- Archive stale repo files to avoid confusion
- Use `apt-cache policy pve-manager` to check repository status

## Concepts
- Proxmox VE management

_Importance: 8 · Confidence: 0.9_
