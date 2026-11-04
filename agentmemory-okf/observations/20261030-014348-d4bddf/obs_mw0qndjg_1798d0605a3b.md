---
type: file_edit
title: Sanoid and Syncoid Operations
description: Sanoid takes snapshots and syncoid replicates them
resource: agentmemory://observation/obs_mw0qndjg_1798d0605a3b
tags: ["Sanoid and Syncoid Operations", "file_edit"]
timestamp: 2026-11-03T13:43:25.486900+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 8
confidence: 0.9
---
# Summary

Sanoid takes snapshots and syncoid replicates them. They are separate daemons with separate failure modes — <br>always diagnose them independently, because syncoid can look perfectly healthy while shipping stale data.

## Facts
- Sanoid takes snapshots and syncoid replicates them
- Sanoid is driven by a systemd timer or cron<br>Syncoid is driven by syncoid.service (oneshot at 00:00) AND by /etc/cron.d/syncoid-jobs (one entry per source dataset with staggered schedule + --cleanup)

## Concepts
- Sanoid and Syncoid Operations

## Files
- `/etc/sanoid/sanoid.conf`
- `/etc/sanoid/sanoid.defaults.conf`
- `/etc/syncoid/syncoid.conf`
- `/etc/cron.d/syncoid-jobs`
- `/etc/systemd/system/syncoid.service`
- `/var/log/syncoid/*`

_Importance: 8 · Confidence: 0.9_
