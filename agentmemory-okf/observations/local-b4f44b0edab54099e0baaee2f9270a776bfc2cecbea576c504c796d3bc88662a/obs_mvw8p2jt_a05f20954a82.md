---
type: FileRead
title: Ollama num_ctx configuration and detection
description: Detects Ollama num_ctx value and its impact on compressor setting
resource: agentmemory://observation/obs_mvw8p2jt_a05f20954a82
tags: ["Ollama", "num_ctx", "context_compressor", "fileread"]
timestamp: 2026-10-31T10:09:46.772027+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 8
confidence: 0.9
---
# Summary

The agent detects the Ollama num_ctx value and adjusts the compressor setting accordingly. This ensures that the compressor target window does not exceed the actual served window, preventing unnecessary compaction triggers. The num_ctx detection also informs the agent about the detected maximum window, enabling better utilization of the model's context.

## Facts
- Ollama num_ctx defaults to 2048
- (Model.ollama_num_ctx overrides; model.context_length caps the detected value (VRAM).

## Concepts
- Ollama
- num_ctx
- context_compressor

## Files
- `/Users/davec/.hermes/hermes-agent/agent/agent_init_ollama.py`

_Importance: 8 · Confidence: 0.9_
