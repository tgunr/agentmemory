---
type: file_edit
title: Sanoid + Syncoid Operations
description: The syncoid-runner wrapper, systemd/cron scheduling, and multi-destination replication topologies
resource: agentmemory://observation/obs_mvdtoq3c_b575a010d339
tags: ["Sanoid", "Syncoid", "Sanoid-runner", "Syncoid-runner", "file_edit"]
timestamp: 2026-10-18T12:49:45.199631+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

Sanoid and syncoid are separate daemons with separate failure modes. The syncoid-runner wrapper and systemd/cron scheduling are used to automate their operations. Diagnosing and operating these tools independently can help prevent common failure modes.

## Facts
- Sanoid takes snapshots (autosnap); syncoid replicates them
- They are separate daemons with separate failure modes — **always diagnose them independently**, because syncoid can look perfectly healthy while shipping stale data.

## Concepts
- Sanoid
- Syncoid
- Sanoid-runner
- Syncoid-runner

## Files
- `/etc/sanoid/sanoid.conf`
- `/etc/syncoid/syncoid.conf`
- `/etc/cron.d/syncoid-jobs`
- `/etc/systemd/system/syncoid.service`

_Importance: 7 · Confidence: 0.9_
