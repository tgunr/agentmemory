---
type: Search
title: Search for files in Hermes profiles directory
description: Discovered 100+ files across multiple service profiles
resource: agentmemory://observation/obs_mrq7ks9f_5cdbc1835ba6
tags: ["Hermes profiles", "SQLite databases", "plugin architecture", "agent memory observer", "search"]
timestamp: 2026-07-18T10:13:00.816809+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

Search discovered a Multi-profile Hermes configuration system with SQLite persistence, plugin architecture, and service-specific state management. The presence of cron tick files and model caches indicates automated background services with caching layers.

## Facts
- Found 100 total files in ~/.hermes/profiles
- Multiple profiles exist: shop, ranch, pveroot, personal, ollama, develop, cc, ai, default
- Each profile contains SQLite databases (state.db, state.db-wal, state.db-shm)
- agentmemory_observer plugin present in all profiles with pycache and source files
- Additional files: caches, logs, cron tick data, provider model caches

## Concepts
- Hermes profiles
- SQLite databases
- plugin architecture
- agent memory observer

## Files
- `/Users/davec/.hermes/profiles/shop/state.db`
- `/Users/davec/.hermes/profiles/cc/state.db`
- `/Users/davec/.hermes/profiles/cc/provider_models_cache.json`
- `/Users/davec/.hermes/profiles/cc/auth.json`

_Importance: 6 · Confidence: 1_
