---
type: file_edit
title: Updated skills library in config.yaml
description: Loading and modifying skills library
resource: agentmemory://observation/obs_mvujfd27_28787de90a47
tags: ["config file management", "Python scripting", "file_edit"]
timestamp: 2026-10-30T05:34:37.275455+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 6
confidence: 1
---
# Summary

The skills library was updated in the config.yaml file using a terminal command. The change involved loading and modifying the skills library.

## Facts
- Tool used: terminal
- Command executed: grep, printf, and python3 invocation
- Command: "cd ~/.hermes/profiles/worker && grep -n \"external_dirs\\|^skills\" config.yaml; ..."
- Command output: {'external_dirs': ['/Users/davec/sources/hermes-knowledge/skills']}
- Command exit code: 0

## Concepts
- config file management
- Python scripting

## Files
- `~/.hermes/profiles/worker/config.yaml`

_Importance: 6 · Confidence: 1_
