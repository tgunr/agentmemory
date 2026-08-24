---
type: CommandRun
title: AgentMemory Hermes Integration Rules
description: Troubleshooting and rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.
resource: agentmemory://observation/obs_mrwaysn6_4d454b8b329d
tags: ["AgentMemory integration with Hermes Agent", "Session registration", "commandrun"]
timestamp: 2026-07-22T16:34:30.393536+00:00
source: agentmemory
session_id: 20260722_111231_1c186c
importance: 7
confidence: 0.9
---
# Summary

The plugin generates custom session IDs, registers them via `POST /agentmemory/session/start`, and sends observations against that session. It also reads the title from Hermes's `~/.hermes/state.db` and sends it as part of the session start payload.

## Facts
- Lots of details about the integration, including secret resolution, session registration, and more.

## Concepts
- AgentMemory integration with Hermes Agent
- Session registration

_Importance: 7 · Confidence: 0.9_
