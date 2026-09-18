---
type: file_write
title: Write documentation on configuring local LLM for agentmemory observation compression
description: 
resource: agentmemory://observation/obs_mroppsig_ca254f796641
tags: ["agentmemory compression", "OpenAI-compatible providers", "Ollama", "local LLM configuration", "file_write"]
timestamp: 2026-07-17T09:05:15.157841+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Created documentation explaining how to configure agentmemory to use local/free LLM models (Ollama, vLLM, LM Studio) for observation compression via OpenAI-compatible endpoints, including environment variable setup and important limitations.

## Facts
- File written: references/local-llm-chat-model.md to skill hermes-service-debugging
- Documents how agentmemory uses OpenAI-compatible providers via detectProvider() in src/config.ts
- Provides Ollama configuration recipe with OPENAI_BASE_URL=http://localhost:11434/v1 and model examples
- Notes two caveats: global provider switch affects all LLM features, and models under 12B often fail XML validation with retries

## Concepts
- agentmemory compression
- OpenAI-compatible providers
- Ollama
- local LLM configuration

## Files
- `references/local-llm-chat-model.md`

_Importance: 5 · Confidence: 1_
