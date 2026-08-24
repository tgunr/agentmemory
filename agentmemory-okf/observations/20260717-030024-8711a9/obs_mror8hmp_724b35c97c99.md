---
type: file_edit
title: Update hermes-service-debugging skill with stored observations reference
description: Added reference to mutating-stored-observations.md for backfill/purge patterns
resource: agentmemory://observation/obs_mror8hmp_724b35c97c99
tags: ["skill management", "documentation patching", "stored observations", "backfill/purge patterns", ".bin footer format", "file_edit"]
timestamp: 2026-07-17T09:47:47.130907+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

The hermes-service-debugging skill's SKILL.md was updated to include a new reference document about mutating stored observations. This adds operational guidance on safe backfill/purge operations, including store format details and verification procedures for mass-mutating past stored observations.

## Facts
- Patched SKILL.md in skill 'hermes-service-debugging' with 1 replacement
- Added reference to references/mutating-stored-observations.md
- New reference covers: backfill/purge recipe, store .bin footer format, temporary engine-backed endpoints, recoverable-vs-truly-lost split, live-API verification
- Existing reference to references/upstream-merge-pattern.md preserved

## Concepts
- skill management
- documentation patching
- stored observations
- backfill/purge patterns
- .bin footer format

## Files
- `references/upstream-merge-pattern.md`
- `references/mutating-stored-observations.md`
- `hermes-service-debugging/SKILL.md`

_Importance: 4 · Confidence: 1_
