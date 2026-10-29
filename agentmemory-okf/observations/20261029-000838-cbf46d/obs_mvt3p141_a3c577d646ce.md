---
type: Observation
title: Execute code on pve local using ssh
description: Unmount deepest-first tank filesystems
resource: agentmemory://observation/obs_mvt3p141_a3c577d646ce
tags: ["zfs unmount", "observation"]
timestamp: 2026-10-29T05:26:28.316154+00:00
source: agentmemory
session_id: 20261029_000838_cbf46d
importance: 5
confidence: 0.9
---
# Summary

The tool execute_code was called with a code that attempted to unmount the deepest-first tank filesystems. However, an error occurred due to pool or dataset being busy, and the operation was unsuccessful.

## Facts
- Failed to unmount pool or dataset is busy error
- zfs-2.4.4-pve1 and zfs-kmod-2.4.4-pve1 installed

## Concepts
- zfs unmount

## Files
- `/tank/vm/subvol-100-disk-1`
- `/tank/alpha/root`

_Importance: 5 · Confidence: 0.9_
