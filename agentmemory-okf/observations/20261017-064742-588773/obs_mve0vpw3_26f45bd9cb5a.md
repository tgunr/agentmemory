---
type: CommandRun
title: Sanoid and Syncoid Operations
description: Diagnose and operate sanoid and syncoid for ZFS snapshot manager and replication.
resource: agentmemory://observation/obs_mve0vpw3_26f45bd9cb5a
tags: ["zfs snapshot manager", "zfs replication", "commandrun"]
timestamp: 2026-10-18T16:11:08.875853+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 8
confidence: 0.9
---
# Summary

Sanoid and Syncoid are separate daemons with failure modes that require independent diagnosis. Syncoid can look healthy while shipping stale data. The critical order to diagnose failures is source autosnap freshness, then syncoid stamps on source and target, per-dataset logs, sanoid service status, and common failure modes.

## Facts
- Sanoid uses a systemd timer or cron to manage snapshots.
- Syncoid uses a service and cron job to manage replication.

## Concepts
- zfs snapshot manager
- zfs replication

## Files
- `/etc/sanoid/sanoid.conf`

_Importance: 8 · Confidence: 0.9_
