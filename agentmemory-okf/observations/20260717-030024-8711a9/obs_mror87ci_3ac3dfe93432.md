---
type: file_edit
title: Patched hermes-service-debugging skill with pitfalls 37-39
description: Added debugging guidance for .bin file structure, observation backfill, and test isolation
resource: agentmemory://observation/obs_mror87ci_3ac3dfe93432
tags: [".bin file format with footer validation", "KV store scope encoding", "observation compression and backfill recovery", "live API vs offline file consistency", "test failure isolation with git stash", "mass-mutation via temporary REST endpoints", "file_edit"]
timestamp: 2026-07-17T09:47:33.807929+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

Updated the hermes-service-debugging skill documentation with three new pitfalls covering .bin file structural constraints (6-byte footer validation), observation backfill recovery strategies (distinguishing recoverable raw data from truly-lost records), and test failure isolation techniques (using git stash to rule out pre-existing failures).

## Facts
- Added pitfall #37: .bin files under state_store.db/ have trailing 6-byte footer after JSON record; engine validates footer on load; hand-editing rejected or overwritten
- Safe offline read: parse JSON before first \x00; write only through live API; mass-mutation via temporary endpoints POST /agentmemory/recompress and POST /agentmemory/observations/delete
- Added pitfall #38: Observations with raw.tool_input or raw.tool_output populated are recoverable via mem::compress; truly-lost records have no nested tool data and should only be deleted
- In-memory sessions scope is source of truth; verify final state with GET /agentmemory/sessions (observationCount) not offline file scan
- Added pitfall #39: test/api-livez-flags.test.ts fails 4/4 pre-existing (expects body.vector without live embedding provider); use git stash push -- src/triggers/api.ts to isolate before assuming regression
- Known tsc --noEmit noise in cli.ts/slots.ts/better-sqlite3/health/monitor.ts does not originate in api.ts or search.ts
- Full mass-mutation recipe and import traps (vectorIndexRemove/STREAM) documented in references/mutating-stored-observations.md

## Concepts
- .bin file format with footer validation
- KV store scope encoding
- observation compression and backfill recovery
- live API vs offline file consistency
- test failure isolation with git stash
- mass-mutation via temporary REST endpoints

## Files
- `SKILL.md`
- `references/mutating-stored-observations.md`
- `src/triggers/api.ts`
- `test/api-livez-flags.test.ts`
- `test/consistency.test.ts`

_Importance: 6 · Confidence: 1_
