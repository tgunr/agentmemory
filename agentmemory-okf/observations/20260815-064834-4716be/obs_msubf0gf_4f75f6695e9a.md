---
type: file_edit
title: Update fallback providers configuration
description: No source tree
resource: agentmemory://observation/obs_msubf0gf_4f75f6695e9a
tags: ["file_edit"]
timestamp: 2026-08-15T11:51:17.001721+00:00
source: agentmemory
session_id: 20260815_064834_4716be
importance: 8
confidence: 0.75
---
# Summary

A command was executed in the Hermes terminal to update the fallback providers configuration, which involves adding and merging new list formats. This is an architectural decision as it affects the way configuration data is loaded.

## Facts
- Command: cd ~/.hermes/hermes-agent 2>/dev/null && grep -rn \"fallback_providers\" --include=*.py . | grep -iE \"get\\(|\['|provider|model|split|strip|isinstance|dict|str\"

## Files
- `./hermes_cli/fallback_cmd.py:15:Storage: ``fallback_providers`` in ``~/.hermes/config.yaml`` (top-level, list of ./hermes_cli/dump.py:272: fallbacks = config.get("fallback_providers", []))`
- `./hermes_cli/fallback_config.py:83: &quot;fallback_providers&quot; remains the primary source of truth and keeps its.`

_Importance: 8 · Confidence: 0.75_
