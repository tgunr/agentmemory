---
type: file_edit
title: SSH script execution with task
description: zfs destroy snapshot data1/sources
resource: agentmemory://observation/obs_mvdtjmlc_444fc8e31688
tags: ["zfs, ssh, batch mode, timeout", "file_edit"]
timestamp: 2026-10-18T12:45:47.418519+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

The provided SSH script is designed to destroy snapshots in a specific pool. However, the command encountered a timeout, resulting in the script being terminated. This issue should be addressed to optimize the script's execution.

## Facts
- Command executed: ssh pve.root 'ssh -o BatchMode=yes -o ConnectTimeout=8 -o ServerAliveInterval=15 root@syncoid.polymicro.net \\\"echo \\\"=== count ===\\\"; zfs list -H -o name -t snapshot -r data1/sources | wc -l; echo \\\"=== destroy all non-anchor ===\\\"; zfs list -H -o name -t snapshot -s creation -r data1/sources | grep -v \\\"autosnap_2026-05-31_04:03:29\\\" | xargs -I{} sh -c \\\"zfs destroy {}\\\" 2>&1; echo DESTROY_DONE; echo \\\"=== remaining ===\\\"; zfs list -H -o name -t snapshot -r data1/sources | wc -l; echo \\\"=== pool free ===\\\"; zpool list -o name,alloc,free,cap data1\\'
- Command timed out after 300s with exit code 124

## Concepts
- zfs, ssh, batch mode, timeout

_Importance: 7 · Confidence: 0.9_
