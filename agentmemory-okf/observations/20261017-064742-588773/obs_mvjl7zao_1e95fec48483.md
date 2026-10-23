---
type: CommandRun
title: Failed terminal sync command
description: No data in syncoid repository
resource: agentmemory://observation/obs_mvjl7zao_1e95fec48483
tags: ["syncoid repository", "commandrun"]
timestamp: 2026-10-22T13:39:24.136777+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 4
confidence: 1
---
# Summary

Successful terminal command run with exit code 0, but failed to sync data due to zfs receive process

## Facts
- Failed syncoid command with output WARNING: Cannot sync now: data1/sources is already target of a zfs receive process.
- Syncoid command timeout of 10 minutes set for command
- Local workspace at /Users/davec/.hermes/profiles/systems/workspace/pveroot was used

## Concepts
- syncoid repository

_Importance: 4 · Confidence: 1_
