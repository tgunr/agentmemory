---
type: file_edit
title: Syncoid Runner Cleanup Command
description: Executed SSH command to clean up and dry-run
resource: agentmemory://observation/obs_mw0qawqh_f82603904f4c
tags: ["Syncoid Runner cleanup", "file_edit"]
timestamp: 2026-11-03T13:33:43.861223+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 8
confidence: 0.9
---
# Summary

Executed a Syncoid Runner cleanup command to dry-run and collect output, identifying snapshots that would be deleted.

## Facts
- Tool used: terminal
- Command: ssh pve.root '/usr/local/bin/syncoid-runner --cleanup --dry-run --dataset alpha/data < /dev/null > /tmp/dry.txt 2>&1; ...

## Concepts
- Syncoid Runner cleanup

## Files
- `/tmp/dry.txt`

_Importance: 8 · Confidence: 0.9_
