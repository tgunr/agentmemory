---
type: file_edit
title: Plex Media Server Update
description: Update Plex Media Server on Proxmox
resource: agentmemory://observation/obs_mvr31yv9_000175ffc45f
tags: ["systemd unit management", "file_edit"]
timestamp: 2026-10-27T19:32:59.967385+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 7
confidence: 0.9
---
# Summary

The function used the command `ssh pve.root "systemctl list-units --all --no-pager | grep -i plex; dpkg -l plexmediaserver | tail -1"` to locate the Plex Media Server unit, and then used `apt-get update` to refresh the Plex repository.

## Facts
- Plex Media Server is stored on pve.root
- The command used was ssh

## Concepts
- systemd unit management

## Files
- `/etc/apt/sources.list.d/plex.list`

_Importance: 7 · Confidence: 0.9_
