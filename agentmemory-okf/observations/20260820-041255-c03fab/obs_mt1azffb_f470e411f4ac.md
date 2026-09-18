---
type: file_edit
title: Fixing Ollama Provider Issue in Hermes
description: The issue prevents model selection and fixes the problem with the API and file path formats.
resource: agentmemory://observation/obs_mt1azffb_f470e411f4ac
tags: ["Ollama Provider", "Model Catalog Normalization", "file_edit"]
timestamp: 2026-08-20T09:13:33.131909+00:00
source: agentmemory
session_id: 20260820_041255_c03fab
importance: 7
confidence: 0.9
---
# Summary

The Ollama provider has a normalization issue that prevents model selection when switching between models. To fix this, clear model-level overrides and set the correct provider configuration.

## Facts
- Model catalog normalization converts model names to OpenRouter format, causing issues with switching between Ollama models.
- Clearing model-level overrides and setting the correct provider configuration can resolve the problem.

## Concepts
- Ollama Provider
- Model Catalog Normalization

## Files
- `.hermes/skills/autonomous-ai-agents/ollama-provider-troubleshooting/SKILL.md`

_Importance: 7 · Confidence: 0.9_
