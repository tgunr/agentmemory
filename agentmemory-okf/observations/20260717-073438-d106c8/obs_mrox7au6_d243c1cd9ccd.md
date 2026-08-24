---
type: FileRead
title: Read events.ts - Event trigger registration
description: Core event handling for session lifecycle and observations
resource: agentmemory://observation/obs_mrox7au6_d243c1cd9ccd
tags: ["Event-driven architecture", "Durable subscribers", "Session lifecycle management", "Feature flags", "Key-Value state storage", "Trigger-action pattern", "fileread"]
timestamp: 2026-07-17T12:34:49.372022+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 6
confidence: 1
---
# Summary

The file defines the core event trigger registration for the agentmemory system. It handles session lifecycle events (started/stopped) and observation events, delegating to various memory functions like context retrieval, summarization, reflection, and graph extraction based on feature flags.

## Facts
- File defines `registerEventTriggers(sdk: ISdk, kv: StateKV)` to register event handlers
- Registers `event::session::started` handler that creates Session objects in KV and triggers `mem::context`
- Session title resolution falls back to `lookupHermesSessionTitle` using `HERMES_STATE_DB` env var
- Registers durable subscribers for topics: `agentmemory.session.started`, `agentmemory.observation`
- `event::observation` handler delegates to `mem::observe` trigger
- `event::session::stopped` handler triggers `mem::summarize`, conditionally `mem::slot-reflect` and `mem::graph-extract`
- Graph extraction filters observations with titles before triggering `mem::graph-extract`
- Feature flags control optional behaviors: `isReflectEnabled()` and `isGraphExtractionEnabled()`

## Concepts
- Event-driven architecture
- Durable subscribers
- Session lifecycle management
- Feature flags
- Key-Value state storage
- Trigger-action pattern

## Files
- `/Volumes/AI/agentmemory/src/triggers/events.ts`

_Importance: 6 · Confidence: 1_
