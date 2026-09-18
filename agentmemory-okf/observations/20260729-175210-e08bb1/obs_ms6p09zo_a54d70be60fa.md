---
type: CommandRun
title: Reactive per-runtime session state mirror
description: Display of caching mechanism with gateway events and active ID gate
resource: agentmemory://observation/obs_ms6p09zo_a54d70be60fa
tags: ["useSessionSlice", "nanostores atom", "commandrun"]
timestamp: 2026-07-29T23:05:15.918735+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 5
confidence: 0.9
---
# Summary

The cache ingests EVERY session's gateway events; only the view was single-session. This store mirrors the cache per runtime id to enable independent surfaces subscribing to one session's state without touching the main chat ($messages + active-id gate).

## Facts
- Caching every session's gateway events, while only the view was single-session.

## Concepts
- useSessionSlice
- nanostores atom

_Importance: 5 · Confidence: 0.9_
