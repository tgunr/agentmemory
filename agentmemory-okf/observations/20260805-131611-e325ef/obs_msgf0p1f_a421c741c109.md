---
type: file_write
title: Cron Job Failed due to Global Config Drift
description: Nous and tencent/hy3:free changed, but not all jobs were updated.
resource: agentmemory://observation/obs_msgf0p1f_a421c741c109
tags: ["file_write"]
timestamp: 2026-08-05T18:23:21.023364+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 8
confidence: 0.75
---
# Summary

The job `2fb1c7a86634` Apple FM Serve failed due to global config drift. The fix involves discovering the current global config, patching the affected jobs, and re-running them to confirm success. A worked example is provided.

## Facts
- The global config changed from 'kilocode' to 'nous' for the provider and from 'kilo-auto/efficient' to 'tencent/hy3:free' for the model.
- The job `2fb1c7a86634` Apple FM Serve was updated with the new snapshots, but not all jobs were fixed.

## Files
- `references/jobs-json-pin-fields.md`

_Importance: 8 · Confidence: 0.75_
