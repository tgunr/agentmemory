---
type: CommandRun
title: Ollama Provider Troubleshooting Config
description: 
resource: agentmemory://observation/obs_msg4kqaq_9c2893acb02c
tags: ["React hooks", "Ollama Provider Configuration", "commandrun"]
timestamp: 2026-08-05T13:30:59.995357+00:00
source: agentmemory
session_id: 20260805_080828_bcafc3
importance: 5
confidence: 0.9
---
# Summary

The post_tool_call hook executed the skill_view tool to troubleshoot Ollama provider configuration in Hermes, providing a workaround for model naming format conflicts and context length overrides.

## Facts
- Model catalog normalization converts names to OpenRouter-style slashes, causing 'model not found' errors when switching to Ollama models.
- Ollama's /v1/models endpoint returns model information without context window metadata,

## Concepts
- React hooks
- Ollama Provider Configuration

_Importance: 5 · Confidence: 0.9_
