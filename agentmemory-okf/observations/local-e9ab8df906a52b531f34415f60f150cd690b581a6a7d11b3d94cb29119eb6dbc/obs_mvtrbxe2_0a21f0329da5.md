---
type: file_edit
title: Test disk copy on ESXi
description: ESXi server does not support HFS+, verify boot.efi present
resource: agentmemory://observation/obs_mvtrbxe2_0a21f0329da5
tags: ["ESXi file system support", "file_edit"]
timestamp: 2026-10-29T16:28:07.750872+00:00
source: agentmemory
session_id: local-e9ab8df906a52b531f34415f60f150cd690b581a6a7d11b3d94cb29119eb6dbc
importance: 8
confidence: 0.9
---
# Summary

Esxi server did not support the hfs+ file system, resulting in an error when trying to mount the disk 4.  The error messages were logged in the dmesg.

## Facts
- Copying disk 3 to disk 4 in ESXi
- Comparison of disk 3 and 4

## Concepts
- ESXi file system support

## Files
- `/dev/zvol/tank/vm/vm-106-disk-3`
- `/dev/zvol/tank/vm/vm-106-disk-4-part1`

_Importance: 8 · Confidence: 0.9_
