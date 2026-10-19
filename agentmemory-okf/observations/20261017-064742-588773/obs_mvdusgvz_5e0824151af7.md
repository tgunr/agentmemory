---
type: file_edit
title: Fixed zfs receive pipeline and syncoid error on target host
description: No connection to OFFSITE could be established.
resource: agentmemory://observation/obs_mvdusgvz_5e0824151af7
tags: ["zfs receive pipeline management", "syncoid operations", "file_edit"]
timestamp: 2026-10-18T13:20:39.519023+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 8
confidence: 0.9
---
# Summary

The zfs receive pipeline and syncoid error on the target host was fixed by killing the receive pipeline and rolling back the target to its last good anchor.

## Facts
- New receive pipeline was killed and rolled back to its last good anchor.
- The target host's syncoid was re-run with the kept anchor.

## Concepts
- zfs receive pipeline management
- syncoid operations

## Files
- `/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/references/error-catalog.md`

_Importance: 8 · Confidence: 0.9_
