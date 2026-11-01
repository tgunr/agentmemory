---
type: Observation
title: Ollama context override and compression
description: No specific context provided
resource: agentmemory://observation/obs_mvw8ozmz_b853409358cb
tags: ["Ollama", "Context", "Compression", "observation"]
timestamp: 2026-10-31T10:09:43.013644+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 9
confidence: 0.9
---
# Summary

The Hermes tool executed the agent/ tools/ run_agent.py script using grep to search for relevant Python files. During this process, Ollama's context was detected and overridden. The script also configured the compressor clamp to Ollama num_ctx.

## Facts
- Automated task detection with Ollama
- Ollama context detection enabled

## Concepts
- Ollama
- Context
- Compression

## Files
- `tools/ run_agent.py`

_Importance: 9 · Confidence: 0.9_
