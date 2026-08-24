---
type: FileRead
title: Ollama Provider Troubleshooting
description: 
resource: agentmemory://observation/obs_msaghwlf_f7d3e7ec4524
tags: ["Model catalog normalization", "fileread"]
timestamp: 2026-08-01T14:18:06.503373+00:00
source: agentmemory
session_id: 20260801_075936_c47c4c
importance: 4
confidence: 0.9
---
# Summary

The issue occurs because model catalog normalization converts the colon (`:`) to slash (`/`) format, which Ollama doesn't recognize. To fix it, disable model catalog normalization and clear model-level overrides.

## Facts
- Herpes reports "model not found" when switching to Ollama models.

## Concepts
- Model catalog normalization

## Files
- `/reset (CLI)`

_Importance: 4 · Confidence: 0.9_
