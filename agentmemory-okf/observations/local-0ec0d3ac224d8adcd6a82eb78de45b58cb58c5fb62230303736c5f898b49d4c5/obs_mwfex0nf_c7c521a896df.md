---
type: file_edit
title: Reasoning capability agent
description: Checks if a live route may return a clean-stop reasoning payload as the answer
resource: agentmemory://observation/obs_mwfex0nf_c7c521a896df
tags: ["reasoning capability", "provider-level capabilities", "file_edit"]
timestamp: 2026-11-13T20:11:32.613701+00:00
source: agentmemory
session_id: local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5
importance: 7
confidence: 0.9
---
# Summary

The reasoning capability agent checks if a live route may return a clean-stop reasoning payload as the answer. It ensures that the provided model supports the capability, and the live route is configured to enable it.

## Facts
- Uses _entry_for_route, get_custom_provider_model_capability, and custom_provider_slug
- Checks for specific capabilities in the live route, such as OpenRouter and DeepSeek

## Concepts
- reasoning capability
- provider-level capabilities

## Files
- `~/.hermes/hermes-agent/agent/reasoning_promotion.py`
- `~/.hermes/hermes-agent/agent/reasoning_timeouts.py`

_Importance: 7 · Confidence: 0.9_
