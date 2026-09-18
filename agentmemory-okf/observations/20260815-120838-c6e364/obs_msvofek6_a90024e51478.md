---
type: file_edit
title: Mutex optimization for Hermes LLM context window
description: Patch for Qwen2.5-Coder models with native max_position_embeddings=32768
resource: agentmemory://observation/obs_msvofek6_a90024e51478
tags: ["Hermes LLM context window optimization", "React hooks", "file_edit"]
timestamp: 2026-08-16T10:43:16.466814+00:00
source: agentmemory
session_id: 20260815_120838_c6e364
importance: 6
confidence: 0.9
---
# Summary

This update sets the default value of max_position_embeddings for native models to above 62.5K tokens to enable Hermes. Local model patches are available but not recommended as they require specific config updates.

## Facts
- Critical context window requirement increase
- Supported LLM contexts: > 65K tokens, max_position_embeddings=32768, reliable extension

## Concepts
- Hermes LLM context window optimization
- React hooks

_Importance: 6 · Confidence: 0.9_
