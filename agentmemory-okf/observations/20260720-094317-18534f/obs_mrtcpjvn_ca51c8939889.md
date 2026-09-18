---
type: CommandRun
title: Inspect agentmemory data size, config flags, and API endpoints
description: Checking storage scope, feature flags, and API parameter requirements
resource: agentmemory://observation/obs_mrtcpjvn_ca51c8939889
tags: ["agentmemory configuration", "feature flags", "state store management", "API endpoint discovery", "data directory structure", "consolidation pipeline", "graph extraction", "commandrun"]
timestamp: 2026-07-20T14:59:59.839764+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Executed a diagnostic command to assess agentmemory storage footprint, configuration state, and API endpoint signatures. Found 8.1M data directory with 88 state store files and all major feature flags enabled (auto-compress, context injection, consolidation, graph extraction). The search for obsidian/export and session/end endpoint parameters in the compiled index.mjs returned no results, suggesting these may use different naming or be handled elsewhere.

## Facts
- Data directory /Users/davec/data/agentmemory/data is 8.1M
- 88 state_store.db files exist in the data directory
- Config flags found in /Users/davec/.agentmemory/.env: AGENTMEMORY_AUTO_COMPRESS, AGENTMEMORY_INJECT_CONTEXT, CONSOLIDATION_ENABLED, GRAPH_EXTRACTION_ENABLED
- All four feature flags are set to true in .env
- AGENTMEMORY_AUTO_COMPRESS: Run LLM compression on every observation batch (requires provider key)
- AGENTMEMORY_INJECT_CONTEXT: Inject recalled memories back into agent prompts
- CONSOLIDATION_ENABLED: Run 4-tier consolidation pipeline (memories → semantic → procedural)
- GRAPH_EXTRACTION_ENABLED: Extract concept-graph edges on remember for graph-traversal recall
- No matches found for obsidian/export or session/end patterns in /Volumes/AI/agentmemory/dist/index.mjs

## Concepts
- agentmemory configuration
- feature flags
- state store management
- API endpoint discovery
- data directory structure
- consolidation pipeline
- graph extraction

## Files
- `/Users/davec/data/agentmemory/data`
- `/Users/davec/.agentmemory/.env`
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 5 · Confidence: 1_
