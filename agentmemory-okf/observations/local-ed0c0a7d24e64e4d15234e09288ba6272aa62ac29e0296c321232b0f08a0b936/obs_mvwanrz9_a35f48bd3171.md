---
type: FileRead
title: Cron receipt recovery deferred
description: A bug is stuck in the multiplex gateway cron receipts.
resource: agentmemory://observation/obs_mvwanrz9_a35f48bd3171
tags: ["Cron receipt recovery issues", "Multiplex gateway", "Cron scheduler", "fileread"]
timestamp: 2026-10-31T11:04:45.657618+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 8
confidence: 0.9
---
# Summary

Warning: A multiplex gateway cron receipts bug is stuck. Observed on a live install with 154 events and 2 permanently stuck. The error is related to an environment variable, which is not provided.

## Facts
- A multiplex gateway cron receipts that need recovery are deferred forever and never booked.
- Observed on a live install: **154 `Cron receipt recovery deferred` events** and two receipts permanently stuck (every retry hit the same wall).

## Concepts
- Cron receipt recovery issues
- Multiplex gateway
- Cron scheduler

_Importance: 8 · Confidence: 0.9_
