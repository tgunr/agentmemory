---
type: CommandRun
title: Unify Hermes+Kilo history into AgentMemory via OKF index.
description: User wants Hermes + Kilo history searchable together and needs conversation context from both tools after a reorg / brew upgrade broke AM.
resource: agentmemory://observation/obs_msu3nv6b_a05a8532654e
tags: ["Sepcific topic: SQL migration", "commandrun"]
timestamp: 2026-08-15T08:14:13.131716+00:00
source: agentmemory
session_id: cron_9dfd463ca7d0_20260815_030042
importance: 6
confidence: 0.9
---
# Summary

Re-running `okf_to_agentmemory.py` fixes issues by actively pushing the consolidated OKF bundle INTO AM, fixing binary incompatibilities, and ensuring resiliency when a transient AM flap drops documents.

## Facts
- Consolidates Hermes and Kilo Code conversation history into one searchable store.

## Concepts
- Sepcific topic: SQL migration

## Files
- `/~/.hermes/scripts/okf_to_agentmemory.py`

_Importance: 6 · Confidence: 0.9_
