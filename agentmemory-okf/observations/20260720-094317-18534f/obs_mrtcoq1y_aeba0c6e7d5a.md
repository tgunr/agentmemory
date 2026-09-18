---
type: CommandRun
title: Agent memory diagnostic script execution
description: Checks config flags, compression model, and API endpoint availability
resource: agentmemory://observation/obs_mrtcoq1y_aeba0c6e7d5a
tags: ["Agent Memory Architecture", "LLM Context Compression", "Knowledge Graph Extraction", "API Endpoint Diagnostics", "Semantic Consolidation", "commandrun"]
timestamp: 2026-07-20T14:59:21.173820+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

An investigative shell script audited the agent memory system's configuration and API endpoints. It confirmed that core LLM-driven memory features (graph extraction, consolidation, auto-compression) are enabled and the main export endpoint is accessible, while several administrative endpoints returned HTTP 405 errors because they do not support GET requests.

## Facts
- Script /tmp/am_invest3.sh executed successfully with exit code 0
- Enabled AgentMemory features: GRAPH_EXTRACTION, CONSOLIDATION, AUTO_COMPRESS, INJECT_CONTEXT
- Compression model is configured as provider.model
- /agentmemory/export endpoint returned HTTP 200 with a ~2.4MB JSON payload
- Endpoints /agentmemory/obsidian/export, /verify, /diagnostics/heal, and /snapshot/create returned HTTP 405 (Method Not Allowed for GET)

## Concepts
- Agent Memory Architecture
- LLM Context Compression
- Knowledge Graph Extraction
- API Endpoint Diagnostics
- Semantic Consolidation

## Files
- `/tmp/am_invest3.sh`

_Importance: 5 · Confidence: 1_
