---
type: file_edit
title: Patch detected in gateway-event.ts
description: Last read with offset/limit pagination (partial view)
resource: agentmemory://observation/obs_mry207kx_24b2279c3e1a
tags: ["javascript patch", "file_edit"]
timestamp: 2026-07-23T21:59:12.218671+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 8
confidence: 0.9
---
# Summary

A backgrounded session that finishes its turn needs setSessionWorking(false) to fire so its profile square pulses. The fix patches the busy→idle transition.

## Facts
- Modified file path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts

## Concepts
- javascript patch

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`

_Importance: 8 · Confidence: 0.9_
