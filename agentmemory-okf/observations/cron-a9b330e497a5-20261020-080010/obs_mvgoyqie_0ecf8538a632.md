---
type: CommandRun
title: Failed Himalaya command
description: Failed to list envelopes
resource: agentmemory://observation/obs_mvgoyqie_0ecf8538a632
tags: ["backend configuration issue", "commandrun"]
timestamp: 2026-10-20T13:00:52.784456+00:00
source: agentmemory
session_id: cron_a9b330e497a5_20261020_080010
importance: 7
confidence: 1
---
# Summary

The Himalaya command failed to list envelopes and returned an error due to a missing backend configuration.

## Facts
- Command: Himalaya --json envelope list --account default --page-size 30
- Output: {"error":"No backend matching `auto` is configured for this account","sources":[],"backtrace":null}
- Exit Code: 1

## Concepts
- backend configuration issue

## Files
- `/Users/davec`

_Importance: 7 · Confidence: 1_
