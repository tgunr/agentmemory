---
type: file_edit
title: Template and ZFS cleanup script
description: Lunch cleaning script to manage daily and weekly retention policies.
resource: agentmemory://observation/obs_mvuixe00_da2f971e63ae
tags: ["script cleanup logic", "retention policies", "file_edit"]
timestamp: 2026-10-30T05:20:38.683396+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 5
confidence: 1
---
# Summary

A cleaning script was executed via SSH to manage daily and weekly retention policies for a dataset.

## Facts
- SSH command executed to run the cleaning script
- Custom bash script executed to parse and filter snapshots
- Output of `zpool events` command for debugging purposes

## Concepts
- script cleanup logic
- retention policies

## Files
- `/root/syncoid/syncoid.conf`
- `/root/src/sanoid-master/syncoid-runner`

_Importance: 5 · Confidence: 1_
