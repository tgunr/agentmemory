---
type: file_edit
title: Podman Container Operations
description: Manage podman containers on Linux hosts: start/recreate, cgroupv2 traps, network/IP pinning, DNS aliases.
resource: agentmemory://observation/obs_msra0ame_f5e1d48d6104
tags: ["cgroupv2", "Podman network alias", "file_edit"]
timestamp: 2026-08-13T08:48:32.194049+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 6
confidence: 0.9
---
# Summary

Issue creating a podman container due to cgroupv2 issues and stuck containers. Solution dump spec, delete container, recreate, and verify operation.

## Facts
- Podman container started with static IP issue.
- Podman container had memory-swappiness flag set.

## Concepts
- cgroupv2
- Podman network alias

## Files
- `/run/containers/networks/aardvark-dns/aardvark-dns.json`

_Importance: 6 · Confidence: 0.9_
