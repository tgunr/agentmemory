---
type: CommandRun
title: ZFS Storage Admin
description: Change ZFS datasets mount at boot
resource: agentmemory://observation/obs_mvt3mfzy_08ec4f004cf2
tags: ["commandrun"]
timestamp: 2026-10-29T05:24:27.641656+00:00
source: agentmemory
session_id: 20261029_000838_cbf46d
importance: 6
confidence: 0.75
---
# Summary

The zfs-storage-admin tool provides guidance on changing which ZFS datasets stay mounted at boot. The tool advises users to ensure that the dataset's mount need is proven, never inferred from the pool name.

## Facts
- Never infer dataset mount need from pool name
- zfs receive writes into unmounted dataset

_Importance: 6 · Confidence: 0.75_
