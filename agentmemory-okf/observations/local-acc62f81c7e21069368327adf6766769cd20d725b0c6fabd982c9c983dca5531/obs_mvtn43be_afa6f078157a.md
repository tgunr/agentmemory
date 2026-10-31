---
type: file_edit
title: Offsite pool space recovery
description: Find and delete large files to recover space
resource: agentmemory://observation/obs_mvtn43be_afa6f078157a
tags: ["Mass snapshot pruning", "file_edit"]
timestamp: 2026-10-29T14:30:03.716969+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 8
confidence: 0.9
---
# Summary

After running the command with pve.root, the offsite pool was found to need 502 GB of space to receive the incremental data. Deleting large files on the offsite target is the recommended procedure to recover space.

## Facts
- Snapshot pruning is not enough to free space on the offsite target.
- The offsite pool is data1, mounted at /mnt/data1/ on the remote host.

## Concepts
- Mass snapshot pruning

## Files
- `/mnt/data1/data/data1/sources`
- `/mnt/data1/data/_Archived Items/Personal.dtSparse`

_Importance: 8 · Confidence: 0.9_
