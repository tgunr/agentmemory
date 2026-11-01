---
type: file_edit
title: Hermes Cron Troubleshooting
description: Fix Hermes cron jobs that error or stop firing.
resource: agentmemory://observation/obs_mvwaps2z_540e41113e43
tags: ["global inference config", "Hermes cron jobs", "file_edit"]
timestamp: 2026-10-31T11:06:19.109512+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 6
confidence: 0.9
---
# Summary

This skill covers the scheduler-side causes of recurring Hermes cron jobs that fail. Two scenarios are discussed: global inference config drift and job fires with delivery failures. The user must edit the `jobs.json` file directly to fix the issue.

## Facts
- Fix Hermes cron jobs that error or stop firing.

## Concepts
- global inference config
- Hermes cron jobs

## Files
- `/Users/davec/.hermes/cron/jobs.json`

_Importance: 6 · Confidence: 0.9_
