---
type: file_edit
title: Extracting systemd-boot package details
description: Fetched package versions and manually listed packages
resource: agentmemory://observation/obs_mvr2vg61_b9fc4de0820d
tags: ["apt-cache", "systemd-boot", "file_edit"]
timestamp: 2026-10-27T19:27:55.796896+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 5
confidence: 0.9
---
# Summary

The tool executed a command to extract information about the systemd-boot package, including its version history and manually listed packages.

## Facts
- Running command: ssh pve.root 'echo "=== what provides bootctl on debian 12 ==="; apt-cache policy systemd-boot-efi systemd-boot 2>/dev/null | head -12; echo "=== manual (non-auto) packages: count ==="; apt-mark showmanual | wc -l; echo "=== sample of manual list ==="; apt-mark showmanual | head -40'

## Concepts
- apt-cache
- systemd-boot

_Importance: 5 · Confidence: 0.9_
