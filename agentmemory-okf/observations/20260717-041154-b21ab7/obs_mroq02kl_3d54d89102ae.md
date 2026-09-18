---
type: FileRead
title: Read iii-config.yaml configuration for agentmemory workers
description: Configuration file defining HTTP, state, queue, pubsub, cron, stream, observability, and exec workers
resource: agentmemory://observation/obs_mroq02kl_3d54d89102ae
tags: ["YAML configuration", "worker orchestration", "file-based storage", "observability sampling", "log feedback prevention", "fileread"]
timestamp: 2026-07-17T09:13:14.731701+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Read the iii-config.yaml file which defines the worker configuration for the agentmemory system. The configuration includes multiple workers for HTTP serving, state management, queuing, pubsub, cron scheduling, stream processing, observability with careful sampling to prevent runaway log growth, and TypeScript file watching for development.

## Facts
- HTTP worker configured on port 3111 with CORS for localhost:3111 and 3113
- State store uses file-based KV adapter at /Users/davec/data/agentmemory/data/state_store.db
- Queue and pubsub use builtin and local adapters respectively
- Cron worker uses KV adapter
- Stream server on port 3112 with file-based store at /Users/davec/data/agentmemory/data/stream_store
- Observability enabled with 0.1 sampling ratio to prevent log subscriber feedback loops
- Exec worker watches src/**/*.ts and runs node dist/index.mjs

## Concepts
- YAML configuration
- worker orchestration
- file-based storage
- observability sampling
- log feedback prevention

## Files
- `/Volumes/AI/agentmemory/iii-config.yaml`

_Importance: 3 · Confidence: 1_
