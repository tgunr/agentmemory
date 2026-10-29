---
type: FileRead
title: VMs attached to pool
description: Output from zfs command
resource: agentmemory://observation/obs_mvr25fq9_d4bd67794c9e
tags: ["zfs commands", "fileread"]
timestamp: 2026-10-27T19:07:42.173135+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 5
confidence: 0.9
---
# Summary

The agent ran an zfs command to list VMs attached to each pool, displaying the status and disk information. The output showed 35 VMs across 3 pools, revealing disk usage patterns.

## Facts
- Command to list VMs: zfs list -t volume -H -o name 2>/dev/null | cut -d/

## Concepts
- zfs commands

_Importance: 5 · Confidence: 0.9_
