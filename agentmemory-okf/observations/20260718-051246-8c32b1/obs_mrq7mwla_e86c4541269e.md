---
type: Search
title: Viewed skill documentation on Hermes sessions vs Agentmemory architecture
description: Technical architecture reference for memory provider integration
resource: agentmemory://observation/obs_mrq7mwla_e86c4541269e
tags: ["Hermes sessions architecture", "Agentmemory provider integration", "Memory consolidation pattern", "Semantic knowledge graph", "search"]
timestamp: 2026-07-18T10:14:39.735953+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

Viewed skill documentation explaining the dual-layer architecture between Hermes sessions and Agentmemory memory provider. Sessions capture raw conversation history with indefinite retention, while Agentmemory extracts structured knowledge with semantic search and auto-pruning. This enables automatic organization without manual folder hierarchies.

## Facts
- Hermes sessions store full conversation transcripts in SQLite state.db with FTS5 search indexing
- Agentmemory stores structured facts in standalone.json + data directory with TTL-based consolidation
- When both active, Hermes captures everything and Agentmemory extracts durable knowledge in background
- Future sessions get context injection from Agentmemory's consolidated memories
- Each profile has independent sessions AND independent agentmemory indexing
- Integration can be verified via `hermes sessions stats` and `agentmemory status` commands

## Concepts
- Hermes sessions architecture
- Agentmemory provider integration
- Memory consolidation pattern
- Semantic knowledge graph

## Files
- `references/sessions-vs-agentmemory.md`

_Importance: 6 · Confidence: 1_
