---
type: file_edit
title: Sanoid fix for "no snapshots matching"
description: Sanoid fix for recurring "no snapshots matching" issue
resource: agentmemory://observation/obs_mw0uz5eq_9447cbe46254
tags: ["Snapshot cleanup groups by dataset", "file_edit"]
timestamp: 2026-11-03T15:44:33.310758+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 7
confidence: 0.9
---
# Summary

The fix resolves the recurring "no snapshots matching" issue by editing the runner to apply retention by dataset, and to sanoid's autosnaps too, only touching @syncoid_ stamps. This ensures the correct behavior and prevents destruction of child's replication anchor every night.

## Facts
- Sanoid's --cleanup applies retention to global newest-N, not per dataset, destroying child's replication anchor

## Concepts
- Snapshot cleanup groups by dataset

## Files
- `synoid-syncoid-operations.txt`

_Importance: 7 · Confidence: 0.9_
