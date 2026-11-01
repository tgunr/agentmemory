---
type: file_edit
title: fix hermes cron jobs broken by inference-config drift
description: Fix Hermes cron jobs broken by inference-config drift
resource: agentmemory://observation/obs_mvwlw36k_a503a753e988
tags: ["global inference-config drift", "file_edit"]
timestamp: 2026-10-31T16:19:09.205514+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 7
confidence: 0.9
---
# Summary

A Hermes cron job is broken by global inference-config drift and cannot be updated by cronjob update tool

## Facts
- Heremens cron jobs are affected by global inference-config drift
- Cronjob update tool does not persist provider/model into snapshot fields

## Concepts
- global inference-config drift

## Files
- `/home/user/.hermes/cron/jobs.json`

_Importance: 7 · Confidence: 0.9_
