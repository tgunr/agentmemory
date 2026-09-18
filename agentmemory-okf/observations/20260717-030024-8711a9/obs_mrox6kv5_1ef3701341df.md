---
type: FileRead
title: Viewed hermes-service-debugging reference for memory mutation procedures
description: Documentation on backfilling and purging stored agentmemory observations
resource: agentmemory://observation/obs_mrox6kv5_1ef3701341df
tags: ["agentmemory", "KV store", "binary file format", "backfill procedure", "API endpoint injection", "fileread"]
timestamp: 2026-07-17T12:34:15.700038+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 8
confidence: 1
---
# Summary

Accessed critical documentation outlining the process for mutating stored agentmemory observations through temporary API endpoints. The file explains the binary store format, required imports fixes, and the complete workflow including build, reload, and Python-driven API execution for backfilling~234 empty placeholder observations.

## Facts
- Store files are per-scope .bin files under state_store.db/ with JSON+6-byte footer format
- No built-in recompress or delete single observation endpoints exist in v0.9.x
- Must add temporary endpoints to src/triggers/api.ts for mass mutation operations
- Import traps: vectorIndexRemove and STREAM are not imported in api.ts by default
- recompress endpoint passes camelCase fields (toolName/toolInput/toolOutput) as raw arg
- delete endpoint requires KV delete, search index remove, vector index remove, and observationCount decrement

## Concepts
- agentmemory
- KV store
- binary file format
- backfill procedure
- API endpoint injection

## Files
- `references/mutating-stored-observations.md`

_Importance: 8 · Confidence: 1_
