---
type: file_write
title: Podman configuration update
description: Switched from zfs to overlay graphdriver due to driver/kernel incompatibility
resource: agentmemory://observation/obs_mw4xk35k_e90ce2616ff9
tags: ["zfs graphdriver", "overlay graphdriver", "Podman", "kernel incompatibility", "file_write"]
timestamp: 2026-11-06T12:07:54.102102+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 6
confidence: 0.9
---
# Summary

A user updated Podman's configuration to switch from the zfs graphdriver to the overlay graphdriver due to a known driver/kernel incompatibility issue.

## Facts
- User created a file called podman-overlay.sh with content modifying Podman configuration
- File was created in /tmp

## Concepts
- zfs graphdriver
- overlay graphdriver
- Podman
- kernel incompatibility

## Files
- `/tmp/podman-overlay.sh`

_Importance: 6 · Confidence: 0.9_
