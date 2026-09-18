---
type: file_edit
title: Update agentmemory configuration
description: update config.ts to point to new data dir and restart service.
resource: agentmemory://observation/obs_mrtpvbwd_3ffde3b5e505
tags: ["file_edit"]
timestamp: 2026-07-20T21:08:24.442287+00:00
source: agentmemory
session_id: 20260720_151652_9240be
importance: 8
confidence: 0.75
---
# Summary

The agentmemory service was updated with a new configuration that points to the new data directory. The old version of the service was deprecated and replaced. Additionally, the viewer proxy's timeout was increased from 10 seconds to 12 minutes, and the model used for the 'consolidate-pipeline' function was changed to LLama 3.2:3b to improve performance.

## Facts
- replaced outdated service with new one, updated data dir in config.ts to /Users/davec/data/agentmemory
- fixed viewer proxy timeout from 10s to 120000ms, updated model from qwen3:latest to LLama 3.2:3b, and increased LLM timeout

## Files
- `/Volumes/AI/agentmemory/config.ts`

_Importance: 8 · Confidence: 0.75_
