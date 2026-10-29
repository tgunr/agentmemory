---
type: FileRead
title: Proxmox VE host administration
description: Use when administering or upgrading a Proxmox VE host.
resource: agentmemory://observation/obs_mvqy0nmz_86c2437b0f22
tags: ["Proxmox VE", "apt", "dist-upgrade", "fileread"]
timestamp: 2026-10-27T17:12:00.678960+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 5
confidence: 0.9
---
# Summary

Use the Proxmox VE host administration skill when administering or upgrading a Proxmox VE host. This includes checking the repository configuration, using `dist-upgrade` instead of `upgrade`, and never guessing an upstream version. Never trust the repository config and always confirm against `apt-cache policy`.

## Facts
- apt update / apt upgrade / apt dist-upgrade fails
- Deciding between staying on the current PVE major and crossing to the next one

## Concepts
- Proxmox VE
- apt
- dist-upgrade

_Importance: 5 · Confidence: 0.9_
