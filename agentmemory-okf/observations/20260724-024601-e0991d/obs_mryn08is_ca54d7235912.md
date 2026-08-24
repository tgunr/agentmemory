---
type: FileRead
title: AgentMemory Hermes Integration Rules
description: Troubleshooting and rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_mryn08is_ca54d7235912
tags: ["secret resolution using AGENTMEMORY_SECRET", "session registration with custom session IDs", "fileread"]
timestamp: 2026-07-24T07:47:05.372925+00:00
source: agentmemory
session_id: 20260724_024601_e0991d
importance: 7
confidence: 0.9
---
# Summary

To display descriptive names in the AgentMemory UI instead of generic (none) fallbacks, the plugin reads the title from Hermes's ~/.hermes/state.db and sends it: ...,

## Facts
- Native plugins MUST robustly load AGENTMEMORY_SECRET from ~/.agentmemory/.env as a fallback if the env var is missing,
- Hermes TUI generates custom session IDs (e.g., YYYYMMDD_HHMMSS_hash) which MUST be explicitly registered via POST /agentmemory/session/start before sending observations.

## Concepts
- secret resolution using AGENTMEMORY_SECRET
- session registration with custom session IDs

_Importance: 7 · Confidence: 0.9_
