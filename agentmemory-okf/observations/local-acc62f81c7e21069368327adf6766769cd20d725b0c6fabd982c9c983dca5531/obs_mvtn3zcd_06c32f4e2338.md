---
type: CommandRun
title: Sanoid and Syncoid Operations
description: (sanoid-syncoid-operations) diagnose and operate sanoid and syncoid
resource: agentmemory://observation/obs_mvtn3zcd_06c32f4e2338
tags: ["sanoid-syncoid operations", "commandrun"]
timestamp: 2026-10-29T14:29:58.564723+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 7
confidence: 0.9
---
# Summary

Sanoid (ZFS snapshot manager) and Syncoid (ZFS replication via syncoid CLI) are separate daemons with different failure modes. Auto-nomadic diagnostics, including source autosnap, syncoid stamps on source and target, per-dataset logs, and sanoid service status, are recommended.

## Facts
- Sanoid takes snapshots (autosnap); syncoid replicates them.

## Concepts
- sanoid-syncoid operations

## Files
- `/etc/cron.d/syncoid-jobs`

_Importance: 7 · Confidence: 0.9_
