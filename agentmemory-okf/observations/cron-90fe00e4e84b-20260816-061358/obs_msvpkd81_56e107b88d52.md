---
type: FileRead
title: ZFS list output from podman filesystems
description: 
resource: agentmemory://observation/obs_msvpkd81_56e107b88d52
tags: ["podman", "fileread"]
timestamp: 2026-08-16T11:15:07.599064+00:00
source: agentmemory
session_id: cron_90fe00e4e84b_20260816_061358
importance: 5
confidence: 0.9
---
# Summary

The zfs list command output was captured from podman. This could be relevant due to changes in storage usage.

## Facts
- Command ran: ssh pve.root \"zfs list -o name,used,avail,refer -t filesystem | tail -45\"

## Concepts
- podman

## Files
- `/tank/dpool/podman/...`

_Importance: 5 · Confidence: 0.9_
