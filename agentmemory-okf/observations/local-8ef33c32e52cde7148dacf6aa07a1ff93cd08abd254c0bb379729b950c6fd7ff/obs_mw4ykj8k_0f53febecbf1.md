---
type: file_edit
title: patching zfs-storage-admin configuration
description: importing rescue/emergency pool shadow scenario
resource: agentmemory://observation/obs_mw4ykj8k_0f53febecbf1
tags: ["zfs caching file issues", "file_edit"]
timestamp: 2026-11-06T12:36:14.561741+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 8
confidence: 0.9
---
# Summary

patched the zfs-storage-admin configuration to prevent shadowing of the running root and potential random unit failures with an imported rescue/emergency pool.

## Facts
- zfs-import-scan.service condition triggers with cachefile=none

## Concepts
- zfs caching file issues

_Importance: 8 · Confidence: 0.9_
