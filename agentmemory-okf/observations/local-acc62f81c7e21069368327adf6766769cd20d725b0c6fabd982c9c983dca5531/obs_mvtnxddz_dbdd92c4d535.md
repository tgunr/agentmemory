---
type: file_edit
title: sanoid-syncoid-operations edit
description: Offsite space recovery when snapshot pruning can't free enough space
resource: agentmemory://observation/obs_mvtnxddz_dbdd92c4d535
tags: ["zpool management", "snapshot pruning", "syncoid operations", "file_edit"]
timestamp: 2026-10-29T14:52:49.791661+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 7
confidence: 0.9
---
# Summary

The offsite pool `data1` ran out of space while trying to push an incremental delta, but the script was able to resume and avoid a restart.

## Facts
- Estimated delta size into free space (~502 GB)

## Concepts
- zpool management
- snapshot pruning
- syncoid operations

## Files
- `references/offsite-space-recovery.md`

_Importance: 7 · Confidence: 0.9_
