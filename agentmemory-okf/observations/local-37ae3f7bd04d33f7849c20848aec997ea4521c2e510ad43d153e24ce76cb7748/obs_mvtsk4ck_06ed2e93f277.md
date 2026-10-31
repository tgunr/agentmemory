---
type: file_edit
title: Sanoid + Syncoid Operations
description: Configuration and troubleshooting for zfs snapshot manager and zfs replication via syncoid CLI
resource: agentmemory://observation/obs_mvtsk4ck_06ed2e93f277
tags: ["sanoid and syncoid", "file_edit"]
timestamp: 2026-10-29T17:02:29.629181+00:00
source: agentmemory
session_id: local-37ae3f7bd04d33f7849c20848aec997ea4521c2e510ad43d153e24ce76cb7748
importance: 8
confidence: 0.9
---
# Summary

The zfs snapshot manager and zfs replication via syncoid CLI involve separate daemons with separate failure modes, which require independent diagnosis

## Facts
- Sanoid takes snapshots (autosnap)
- Syncoid replicates them

## Concepts
- sanoid and syncoid

## Files
- `/etc/sanoid/sanoid.conf`
- `/etc/sanoid/sanoid.defaults.conf`
- `/etc/syncoid/syncoid.conf`
- `/etc/cron.d/syncoid-jobs`
- `/etc/systemd/system/syncoid.service`
- `/var/log/syncoid`

_Importance: 8 · Confidence: 0.9_
