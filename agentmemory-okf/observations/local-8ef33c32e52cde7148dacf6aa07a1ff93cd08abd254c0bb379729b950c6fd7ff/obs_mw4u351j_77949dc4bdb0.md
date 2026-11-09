---
type: file_edit
title: zpool upgrade required
description: No features enabled
resource: agentmemory://observation/obs_mw4u351j_77949dc4bdb0
tags: ["zpool upgrade", "file_edit"]
timestamp: 2026-11-06T10:30:44.547798+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 8
confidence: 1
---
# Summary

The zfs commands listed issues that require attention, including disabled features.

## Facts
- zfs list -H -o name,mounted,mountpoint -d 2 beta 2>&1
- zfs list -H -o name,mounted,mountpoint -d 2 tank 2>&1
- zpool status rpool 2>&1

## Concepts
- zpool upgrade

## Files
- `/`

_Importance: 8 · Confidence: 1_
