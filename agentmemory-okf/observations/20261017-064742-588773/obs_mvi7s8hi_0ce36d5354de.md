---
type: file_write
title: Offsite pool space recovery
description: Write file to mount remote host's offsite pool
resource: agentmemory://observation/obs_mvi7s8hi_0ce36d5354de
tags: ["_snapshot pruning", "Incremental sizing", "file_write"]
timestamp: 2026-10-21T14:35:28.366033+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

During snapshot pruning, the offsite pool is checked, and if the incremental size cannot be saved, delete files one at a time, verifying space is freed after each.

## Facts
- Around 5G of space is freed per snapshot pruning process.
- (~500G incremental) requires significantly more space.

## Concepts
- _snapshot pruning
- Incremental sizing

## Files
- `/Users/davec/references/offsite-space-recovery.md`

_Importance: 7 · Confidence: 0.9_
