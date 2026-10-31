---
type: CommandRun
title: Post-tool call for 'terminal': running Syncoid cron job
description: Running Syncoid cron job to check hourly datasets and podman snapshots
resource: agentmemory://observation/obs_mvuiydsp_fbbdd616a518
tags: ["cron job", "Sed expression", "commandrun"]
timestamp: 2026-10-30T05:21:25.076121+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 6
confidence: 1
---
# Summary

Syncoid's cron job was run on the terminal, but encountered issues with one of the datasets. It was able to successfully complete on another dataset and returned an empty cron list for a certain dataset.

## Facts
- Syncoid cron job encountered an error while running on 'alpha/data': sed: -e expression #1, char 12: extra characters after command (< error message detail>)
- Syncoid cron job successfully ran on 'alpha/www' (< output >)
- Syncoid cron job ran on 'dpool/podman', but returned an empty cron list (< error message detail>)

## Concepts
- cron job
- Sed expression

## Files
- `/etc/cron.d/syncoid-jobs`
- `/root/syncoid/syncoid.conf`

_Importance: 6 · Confidence: 1_
