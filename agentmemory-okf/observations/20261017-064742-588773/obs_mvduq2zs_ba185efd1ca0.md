---
type: FileRead
title: Syncoid Config Maintenance
description: Updated syncoid.conf and cron file to prevent errors and improve maintenance
resource: agentmemory://observation/obs_mvduq2zs_ba185efd1ca0
tags: ["syncoid configuration</consult>", "option_recursive", "fileread"]
timestamp: 2026-10-18T13:18:48.228853+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

Ran syncoid-syncoid-operations tool to update syncoid conf and cron file. Made changes to remove stale blocks and excluded pods from dataset options.

## Facts
- Updated syncoid.conf to remove stale blocks
- Generated cron file to stagger start times for syncoid-runner

## Concepts
- syncoid configuration</consult>
- option_recursive

## Files
- `/etc/syncoid/syncoid.conf`
- `/etc/cron.d/syncoid-jobs`

_Importance: 7 · Confidence: 0.9_
