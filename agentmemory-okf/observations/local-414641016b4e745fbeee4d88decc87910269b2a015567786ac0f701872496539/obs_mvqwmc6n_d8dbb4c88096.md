---
type: FileRead
title: PVE Package Manager Update
description: Checking for updates of PVE Manager and Proxmox VE
resource: agentmemory://observation/obs_mvqwmc6n_d8dbb4c88096
tags: ["PVE Manager updates", "fileread"]
timestamp: 2026-10-27T16:32:53.034340+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 6
confidence: 0.9
---
# Summary

Run ssh command to check for PVE Manager and Proxmox VE updates via apt-cache policy.

## Facts
- PVE Manager: Latest installed version: 8.2.7, Candidate: 8.2.7, Version table: 8.2.7 100
- Proxmox VE: Latest installed version: 8.2.0, Candidate: 8.2.0, Version table: 8.2.0 100

## Concepts
- PVE Manager updates

## Files
- `/etc/apt/updates.d/50unattended-upgrades`

_Importance: 6 · Confidence: 0.9_
