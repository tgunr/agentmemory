---
type: Search
title: Search for files in Hermes profiles directory
description: Discovered data files across multiple agent profiles
resource: agentmemory://observation/obs_mrq9gvb8_4aa0221630d8
tags: ["SQLite WAL journaling", "Hermes profiles", "agentmemory_observer plugin", "search"]
timestamp: 2026-07-18T11:05:57.377142+00:00
source: agentmemory
session_id: 20260718_060537_d8b058
importance: 4
confidence: 1
---
# Summary

Explored Hermes profiles directory to identify available agent data stores and plugins. Found SQLite databases with write-ahead logging enabled across multiple profiles, indicating active state persistence. The agentmemory_observer plugin is consistently deployed across all profiles for observation functionality.

## Facts
- Found 50 files across profiles: shop, ranch, pveroot, personal, ollama, develop, cc, ai, and default
- Database files present: state.db and projects.db with SQLite WAL/SHM journaling in multiple profiles
- agentmemory_observer plugin installed in all profiles with __pycache__ bytecode
- Cron ticker files exist in cc profile for task scheduling
- Search results truncated - more files available with offset=50

## Concepts
- SQLite WAL journaling
- Hermes profiles
- agentmemory_observer plugin

## Files
- `/Users/davec/.hermes/profiles/shop/state.db`
- `/Users/davec/.hermes/profiles/ranch/state.db`
- `/Users/davec/.hermes/profiles/pveroot/state.db`
- `/Users/davec/.hermes/profiles/personal/state.db`
- `/Users/davec/.hermes/profiles/ollama/state.db`
- `/Users/davec/.hermes/profiles/develop/state.db`
- `/Users/davec/.hermes/profiles/cc/state.db`
- `/Users/davec/.hermes/profiles/ai/state.db`

_Importance: 4 · Confidence: 1_
