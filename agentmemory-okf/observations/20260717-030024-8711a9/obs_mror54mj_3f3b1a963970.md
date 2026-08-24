---
type: FileRead
title: Hermes Service Debugging Skill Documentation
description: Covers port splits, state storage mechanisms, and silent failure patterns
resource: agentmemory://observation/obs_mror54mj_3f3b1a963970
tags: ["Hermes services", "agentmemory", "iii-engine", "port configuration", "state storage", "Redis persistence", "file-based persistence", "launchd environment", "fileread"]
timestamp: 2026-07-17T09:45:10.307100+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

Retrieved the hermes-service-debugging skill which provides comprehensive debugging guidance for Hermes services (agentmemory, iii-engine). Documents critical architectural distinctions between REST/viewer ports, dual state storage mechanisms (Redis vs file-based), and common silent failure patterns in data loading and API calls.

## Facts
- REST API runs on port 3111, viewer UI on port 3113
- State stored via iii-engine StateModule: Redis (state:mem:* keys) OR file-based (.bin files in state_store.db/)
- File-based state uses URL-encoded scope names (e.g., mem%3Asessions.bin)
- AGENTMEMORY_DATA_DIR canonical path differs from repo's data/state_store.db/ (repo copy empty at build time)
- Launchd services have different env var handling than manual starts
- Common failure modes: port conflicts, embedding dimension mismatches, adapter-schema silent fallback, viewer dashboard stuck at zero
- References 7 specialized debugging guides for specific failure scenarios

## Concepts
- Hermes services
- agentmemory
- iii-engine
- port configuration
- state storage
- Redis persistence
- file-based persistence
- launchd environment
- native modules
- embedding providers
- silent failures
- debugging patterns

## Files
- `references/reading-state-store-bin-files.md`
- `references/data-path-resolution.md`
- `references/hermes-agentmemory-session-mismatch.md`
- `references/embedding-providers.md`
- `references/kilo-code-integration.md`
- `references/viewer-dashboard-stuck-at-zero.md`
- `references/viewer-state-tracking.md`

_Importance: 6 · Confidence: 1_
