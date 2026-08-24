---
type: FileRead
title: Ollama Provider Troubleshooting Guide
description: 
resource: agentmemory://observation/obs_msacl1z6_a3bc698894da
tags: ["Model Catalog Normalization", "fileread"]
timestamp: 2026-08-01T12:28:35.006462+00:00
source: agentmemory
session_id: 20260801_071654_4d9478
importance: 8
confidence: 0.9
---
# Summary

The user configured the local Ollama provider in Hermes using the ollama-launch section in hermes/config.yaml, ensuring that model provider, model_catalog.enabled, and model.base_url are set correctly. This resolved the "model not found" issue when switching to Ollama models.

## Facts
- Model catalog normalization converts colon (:) to slash (/) format, which Ollama doesn't recognize.
- Disable model catalog normalization and clear model-level overrides to use ollama-launch provider settings.

## Concepts
- Model Catalog Normalization

## Files
- `/Users/davec/.hermes/profiles/ollama/skills/autonomous-ai-agents/ollama-provider-troubleshooting/SKILL.md`

_Importance: 8 · Confidence: 0.9_
