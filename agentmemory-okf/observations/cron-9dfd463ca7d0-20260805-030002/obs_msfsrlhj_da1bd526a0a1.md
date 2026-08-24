---
type: file_edit
title: Batch export attempt fails
description: Exports to http://127.0.0.1:3111 failed
resource: agentmemory://observation/obs_msfsrlhj_da1bd526a0a1
tags: ["Agent Memory Export", "file_edit"]
timestamp: 2026-08-05T08:00:24.964467+00:00
source: agentmemory
session_id: cron_9dfd463ca7d0_20260805_030002
importance: 5
confidence: 1
---
# Summary

The batch export attempt using bash /Volumes/AI/Servers/agentmemory-kilo-hooks/okf_mirror.sh resulted in failures. The agent was able to export successfully despite the errors.

## Facts
- Command sequence: bash /Volumes/AI/Servers/agentmemory-kilo-hooks/okf_mirror.sh
- Output: EXPORT_FAILED attempt 1/3: HTTP 500 from http://127.0.0.1:3111
- Output: EXPORT_FAILED attempt 2/3: HTTP 500 from http://127.0.0.1:3111
- Output: EXPORT_FAILED attempt 3/3: HTTP 500 from http://127.0.0.1:3111
- Output: EXPORT_FAILED: agentmemory export at http://127.0.0.1:3111 failed after 3 attempts
- Popping nested shell level 2-->1 (no longer nested)

## Concepts
- Agent Memory Export

_Importance: 5 · Confidence: 1_
