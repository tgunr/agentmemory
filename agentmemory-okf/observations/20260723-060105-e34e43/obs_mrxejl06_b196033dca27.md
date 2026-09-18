---
type: Observation
title: Cwd auto-sync bug fix
description: Profile GUI profile switches issue
resource: agentmemory://observation/obs_mrxejl06_b196033dca27
tags: ["profile CWD auto-sync", "observation"]
timestamp: 2026-07-23T11:02:25.297284+00:00
source: agentmemory
session_id: 20260723_060105_e34e43
importance: 4
confidence: 0.9
---
# Summary

The code attempted to replace a profile bug by adding a new GUI fix; however, the operation was invalid due to no target specified.

## Facts
- Previous error: TERMINAL_CWD from prior profile was inherited wrong;
- New fix: hermes/scripts/profile_cwd_sync.sh on shell_init_files;

## Concepts
- profile CWD auto-sync

_Importance: 4 · Confidence: 0.9_
