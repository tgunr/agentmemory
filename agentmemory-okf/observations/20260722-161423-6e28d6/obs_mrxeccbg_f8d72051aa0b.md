---
type: file_edit
title: Patch tool edits CLI dispatch file
description: No changes detected beyond new syntax
resource: agentmemory://observation/obs_mrxeccbg_f8d72051aa0b
tags: ["file_edit"]
timestamp: 2026-07-23T10:56:47.446099+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 7
confidence: 0.85
---
# Summary

The patch tool edited the cli_dispatch.md file to improve its handling of prompts, making them safe and predictable. This change affects how commands are executed and may be relevant for developers working with autonomous AI agents.

## Facts
- The CLI now passes the prompt as the final element of an argv list safely and predictably.
- The CLI's COMMAND_REGISTRY makes /route appear in autocomplete and slash menus, requiring a quick_commands: route block in config.yaml for sufficient coverage.
- The CLI just prints the script's stdout without applying the model; switching requires a follow-up /model command.

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/references/cli-dispatch.md`

_Importance: 7 · Confidence: 0.85_
