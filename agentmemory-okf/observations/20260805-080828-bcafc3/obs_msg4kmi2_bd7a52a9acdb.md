---
type: FileRead
title: Fix — swap to a native-≥64K model (cheapest on RAM)
description: Relaunch `qwen3:14b` with rope-scaling or switch to a native ≥64K model.
resource: agentmemory://observation/obs_msg4kmi2_bd7a52a9acdb
tags: ["model naming conventions", "fileread"]
timestamp: 2026-08-05T13:30:55.074691+00:00
source: agentmemory
session_id: 20260805_080828_bcafc3
importance: 8
confidence: 0.9
---
# Summary

Background curator patch operation rejected due to lack of SKILL.md content load. Instead, consider re-running with rope-scaling or configuring a native-64K model.

## Facts
- Relaunch `qwen3:14b` with rope-scaling and `--rope-scaling yarna + scale`
- `providers.llamacpp.default_model: llama3.2:3b` in `~/.hermes/config.yaml`

## Concepts
- model naming conventions

_Importance: 8 · Confidence: 0.9_
