---
type: Observation
title: Create cronjob for nightly maintenance task
description: MIRROR OKF CONVERSATIONS CREATION
resource: agentmemory://observation/obs_mrw8m6om_48f65397cd86
tags: ["observation"]
timestamp: 2026-07-22T15:28:42.836121+00:00
source: agentmemory
session_id: 20260722_093959_0d09a2
importance: 4
confidence: 0.75
---
# Summary

The script creates a dated gzip archive and exports conversation sessions into a plain-text bundle. The cron job is scheduled to run nightly at 3am.

## Facts
- Cron job 'hermes-conversations-okf-mirror' created.

## Files
- `/Users/davec/.hermes/scripts/hermes-okf-mirror.sh`

_Importance: 4 · Confidence: 0.75_
