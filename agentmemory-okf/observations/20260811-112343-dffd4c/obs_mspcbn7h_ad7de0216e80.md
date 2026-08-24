---
type: CommandRun
title: Unify Hermes+Kilo history into AgentMemory via OKF index.
description: Reverse-indexer for consolidating OKF bundles.
resource: agentmemory://observation/obs_mspcbn7h_ad7de0216e80
tags: ["commandrun"]
timestamp: 2026-08-12T00:17:48.602948+00:00
source: agentmemory
session_id: 20260811_112343_dffd4c
importance: 7
confidence: 0.75
---
# Summary

Unify Hermes + Kilo history into AgentMemory via OKF index. This involves running a reverse-indexer script that consolidates OKF bundles and posts them to the AgentMemory repository.

## Facts
- A reverse-indexer scripts the consolator that merges the Hermes OKF export and Kilo OKF export.
- The script uses `post_remember` to retry with backoff on 404/5xx errors.

_Importance: 7 · Confidence: 0.75_
