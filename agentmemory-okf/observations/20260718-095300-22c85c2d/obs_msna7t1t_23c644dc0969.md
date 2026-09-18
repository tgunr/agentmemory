---
type: file_edit
title: okf_mirror.sh file contents
description: OKF bundle submodule mirror
resource: agentmemory://observation/obs_msna7t1t_23c644dc0969
tags: ["python3", "file_edit"]
timestamp: 2026-08-10T13:43:17.778360+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 8
confidence: 0.9
---
# Summary

OKF mirror script edits contents, transforming data for export and updating submodule.

## Facts
- Script to mirror the local AgentMemory service into the OKF bundle submodule, runs nightly via Hermes cron.
- The script exports the full corpus (authoritative backup shape), transforms with okf_bridge.py, and commits/pushes with updates.

## Concepts
- python3

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/okf_mirror.sh`

_Importance: 8 · Confidence: 0.9_
