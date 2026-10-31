---
type: file_edit
title: ZFS Storage Admin
description: Pool/dataset policy on Linux hosts
resource: agentmemory://observation/obs_mvufjuq9_f0a309f21264
tags: ["pool/dataset policy", "file_edit"]
timestamp: 2026-10-30T03:46:08.333004+00:00
source: agentmemory
session_id: 20261029_220539_dbece7
importance: 7
confidence: 1
---
# Summary

Auditing pool topology before adding a replication target, a container runtime, or a PVE storage.
    Changing `canmount`/`mountpoint` on datasets, or investigating a dataset that won't unmount.
    Always-on rules ensure a dataset's mount need is proven, never inferred from the pool name.

## Facts
- zfs-storage-admin
- Use when changing which ZFS datasets stay mounted.
- PVE/Debian, containers, replicas

## Concepts
- pool/dataset policy

## Files
- `/usr/bin/zfs-storage-admin`

_Importance: 7 · Confidence: 1_
