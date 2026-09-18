---
type: file_edit
title: UPDATE skill file paths in router.py
description: No additional context provided
resource: agentmemory://observation/obs_mrwnb9h8_aa9ef820c9db
tags: ["skinning", "file system navigation", "file_edit"]
timestamp: 2026-07-22T22:20:07.480916+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 5
confidence: 0.9
---
# Summary

User made changes to file paths using patch tool, potentially affecting model selection routing scripts. This change is part of a larger refactor.

## Facts
- Patch tool applied to /Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/scripts(router.py)
- New file paths in models.yaml and recent.json files are:_SKILL_DIR = Path(__file__).resolve().parent.parent\n_CONFIG_PATH = _SKILL_DIR / \"models.yaml\"\n_RECENT_PATH = _SKILL_DIR / \"state\" / \"recent.json\"",

## Concepts
- skinning
- file system navigation

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/scripts/router.py`

_Importance: 5 · Confidence: 0.9_
