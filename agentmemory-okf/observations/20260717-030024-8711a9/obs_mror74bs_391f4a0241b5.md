---
type: file_write
title: Documentation for mutating agentmemory observations
description: Attempted write of backfill/purge procedure documentation failed due to missing skill name
resource: agentmemory://observation/obs_mror74bs_391f4a0241b5
tags: ["agentmemory observation storage", "KV scope binary format", "REST API endpoint design", "BM25 and vector index management", "service reload procedures", "temporary endpoint pattern", "file_write"]
timestamp: 2026-07-17T09:46:43.235831+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Attempted to document the procedure for mutating already-stored agentmemory observations (backfill/purge operations). The documentation describes the binary store format, the lack of built-in endpoints for recompression/deletion, and a workaround recipe involving temporary API endpoints. The write operation failed because no skill name was provided in the tool call.

## Facts
- Attempted to write documentation about mutating stored agentmemory observations via skill_manage tool
- Store format: per-scope .bin files under state_store.db/ with JSON record + 6-byte trailing footer
- No built-in recompress or delete observation endpoint exists in v0.9.x
- Recipe used 2026-07-17 to backfill+purge ~234 empty placeholder observations
- Temporary endpoints added to src/triggers/api.ts: POST /agentmemory/recompress and POST /agentmemory/observations/delete
- Import traps: vectorIndexRemove and STREAM not imported in api.ts by default
- Service must be fully reloaded after rebuild to avoid serving stale code
- Write operation failed: skill name was empty string, not found in active profile 'ai'

## Concepts
- agentmemory observation storage
- KV scope binary format
- REST API endpoint design
- BM25 and vector index management
- service reload procedures
- temporary endpoint pattern

## Files
- `src/triggers/api.ts`
- `state_store.db/`

_Importance: 5 · Confidence: 1_
