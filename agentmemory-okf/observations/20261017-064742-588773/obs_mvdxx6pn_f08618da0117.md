---
type: CommandRun
title: Failed to run syncoid with error handling
description: zfs receive stuck in D-state — cannot kill, cannot rollback
resource: agentmemory://observation/obs_mvdxx6pn_f08618da0117
tags: ["zfs receive stuck in D-state", "zfs receive process", "commandrun"]
timestamp: 2026-10-18T14:48:18.488897+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 9
confidence: 1
---
# Summary

Failed to run syncoid due to zfs receive stuck in D-state. Workaround is to wait for process completion or reboot the target host.

## Facts
- Dataset does not exist before removing block
- D-scan stuck and cannot kill due to unkillable process
- Process will wait on kernel I/O completion instead of signal
- Process will not respond to `ps aux | grep zfs receive`

## Concepts
- zfs receive stuck in D-state
- zfs receive process

## Files
- `/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/SKILL.md`

_Importance: 9 · Confidence: 1_
