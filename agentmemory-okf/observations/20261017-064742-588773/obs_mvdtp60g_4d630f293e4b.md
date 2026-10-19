---
type: file_edit
title: Sanoid and Syncoid Monitoring Service
description: Aggregates sanoid health, capacity, and snapshot checks into a single
resource: agentmemory://observation/obs_mvdtp60g_4d630f293e4b
tags: ["sanoid", "Syncoid", "Nagios", "file_edit"]
timestamp: 2026-10-18T12:50:05.863862+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

The tool "skill_view" successfully executed the system call "sanoid-syncoid-operations" and aggregated sanoid health, capacity, and snapshot checks into a single Nagios-compatible status line with the worst-case exit code.

## Facts
- ran command "sanoid-syncoid-operations" with arguments (--quiet 2>&1)

## Concepts
- sanoid
- Syncoid
- Nagios

## Files
- `/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/templates/sanoid-syncoid-monitor.sh`

_Importance: 7 · Confidence: 0.9_
