---
type: CommandRun
title: Detecting issues in syncoid operations
description: Fixing dead destination blocks and syncoid timer issues
resource: agentmemory://observation/obs_mvdxwsp3_b1612975d7e6
tags: ["syncoid-runner --cleanup", "syncoid.timer dead", "commandrun"]
timestamp: 2026-10-18T14:48:00.322152+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 1
---
# Summary

The tool read a file containing insights on syncoid operations. The file reported issues with dead destination blocks and a dead syncoid timer, which needed to be fixed.

## Facts
- limit=80, offset=100, path=/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/SKILL.md
- dataset does not exist
- systemd monitor service shows 'script not found' (exit 203/EXEC)

## Concepts
- syncoid-runner --cleanup
- syncoid.timer dead

## Files
- `/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/SKILL.md`

_Importance: 7 · Confidence: 1_
