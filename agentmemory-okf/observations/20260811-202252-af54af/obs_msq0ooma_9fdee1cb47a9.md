---
type: FileRead
title: AgentMemory Hermes Integration Rules
description: Integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_msq0ooma_9fdee1cb47a9
tags: ["React hooks", "fileread"]
timestamp: 2026-08-12T11:39:47.740370+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 8
confidence: 0.9
---
# Summary

The integration requires troubleshooting and rules for AgentMemory with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.

## Facts
- A native plugin must robustly load AGENTMEMORY_SECRET from ~/.agentmemory/.env as a fallback if the env var is missing to avoid 401 Unauthorized errors.
- Hermes TUI generates custom session IDs (e.g., YYYYMMDD_HHMMSS_hash). These MUST be explicitly registered via POST /agentmemory/session/start before sending observations, otherwise they are orphaned and won't appear in the UI viewer (port 3113).

## Concepts
- React hooks

## Files
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 8 · Confidence: 0.9_
