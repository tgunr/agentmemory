---
type: FileRead
title: Poisoned zfs receive stuck in D-state — cannot kill, cannot rollback
description: zfs receive stuck in D-state on /Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/SKILL.md
resource: agentmemory://observation/obs_mvdxzi65_e25c6fa3a7c2
tags: ["zfs receive process", "D-state process", "fileread"]
timestamp: 2026-10-18T14:50:06.648321+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

The observation describes a technical issue where the zfs receive process is stuck in D-state and cannot be killed. The process ID can be polled or waited for to eventually exit, but a reboot is required. Workaround options are provided, including rolling back to the last good anchor and re-running syncoid.

## Facts
- kernel I/O wait process ID (WCHAN) can be polled or waited for eventually exiting
- no signal-based fix for <D>-state processes, reboot required

## Concepts
- zfs receive process
- D-state process

## Files
- `/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/SKILL.md`

_Importance: 7 · Confidence: 0.9_
