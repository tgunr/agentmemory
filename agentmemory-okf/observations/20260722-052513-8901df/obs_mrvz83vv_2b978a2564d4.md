---
type: file_edit
title: AgentMemory - Hermes Integration Troubleshooting Doc
description: Document about troubleshooting and rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_mrvz83vv_2b978a2564d4
tags: ["React hooks", "file_edit"]
timestamp: 2026-07-22T11:05:49.466303+00:00
source: agentmemory
session_id: 20260722_052513_8901df
importance: 6
confidence: 0.9
---
# Summary

The provided document provides troubleshooting and rules for AgentMemory integration with Hermes Agent, covering topics like session registration, title sync, secret resolution, and live-instance runtime health diagnostics.

## Facts
- Native plugins MUST robustly load `AGENTMEMORY_SECRET` from `~/.agentmemory/.env` as a fallback if the env var is missing,
- Hermes TUI generates custom session IDs (e.g., `YYYYMMDD_HHMMSS_hash`). These MUST be explicitly registered via `POST /agentmemory/session/start` before sending observations,

## Concepts
- React hooks

_Importance: 6 · Confidence: 0.9_
