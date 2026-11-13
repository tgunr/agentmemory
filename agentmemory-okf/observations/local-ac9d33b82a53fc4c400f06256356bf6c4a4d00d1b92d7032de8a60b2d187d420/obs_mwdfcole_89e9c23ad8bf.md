---
type: CommandRun
title: PVE post-boot check
description: Ran post-boot check script after pve reboots to verify pools, network, services.
resource: agentmemory://observation/obs_mwdfcole_89e9c23ad8bf
tags: ["post-boot check", "ZFS pools", "pve-cluster", "PVE", "commandrun"]
timestamp: 2026-11-12T10:48:11.129778+00:00
source: agentmemory
session_id: local-ac9d33b82a53fc4c400f06256356bf6c4a4d00d1b92d7032de8a60b2d187d420
importance: 5
confidence: 0.9
---
# Summary

The post-boot check script is used after pve reboots to verify pools, network, services. The script verifies ZFS pools, networking, pve-cluster, services, containers and endpoints. It checks for system failures, ZFS pools, clusters, services, containers and endpoints.

## Facts
- Script is read-only and exits 1 on any FAIL.

## Concepts
- post-boot check
- ZFS pools
- pve-cluster
- PVE

_Importance: 5 · Confidence: 0.9_
