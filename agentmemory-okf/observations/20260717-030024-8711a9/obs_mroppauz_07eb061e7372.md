---
type: file_write
title: Failed write: local LLM config docs for agentmemory
description: Write failed due to incorrect parameter name (content vs file_content)
resource: agentmemory://observation/obs_mroppauz_07eb061e7372
tags: ["OpenAI-compatible API endpoints", "Ollama local LLM", "agentmemory provider configuration", "detectProvider() function", "structured XML output validation", "environment variable configuration", "LLM model size requirements", "file_write"]
timestamp: 2026-07-17T09:04:52.279833+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

Attempted to write documentation for using local/free LLMs with agentmemory's observation compression system. The write failed due to incorrect parameter name (used "content" instead of "file_content"). The documentation describes how to configure Ollama or other OpenAI-compatible endpoints by setting OPENAI_BASE_URL in ~/.agentmemory/.env, with important caveats about global provider scope and minimum 12B model size for reliable XML output.

## Facts
- agentmemory's mem::compress and related features use ONE provider chosen by detectProvider() in src/config.ts
- src/providers/openai.ts supports OpenAI-compatible endpoints (vLLM, LM Studio, Ollama)
- Configuration via ~/.agentmemory/.env with OPENAI_BASE_URL, OPENAI_MODEL, OPENAI_API_KEY, OPENAI_REASONING_EFFORT
- Ollama runs OpenAI-compat layer on :11434, URL normalizer in _openai-shared.ts:normalizeBaseUrl appends /chat/completions
- Global provider affects all LLM features (summarize, reflect, graph extraction, session compaction)
- Model size floor ≥12B required for reliable structured XML output in mem::compress
- Models &lt;12B frequently emit malformed XML, hit retry ceiling, fall back to empty notification record
- Verification: curl http://localhost:3111/agentmemory/config/flags to check provider is "llm" not "noop"
- File write failed with error: "file_content is required for 'write_file'" - parameter name mismatch

## Concepts
- OpenAI-compatible API endpoints
- Ollama local LLM
- agentmemory provider configuration
- detectProvider() function
- structured XML output validation
- environment variable configuration
- LLM model size requirements

## Files
- `references/local-llm-chat-model.md`
- `src/config.ts`
- `src/providers/openai.ts`
- `_openai-shared.ts`
- `~/.agentmemory/.env`

_Importance: 6 · Confidence: 1_
