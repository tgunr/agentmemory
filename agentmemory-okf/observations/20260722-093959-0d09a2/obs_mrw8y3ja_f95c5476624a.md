---
type: file_write
title: Hermes AgentMemory Integration Rules
description: Troubleshooting and rules for integrating AgentMemory with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_mrw8y3ja_f95c5476624a
tags: ["AgentMemory integration with Hermes Agent", "file_write"]
timestamp: 2026-07-22T15:37:58.626644+00:00
source: agentmemory
session_id: 20260722_093959_0d09a2
importance: 8
confidence: 0.9
---
# Summary

To display descriptive names in the AgentMemory UI instead of generic (none) fallbacks, the plugin reads the title from Hermes's ~/.hermes/state.db and sends it. To achieve this, the plugin generates a session ID or inherits it from Hermes state, and then registers it via POST /agentmemory/session/start. The session ID is stored as summary + firstPrompt in the session.

## Facts
- Native plugins MUST robustly load AGENTMEMORY_SECRET from ~/.agentmemory/.env as a fallback if the env var is missing, to avoid 401 Unauthorized errors.
- Hermes TUI generates custom session IDs (e.g., YYYYMMDD_HHMMSS_hash). These MUST be explicitly registered via POST /agentmemory/session/start before sending observations, otherwise they are orphaned and won't appear in the UI viewer (port 3113).

## Concepts
- AgentMemory integration with Hermes Agent

## Files
- `~/.agentmemory/.env`

_Importance: 8 · Confidence: 0.9_
