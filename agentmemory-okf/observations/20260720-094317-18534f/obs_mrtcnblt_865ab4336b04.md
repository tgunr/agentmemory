---
type: FileRead
title: Read iii-config.yaml for agentmemory service
description: Configuration file for the iii (agentmemory) service with multiple workers
resource: agentmemory://observation/obs_mrtcnblt_865ab4336b04
tags: ["iii service configuration", "worker-based architecture", "kv adapter with file-based storage", "CORS configuration", "observability/tracing setup", "TypeScript build pipeline", "fileread"]
timestamp: 2026-07-20T14:58:15.805469+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Read the full iii-config.yaml configuration file for the agentmemory service. It defines 8 workers (http, state, queue, pubsub, cron, stream, observability, exec) with their respective adapters and settings. HTTP and stream workers expose ports 3111 and 3112 on localhost, state and stream use file-based kv stores, and the exec worker runs a Node.js build from TypeScript sources.

## Facts
- Config file at /Users/davec/.agentmemory/iii-config.yaml (1250 bytes, 52 lines)
- iii-http worker: port 3111, host 127.0.0.1, default_timeout 180000ms, CORS allows localhost:3111 and localhost:3113
- iii-state worker: kv adapter, file_based store at /Users/davec/data/agentmemory/data/state_store.db
- iii-queue worker: builtin adapter
- iii-pubsub worker: local adapter
- iii-cron worker: kv adapter
- iii-stream worker: port 3112, host 127.0.0.1, kv adapter with file_based store at /Users/davec/data/agentmemory/data/stream_store
- iii-observability worker: enabled, service_name=agentmemory, exporter=memory, sampling_ratio=1.0, metrics/logs enabled with console output
- iii-exec worker: watches src/**/*.ts, executes node dist/index.mjs

## Concepts
- iii service configuration
- worker-based architecture
- kv adapter with file-based storage
- CORS configuration
- observability/tracing setup
- TypeScript build pipeline

## Files
- `/Users/davec/.agentmemory/iii-config.yaml`

_Importance: 5 · Confidence: 1_
