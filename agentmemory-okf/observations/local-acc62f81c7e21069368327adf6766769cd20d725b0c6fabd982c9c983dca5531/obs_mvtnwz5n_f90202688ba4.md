---
type: file_edit
title: Sanoid + Syncoid Operations
description: An example of how to diagnose and operate sanoid and syncoid for ZFS snapshot manager and replication via syncoid CLI
resource: agentmemory://observation/obs_mvtnwz5n_f90202688ba4
tags: ["React hooks", "SQL migration", "auth middleware", "file_edit"]
timestamp: 2026-10-29T14:52:31.346169+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 8
confidence: 1
---
# Summary

Sanoid and syncoid are used to manage ZFS snapshots and replication. The tool provides a detailed guide on how to diagnose and operate these systems, including common failure modes and steps to fix them.

## Facts
- Sanoid takes snapshots (autosnap); syncoid replicates them
- They are separate daemons with separate failure modes
- Syncoid can look perfectly healthy while shipping stale data

## Concepts
- React hooks
- SQL migration
- auth middleware

## Files
- `/etc/sanoid/sanoid.conf`
- `/etc/sanoid/sanoid.defaults.conf`
- `/etc/syncoid/syncoid.conf`
- `/etc/cron.d/syncoid-jobs`
- `/etc/systemd/system/syncoid.service`
- `/var/log/syncoid`

_Importance: 8 · Confidence: 1_
