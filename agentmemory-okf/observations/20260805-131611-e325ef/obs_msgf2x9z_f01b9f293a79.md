---
type: file_edit
title: Repair Hermes cron jobs that error from inference-config drift
description: A scheduled watchdog, mirror, or reporter stopped producing output
resource: agentmemory://observation/obs_msgf2x9z_f01b9f293a79
tags: ["Cron jobs", "file_edit"]
timestamp: 2026-08-05T18:25:05.011063+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 7
confidence: 0.9
---
# Summary

The skill uses editing jobs.json directly to debug issues with Hermes cron jobs and fix a common error
    due to unintended spend caused by changes to the global inference config. No loop is needed as updating the job 
    with <code>cronjob update</code> does not persist provider/model into the snapshot fields.

## Facts
- RuntimeError: Skipped to prevent unintended spend: global inference config drifted

## Concepts
- Cron jobs

## Files
- `~/.hermes/cron/jobs.json`

_Importance: 7 · Confidence: 0.9_
