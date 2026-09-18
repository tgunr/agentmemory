---
type: file_edit
title: AgentMemory Hermes Integration Rules
description: # AgentMemory Hermes Integration Rules
resource: agentmemory://observation/obs_mspcmig6_6ffcc1c3e8f8
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-12T00:26:15.651902+00:00
source: agentmemory
session_id: 20260811_192552_0abbc3
importance: 6
confidence: 0.9
---
# Summary

Integration with Hermes Agent for troubleshooting and rules on AgentMemory — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.

## Facts
- native plugins MUST robustly load AGENTMEMORY_SECRET from ~/.agentmemory/.env as a fallback if the env var is missing:
- Hermes TUI generates custom session IDs (e.g., YYYYMMDD_HHMMSS_hash)

## Concepts
- React hooks

_Importance: 6 · Confidence: 0.9_
