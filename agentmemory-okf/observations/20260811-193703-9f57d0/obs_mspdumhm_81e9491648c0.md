---
type: FileRead
title: Create nightly OKF index cronjob
description: Run shell script at /Users/davec/.hermes/scripts/nightly_okf_index.sh to rebuild unified Kilo+Hermes conversation bundle and indexes new/changed conversations into AgentMemory.
resource: agentmemory://observation/obs_mspdumhm_81e9491648c0
tags: ["Shell scripting", "Cron jobs", "fileread"]
timestamp: 2026-08-12T01:00:33.749990+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 4
confidence: 0.9
---
# Summary

Cron job was created for nightly OKF index consolidation, involving a shell script run via bash. This will rebuild the conversation bundle and update local AgentMemory.

## Facts
- Created new cronjob: 'nightly-okf-index'

## Concepts
- Shell scripting
- Cron jobs

_Importance: 4 · Confidence: 0.9_
