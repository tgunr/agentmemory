---
type: Observation
title: Xcode local ACP agent tool creation
description: Create Xcode local ACP agent to replace Codex nagging
resource: agentmemory://observation/obs_ms22te7s_8cd9a784f8fd
tags: ["observation"]
timestamp: 2026-07-26T17:32:58.547453+00:00
source: agentmemory
session_id: 20260726_101852_f66fa4
importance: 5
confidence: 0.75
---
# Summary

The xcode-local-acp skill was created using the skill_manage tool to replace Codex nagging in Xcode 27 by registering a local coding agent backed by Ollama. The new ACP server successfully resolved authentication issues.

## Facts
- Ollama skill serve target model over localhost 11434 with keep-alive enabled
- Python script &quot;ollama-acp.py&quot; implemented JSON-RPC-over-stdio protocol for proxying to Ollama

_Importance: 5 · Confidence: 0.75_
