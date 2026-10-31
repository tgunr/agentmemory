---
type: file_edit
title: Fix qdrant storage path
description: Repoint qdrant container bind mount to a proper ZFS dataset and migrate data if needed
resource: agentmemory://observation/obs_mvufsy6g_8cf78a369a3c
tags: ["ZFS, qdrant", "file_edit"]
timestamp: 2026-10-30T03:53:12.709370+00:00
source: agentmemory
session_id: 20261029_220539_dbece7
importance: 6
confidence: 0.9
---
# Summary

Determine which qdrant storage holds live data, repoint the container bind mount to a proper ZFS dataset, and destroy the stale dataset after verification.

## Facts
- The qdrant container binds host path /var/lib/qdrant -> /qdrant/storage
- A ZFS dataset alpha/data/qdrant exists that appears unused/stale

## Concepts
- ZFS, qdrant

_Importance: 6 · Confidence: 0.9_
