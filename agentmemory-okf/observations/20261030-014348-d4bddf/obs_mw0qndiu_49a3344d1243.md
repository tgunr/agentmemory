---
type: file_edit
title: Offsite pool space recovery
description: Finding deletable large files on the offsite target, snapshot pruning limitations, and safe deletion procedure
resource: agentmemory://observation/obs_mw0qndiu_49a3344d1243
tags: ["zpool list", "zfs send", "zpool destroy", "file_edit"]
timestamp: 2026-11-03T13:43:25.486559+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 7
confidence: 0.9
---
# Summary

Snapshots can't recover a huge amount of space after pruning on the offsite pool. We find the largest files on the ofsite target and use zpool to verify the free space and delete the files.
    Sometimes when the offsite's live data is not the same as the old snapshots on the target, we use this trick and recover the space in our target.

## Facts
- Deterministic failure on offsite target with ~502 GB delta into ~419 G free
- Total incremental size required is ~500G

## Concepts
- zpool list
- zfs send
- zpool destroy

## Files
- `/mnt/data1/data/_Archived Items/Personal.dtSparse`
- `/mnt/data1/data/data1/sources/data1`

_Importance: 7 · Confidence: 0.9_
