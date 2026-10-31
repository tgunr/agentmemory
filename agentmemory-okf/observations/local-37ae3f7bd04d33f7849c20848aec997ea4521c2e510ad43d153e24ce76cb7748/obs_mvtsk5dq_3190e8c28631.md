---
type: FileRead
title: Terminal: ZFS snapshot patterns
description: Retrieve ZFS snapshot patterns
resource: agentmemory://observation/obs_mvtsk5dq_3190e8c28631
tags: ["ZFS snapshots", "fileread"]
timestamp: 2026-10-29T17:02:30.970098+00:00
source: agentmemory
session_id: local-37ae3f7bd04d33f7849c20848aec997ea4521c2e510ad43d153e24ce76cb7748
importance: 5
confidence: 0.9
---
# Summary

The script executed a 'ssh' command to retrieve the ZFS snapshot file, then extracted and parsed the files to display their details, specifically listing the human-wrt (human-readable) snapshot names and their corresponding ZFS snapshot creation dates.

## Facts
- Command: ssh pve.root 'echo \"== snapshot name patterns on rpool/root ==\";...
- Total snapshots: 217, auto-snaps: 97, human-wrt snapshots: 7, 1-day updates: 4, syncoid refs: 4

## Concepts
- ZFS snapshots

_Importance: 5 · Confidence: 0.9_
