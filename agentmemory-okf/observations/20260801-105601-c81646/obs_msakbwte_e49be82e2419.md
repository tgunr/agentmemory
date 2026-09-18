---
type: CommandRun
title: Ollama Model Picker Visibility Triage
description: User says a model is not showing up in Ollama models.
resource: agentmemory://observation/obs_msakbwte_e49be82e2419
tags: ["ollama-provider-troubleshooting", "commandrun"]
timestamp: 2026-08-01T16:05:25.340729+00:00
source: agentmemory
session_id: 20260801_105601_c81646
importance: 5
confidence: 0.9
---
# Summary

The agent created a new skill to fix a model issue. The issue is fixed by registering the tag in the models list.

## Facts
- ollama list returns no context metadata
- The problem lies in the config-side, specifically the ollama-launch provider

## Concepts
- ollama-provider-troubleshooting

_Importance: 5 · Confidence: 0.9_
