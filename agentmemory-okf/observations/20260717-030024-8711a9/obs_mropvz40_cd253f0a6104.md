---
type: Observation
title: Viewed hermes-service-debugging skill v1.7.0
description: Debugging guide for Hermes services (agentmemory, iii-engine) covering ports, state stores, and silent failures
resource: agentmemory://observation/obs_mropvz40_cd253f0a6104
tags: ["Hermes services debugging", "agentmemory state store", "iii-engine StateModule", "port split (REST API vs viewer UI)", "file-based vs Redis state storage", "embedding dimension mismatch", "session store mismatch", "silent failure patterns", "observation"]
timestamp: 2026-07-17T09:10:03.643886+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 7
confidence: 1
---
# Summary

The agent viewed the hermes-service-debugging skill to understand the architecture of Hermes services debugging. This skill documents the split between REST API (3111) and viewer UI (3113) ports, dual state storage mechanisms (Redis vs file-based), and numerous silent-failure traps including port conflicts, embedding dimension mismatches, and session store mismatches between Hermes and agentmemory.

## Facts
- Skill name: hermes-service-debugging, version 1.7.0
- REST API port: 3111, viewer UI port: 3113
- State stored via iii-engine's StateModule: Redis-backed (state:mem:* keys) OR file-based per store_method in iii-config.yaml
- File-based storage uses per-scope .bin JSON files under state_store.db/ (scope colon URL-encoded, e.g. mem%3Asessions.bin)
- Canonical data dir (AGENTMEMORY_DATA_DIR) is usually NOT the repo's data/state_store.db/ (empty at build time)
- Hermes and agentmemory have two different session stores; unified data directory does not make counts match
- Tags: debugging, hermes-agent, services, port-conflicts, data-loading, native-modules
- Related skills: systematic-debugging
- References cover: data-path-resolution, session-mismatch, embedding-providers, kilo-code-integration, viewer-dashboard-stuck-at-zero, viewer-state-tracking
- Common issues: dashboard shows "first run" with Redis data, port conflicts causing silent fallback, LLM auth errors, empty vector index after embedding provider change (dimension mismatch)

## Concepts
- Hermes services debugging
- agentmemory state store
- iii-engine StateModule
- port split (REST API vs viewer UI)
- file-based vs Redis state storage
- embedding dimension mismatch
- session store mismatch
- silent failure patterns
- launchd env var handling

## Files
- `references/reading-state-store-bin-files.md`
- `references/data-path-resolution.md`
- `references/hermes-agentmemory-session-mismatch.md`
- `references/embedding-providers.md`
- `references/kilo-code-integration.md`
- `references/viewer-dashboard-stuck-at-zero.md`
- `references/viewer-state-tracking.md`
- `iii-config.yaml`

_Importance: 7 · Confidence: 1_
