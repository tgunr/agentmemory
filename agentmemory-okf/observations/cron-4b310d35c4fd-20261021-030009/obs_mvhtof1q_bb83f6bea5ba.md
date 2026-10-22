---
type: file_edit
title: Unify Hermes+Kilo history into AgentMemory via OKF index.
description: Unifies Hermes and Kilo Code conversation history into one searchable store.
resource: agentmemory://observation/obs_mvhtof1q_bb83f6bea5ba
tags: ["React hooks", "SQL migration", "auth middleware", "file_edit"]
timestamp: 2026-10-21T08:00:35.625836+00:00
source: agentmemory
session_id: cron_4b310d35c4fd_20261021_030009
importance: 5
confidence: 0.9
---
# Summary

Unifies Hermes and Kilo Code conversation history into one searchable store. For cases where user wants Hermes + Kilo history searchable together, building consumer on top of AM that needs conversation context from both tools, or after a `/Volumes/AI` reorg / `brew upgrade` broke AM.

## Facts
- AM's normal data flow is AM → OKF only (the `okf_mirror.sh` export) — it does NOT read the OKF bundles back in.
- Reads `~/data/consolidated-okf/bundle/*.md` (output of the consolidator that merges the Hermes `hermes-okf` export + the Kilo `kilo-okf` export).

## Concepts
- React hooks
- SQL migration
- auth middleware

## Files
- `/Volumes/AI/agentmemory/okf_to_agentmemory.py`

_Importance: 5 · Confidence: 0.9_
