---
type: file_edit
title: Trim Mount Units Procedure
description: Patches zfs-storage-admin operation to prevent PVE `zfspool` storages re-running `zfs mount -a`
resource: agentmemory://observation/obs_mvt4eqtt_c7a556ae238e
tags: ["OpenZFS 2.x", "PVE::Storage::ZFSPoolPlugin", "file_edit"]
timestamp: 2026-10-29T05:46:28.045673+00:00
source: agentmemory
session_id: 20261029_000838_cbf46d
importance: 7
confidence: 0.9
---
# Summary

On 2026-10-29T05:46:28.045673+00:00, the post_tool_call hook triggered a patch operation on zfs-storage-admin. The updated operation disables certain mount units and verifies that receive-into-unmounted-target works.

Recent findings highlight the issue with PVEnode storage re-mounting everything between unmounts. To prevent this, it is crucial to set canmount=off before unmounting. Furthermore, it's essential to unmount children before parents to avoid failures with `zfs set canmount=off` on a parent with mounted children.

A script to trim mount units, batch property sets, and unmount deepest-first is provided, along with a verification process for receive-into-unmounted-target.

## Facts
- PVEnode storage re-mounts everything between unmounts
- Set canmount=off before unmounting

## Concepts
- OpenZFS 2.x
- PVE::Storage::ZFSPoolPlugin

## Files
- `None`

_Importance: 7 · Confidence: 0.9_
