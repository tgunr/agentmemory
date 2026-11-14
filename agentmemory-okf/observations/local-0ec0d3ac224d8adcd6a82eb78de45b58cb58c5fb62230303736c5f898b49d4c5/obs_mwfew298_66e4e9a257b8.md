---
type: file_edit
title: Hermes configuration edit
description: Edited configuration files
resource: agentmemory://observation/obs_mwfew298_66e4e9a257b8
tags: ["configuration edit", "file_edit"]
timestamp: 2026-11-13T20:10:48.037979+00:00
source: agentmemory
session_id: local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5
importance: 4
confidence: 0.9
---
# Summary

A configuration edit was made to include the "ultra" value for certain parameters, specifically in the hermes_cli/models.py file.

## Facts
- Command executed: "cd ~/.hermes/hermes-agent && grep -rn \"ultra\" hermes_cli/config_defaults.py hermes_cli/models.py hermes_cli/model_switch.py ui-tui/src/domain/slash.ts 2>/dev/null | head -30"

## Concepts
- configuration edit

## Files
- `~/.hermes/hermes-agent/hermes_cli/config_defaults.py`

_Importance: 4 · Confidence: 0.9_
