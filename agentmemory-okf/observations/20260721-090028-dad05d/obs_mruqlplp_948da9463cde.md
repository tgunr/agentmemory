---
type: file_edit
title: AgentMemory Hermes Integration Rules
description: Troubleshooting and rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_mruqlplp_948da9463cde
tags: ["User naming convention", "file_edit"]
timestamp: 2026-07-21T14:16:41.432090+00:00
source: agentmemory
session_id: 20260721_090028_dad05d
importance: 7
confidence: 0.9
---
# Summary

Changes to AgentMemory Hermes Integration Rules for troubleshooting and rules. Review key modifications for accurate session registration, title sync, secret resolution, and runtime health diagnostics. Ensure correct configuration of agentmemory profile to route API calls correctly.

## Facts
- Native plugins MUST robustly load `AGENTMEMORY_SECRET` from `~/.agentmemory/.env` as a fallback if the env var is missing to avoid 401 Unauthorized errors.
- Hermes TUI generates custom session IDs (e.g., `YYYYMMDD_HHMMSS_hash`). These MUST be explicitly registered via `POST /agentmemory/session/start` before sending observations, otherwise they are orphaned and won't appear in the UI viewer (port 3113).

## Concepts
- User naming convention

_Importance: 7 · Confidence: 0.9_
