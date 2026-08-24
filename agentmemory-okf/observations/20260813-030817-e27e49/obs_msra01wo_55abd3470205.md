---
type: file_edit
title: Podman Container Operations
description: Manage podman containers on Linux hosts
resource: agentmemory://observation/obs_msra01wo_55abd3470205
tags: ["cgroupv2 Linux hosts", "file_edit"]
timestamp: 2026-08-13T08:48:20.898473+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 7
confidence: 1
---
# Summary

Podman container operations were edited to manage podman containers, including start/recreate, cgroupv2 traps, and DNS aliases. The changes aimed to resolve issues with static-IP pinning, memory-swappiness, and app boots hanging due to environment hardcoding peer IP addresses that no longer exist.

## Facts
- Recurring traps in cgroupv2 hosts revealed by error messages for static-IP pin
- Type 1 trap: static-IP pin vs recreated network
- Type 2 trap: memory-swappiness on cgroupv2

## Concepts
- cgroupv2 Linux hosts

_Importance: 7 · Confidence: 1_
