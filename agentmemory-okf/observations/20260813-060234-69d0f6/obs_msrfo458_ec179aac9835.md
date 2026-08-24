---
type: file_edit
title: An error occurred during editable install with Miniconda Python
description: Insufficient permissions prevented installation of packages.
resource: agentmemory://observation/obs_msrfo458_ec179aac9835
tags: ["Miniconda", "file_edit"]
timestamp: 2026-08-13T11:27:01.617678+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 0.9
---
# Summary

An attempt to install packages using editable installation failed as a result of permissions restriction during execution in the target directory.

## Facts
- Command run at /opt/homebrew/Caskroom/miniconda/base/bin/python3 -m pip install -e . --no-deps, return code 0 due to error.
- A module named 'ollama_router' was not found. The import statement used '/Volumes/AI/Servers/MCP/mcp-ollama-router/src'

## Concepts
- Miniconda

## Files
- `/Volumes/AI/Servers/MCP/mcp-ollama-router/src`

_Importance: 8 · Confidence: 0.9_
