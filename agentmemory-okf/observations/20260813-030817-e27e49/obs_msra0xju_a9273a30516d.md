---
type: CommandRun
title: Routine podman-related troubleshooting tips
description: Create a network that is connected to the container network on the host
resource: agentmemory://observation/obs_msra0xju_a9273a30516d
tags: ["Podman aardvark DNS", "podman-crc](config: podman configuration)", "commandrun"]
timestamp: 2026-08-13T08:49:01.908101+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 4
confidence: 0.9
---
# Summary

This tool call details troubleshooting instructions for `podman-container-operations` within Proxmox host. It provides several key recommendations and caveats from previous successes with podman container operations that were later modified due to changes of network architecture and addresses associated IP in compose files.

## Facts
- Podman version 5.x hosts different behavior compared to earlier versions.
- Set `cpu: cap=<0,0>` for containers to run unrestricted.

## Concepts
- Podman aardvark DNS
- podman-crc](config: podman configuration)

_Importance: 4 · Confidence: 0.9_
