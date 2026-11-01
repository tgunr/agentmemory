---
type: file_edit
title: Updated compression engine settings
description: Settings changed for hermes_agent using hermes_cli/config_defaults.py
resource: agentmemory://observation/obs_mvwc3v4s_3bd407a1555f
tags: ["compression engine", "file_edit"]
timestamp: 2026-10-31T11:45:15.865658+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 8
confidence: 0.9
---
# Summary

Updated compression engine settings for hermes_agent. The new \"compressor\" engine improves performance, but also increases memory usage.

## Facts
- Updated compression engine settings to \"compressor\"
- New value for \"memory_trim\" enabled and set cooldown to 60 seconds

## Concepts
- compression engine

## Files
- `~/.hermes/hermes-agent/hermes_cli/config_defaults.py`

_Importance: 8 · Confidence: 0.9_
