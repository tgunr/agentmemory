---
type: CommandRun
title: AgentMemory Hermes Integration Rules
description: Rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution.
resource: agentmemory://observation/obs_mruljl6o_4d027990c2a1
tags: ["Secret Resolution", "commandrun"]
timestamp: 2026-07-21T11:55:04.314688+00:00
source: agentmemory
session_id: 20260721_065448_4675e7
importance: 6
confidence: 0.9
---
# Summary

To troubleshoot and apply rules for AgentMemory integration with Hermes Agent — session registration, title sync, secret resolution, and live-instance runtime health diagnostics.

## Facts
- Native plugins MUST robustly load `AGENTMEMORY_SECRET` from `~/.agentmemory/.env` as a fallback if the env var is missing.

## Concepts
- Secret Resolution

_Importance: 6 · Confidence: 0.9_
