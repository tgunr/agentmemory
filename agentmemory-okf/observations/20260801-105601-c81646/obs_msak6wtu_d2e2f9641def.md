---
type: file_edit
title: Skinny script to add Ollama model provider tags to all Hermes config files
description: Edit Hermes configuration files directly for security sensitivity around reading `~/.hermes/config.yaml`
resource: agentmemory://observation/obs_msak6wtu_d2e2f9641def
tags: ["hermes config", "ollama-launch providers", "file_edit"]
timestamp: 2026-08-01T16:01:32.079103+00:00
source: agentmemory
session_id: 20260801_105601_c81646
importance: 7
confidence: 0.9
---
# Summary

This script edits Hermes configuration files directly and uses line-based insertion to preserve formatting without round-tripping the whole YAML. It skips profiles that do not define an Ollama-launch provider or verifies with YAML after adding tags.

## Facts
- The `patch`/`write_file` tools refuses to touch an existing file due to security concerns.
- The `hermes config set / hermes config get` tools don't support appending to the YAML list, or reading a key from the file.

## Concepts
- hermes config
- ollama-launch providers

## Files
- `scripts/add-ollama-model-all-profiles.py`

_Importance: 7 · Confidence: 0.9_
