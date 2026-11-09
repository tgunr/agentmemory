---
type: file_edit
title: zfs-storage-admin
description: Use when changing which ZFS datasets stay mounted
resource: agentmemory://observation/obs_mw4vn7te_329eca75f22b
tags: ["PVE/Debian filesystem management", "PVEs (Proxmox Virtual Environment)", "ZFS datasets", "Mount point policy", "file_edit"]
timestamp: 2026-11-06T11:14:20.876084+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 7
confidence: 1
---
# Summary

Procedure A measures the mount topology (read-only), and procedures B and C provide evidence checklists and trimming procedures.

## Facts
- Pool/dataset policy on Linux hosts (PVE/Debian, containers, replicas, mounts).
- A dataset's mount need is proven, never inferred from the pool name.
- `zfs receive` writes into an unmounted dataset.

## Concepts
- PVE/Debian filesystem management
- PVEs (Proxmox Virtual Environment)
- ZFS datasets
- Mount point policy

_Importance: 7 · Confidence: 1_
