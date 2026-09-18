---
type: file_edit
title: Configure local Ollama provider
description: 
resource: agentmemory://observation/obs_msak6wty_ffe99e48370f
tags: ["OpenRouter-style slashes", "Ollama", "file_edit"]
timestamp: 2026-08-01T16:01:32.078663+00:00
source: agentmemory
session_id: 20260801_105601_c81646
importance: 8
confidence: 0.9
---
# Summary

The Hermes reports \"model not found\" when switching to Ollama models because of naming conflicts during conversion. Configuring the local Ollama provider can resolve this issue.

## Facts
- Total number of context tokens required by the model is below the minimum of 64,000 required.
- When switching to Ollama models (`qwen3:1.7b`, `llama3.2:3b`), Hermes reports "model not found" due to name recognition format conversions.

## Concepts
- OpenRouter-style slashes
- Ollama

## Files
- `/reset (CLI)`

_Importance: 8 · Confidence: 0.9_
