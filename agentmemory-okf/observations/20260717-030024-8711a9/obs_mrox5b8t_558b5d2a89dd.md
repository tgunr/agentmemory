---
type: FileRead
title: Viewed hermes-service-debugging skill documentation
description: Architecture and debugging guide for Hermes agentmemory and iii-engine services
resource: agentmemory://observation/obs_mrox5b8t_558b5d2a89dd
tags: ["Hermes services", "agentmemory", "iii-engine", "state management", "port configuration", "service debugging", "launchd environment", "fileread"]
timestamp: 2026-07-17T12:33:16.583766+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 7
confidence: 1
---
# Summary

The agent viewed the hermes-service-debugging skill to understand the architecture of Hermes services. This document details the split-port architecture, state storage mechanisms (Redis vs file-based .bin), and common debugging traps like data path resolution and silent fallbacks.

## Facts
- Hermes services use split ports: REST API on 3111, Viewer UI on 3113
- State managed by iii-engine StateModule via Redis (state:mem:*) or file-based .bin JSON in state_store.db/
- State storage method configured via store_method in iii-config.yaml
- Canonical data dir (AGENTMEMORY_DATA_DIR) differs from repo data/state_store.db/ and ~/.agentmemory/
- Includes references for embedding providers, Kilo Code integration, and viewer dashboard race conditions

## Concepts
- Hermes services
- agentmemory
- iii-engine
- state management
- port configuration
- service debugging
- launchd environment

## Files
- `iii-config.yaml`
- `state_store.db/`
- `src/viewer/index.html`
- `~/.agentmemory/`
- `data/state_store.db/`

_Importance: 7 · Confidence: 1_
