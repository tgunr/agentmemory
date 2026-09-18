---
type: discovery
title: Retrieved hermes-service-debugging skill documentation
description: Covers ports, state storage, launchd env vars, and silent failures
resource: agentmemory://observation/obs_mroqxjaj_ef86809aa012
tags: ["Hermes services debugging", "State storage (Redis vs file-based)", "Port configuration (REST vs UI)", "Launchd environment variables", "Vector embedding dimension mismatch", "iii-config.yaml configuration", "discovery"]
timestamp: 2026-07-17T09:39:16.069332+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 7
confidence: 1
---
# Summary

Retrieved the hermes-service-debugging skill, providing comprehensive troubleshooting guidance for Hermes services (agentmemory, iii-engine). It details critical architecture specifics like the REST/viewer port split, dual state storage mechanisms, and common silent-failure traps including port conflicts, embedding dimension mismatches, and launchd environment variable discrepancies.

## Facts
- REST API runs on port 3111, viewer UI runs on port 3113
- State storage uses iii-engine StateModule: either Redis (state:mem:* keys) or file-based (.bin JSON in state_store.db/)
- Storage backend is determined by store_method in iii-config.yaml
- Canonical data directory is AGENTMEMORY_DATA_DIR, distinct from repo data/state_store.db/ or ~/.agentmemory/
- Launchd services handle environment variables differently than manual CLI starts
- Vector indexes can silently fail and remain empty after embedding provider dimension mismatches
- Viewer dashboard has silent-failure pattern in src/viewer/index.html:1249 where api() swallows responses

## Concepts
- Hermes services debugging
- State storage (Redis vs file-based)
- Port configuration (REST vs UI)
- Launchd environment variables
- Vector embedding dimension mismatch
- iii-config.yaml configuration

## Files
- `references/reading-state-store-bin-files.md`
- `references/data-path-resolution.md`
- `references/hermes-agentmemory-session-mismatch.md`
- `references/embedding-providers.md`
- `references/kilo-code-integration.md`
- `references/viewer-dashboard-stuck-at-zero.md`
- `references/viewer-state-tracking.md`
- `src/viewer/index.html`
- `iii-config.yaml`

_Importance: 7 · Confidence: 1_
