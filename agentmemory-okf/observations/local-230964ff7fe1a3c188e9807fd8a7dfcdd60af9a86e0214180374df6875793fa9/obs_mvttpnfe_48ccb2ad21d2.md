---
type: Observation
title: grep -n "def \\|enabled" gateway/config_env.py
description: Extracting enabled credential names and platform details
resource: agentmemory://observation/obs_mvttpnfe_48ccb2ad21d2
tags: ["gateway/config_env.py", "enabled", "observation"]
timestamp: 2026-10-29T17:34:47.255475+00:00
source: agentmemory
session_id: local-230964ff7fe1a3c188e9807fd8a7dfcdd60af9a86e0214180374df6875793fa9
importance: 8
confidence: 0.9
---
# Summary

The command `grep -n "def \\|enabled" gateway/config_env.py` extracted enabled credential names and platform details. This output will be useful for understanding the Hermes Agent's configuration and plugin functionality.

## Facts
- Output from command: "def _enable_credential_names(platform: Platform) -> tuple:
 46:    def _warn_explicit_disable_beats_env(platform: Platform) -> None:
 51:        """"One-time WARNING: ``platforms.<x>.enabled: false`` wins over env creds (which
 61:        ``Platform '%s' is explicitly disabled by platforms.%s.enabled: false in ``
 76:        ``explicit disable. Remove the key or set platforms.%s.enabled: true to ``"

## Concepts
- gateway/config_env.py
- enabled

_Importance: 8 · Confidence: 0.9_
