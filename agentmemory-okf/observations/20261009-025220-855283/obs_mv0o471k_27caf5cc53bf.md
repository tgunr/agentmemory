---
type: FileRead
title: skill_view: Apple FM as Hermes Compression Backend
description: Using `fm serve` (Apple Foundation Models) as the compression/auxiliary model makes session summarization dramatically faster than local Ollama models on Apple Silicon Macs.
resource: agentmemory://observation/obs_mv0o471k_27caf5cc53bf
tags: ["Neural Engine", "Apple FM", "Hermes", "fileread"]
timestamp: 2026-10-09T07:52:49.060085+00:00
source: agentmemory
session_id: 20261009_025220_855283
importance: 8
confidence: 0.9
---
# Summary

The use of Apple FM with Hermes compression provides significant speed improvements for summarization on Apple Silicon Macs.

## Facts
- AFM runs on the **Neural Engine**, not the GPU — no VRAM contention with whatever chat model
- Measured on Apple Silicon (M-series, macOS 27): ~4s for a short summary, ~10s for a 3,400-token prompt

## Concepts
- Neural Engine
- Apple FM
- Hermes

## Files
- `references/apple-fm-compression-backend.md`

_Importance: 8 · Confidence: 0.9_
