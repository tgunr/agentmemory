---
type: CommandRun
title: Hermes Agent status check showing environment and auth details
description: Inspecting configuration, active models, and authentication states
resource: agentmemory://observation/obs_mrrj1iub_3d7302f366b9
tags: ["Hermes Agent", "LLM provider configuration", "OAuth authentication", "API key management", "Nous Portal", "commandrun"]
timestamp: 2026-07-19T08:21:43.712917+00:00
source: agentmemory
session_id: 20260719_032058_f6d3a962
importance: 4
confidence: 1
---
# Summary

Ran `hermes status` to inspect the Hermes Agent environment, active models, and authentication states. The Nous Portal is authenticated and active, while Qwen OAuth failed due to a gateway timeout and several other providers are unconfigured.

## Facts
- Project path: /Users/davec/.hermes/hermes-agent
- Python version: 3.13.2
- Current model: tencent/hy3:free via Nous Portal
- Active API keys: OpenRouter, FAL
- Nous Portal auth active, expires 2026-07-19 04:15:54 CDT
- Qwen OAuth failed with 504 Gateway Time-out
- OpenAI Codex, MiniMax OAuth, xAI OAuth not logged in

## Concepts
- Hermes Agent
- LLM provider configuration
- OAuth authentication
- API key management
- Nous Portal

## Files
- `/Users/davec/.hermes/hermes-agent`
- `/Users/davec/.hermes/auth.json`
- `/Users/davec/.qwen/oauth_creds.json`

_Importance: 4 · Confidence: 1_
