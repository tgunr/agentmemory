---
type: Observation
title: AgentMemory Hermes Integration Rules
description: Troubleshooting and rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_msq0x7sw_65eebc34b6bf
tags: ["Technical Concepts and Patterns", "observation"]
timestamp: 2026-08-12T11:46:25.849616+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 7
confidence: 1
---
# Summary

The provided output contains detailed rules and troubleshooting information for integrating AgentMemory with Hermes Agent, outlining essential tasks such as setting up secret resolution, registering session IDs, synchronizing titles, and configuring profile settings.

## Facts
- Native plugins MUST robustly load `AGENTMEMORY_SECRET` from `~/.agentmemory/.env` as a fallback if the env var is missing, to avoid 401 Unauthorized errors.
- Hermes TUI generates custom session IDs (e.g., `YYYYMMDD_HHMMSS_hash`). These MUST be explicitly registered via `POST /agentmemory/session/start` before sending observations, otherwise they are orphaned and won't appear in the UI viewer (port 3113).
- To display descriptive names in the AgentMemory UI instead of generic `(none)` fallbacks, the plugin reads the title from Hermes's `~/.hermes/state.db` and sends it:
- 1. **At start** — in the `session/start` payload (`payload[\"title\"] = title`). Stored on the AM session as `summary` + `firstPrompt` (there is no literal `title` field).

## Concepts
- Technical Concepts and Patterns

_Importance: 7 · Confidence: 1_
