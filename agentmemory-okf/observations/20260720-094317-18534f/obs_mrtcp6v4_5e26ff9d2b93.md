---
type: CommandRun
title: Export and inspect agent memory schema
description: Retrieved 2.4MB export from local agentmemory API and analyzed top-level structure
resource: agentmemory://observation/obs_mrtcp6v4_5e26ff9d2b93
tags: ["agent memory export", "knowledge graph schema", "observation data model", "session-grouped data", "memory versioning and strength", "graph nodes and edges", "commandrun"]
timestamp: 2026-07-20T14:59:42.971927+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

The agent exported the complete agent memory database via a local API endpoint and used Python to inspect the JSON schema. The data model reveals a knowledge graph system (nodes + edges) layered over session-grouped observations, with explicit memory entities that track versioning, strength, and supersession relationships.

## Facts
- Exported from http://127.0.0.1:3111/agentmemory/export with Bearer auth from ~/.agentmemory/.env
- Export size: 2,404,224 bytes, HTTP 200, saved to /tmp/am_export/export.json
- Top-level keys: accessLogs (list[112]), graphEdges (list[129]), graphNodes (list[79]), memories (list[3]), observations (dict[61] keyed by sessionId)
- graphEdges contain sourceNodeId, targetNodeId, type (e.g., 'related_to'), weight, sourceObservationIds
- graphNodes contain name, properties (dict), type (e.g., 'function'), sourceObservationIds (list)
- observations are grouped by sessionId (e.g., 20260613_090729_23008600, 20260705_063647_f957b4) with nested observation objects
- Each observation has: concepts, confidence, facts, files, id, importance, narrative, sessionId, subtitle, timestamp, title, type
- memories have: concepts, content, files, id, isLatest, sessionIds, sourceObservationIds, strength, supersedes, title, type, version

## Concepts
- agent memory export
- knowledge graph schema
- observation data model
- session-grouped data
- memory versioning and strength
- graph nodes and edges

## Files
- `/tmp/am_export/export.json`
- `~/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
