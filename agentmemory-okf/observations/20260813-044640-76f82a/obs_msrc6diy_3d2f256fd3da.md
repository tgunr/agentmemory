---
type: file_edit
title: Check mcp version using pip
description: (pip show & grep)
resource: agentmemory://observation/obs_msrc6diy_3d2f256fd3da
tags: ["file_edit"]
timestamp: 2026-08-13T09:49:15.125661+00:00
source: agentmemory
session_id: 20260813_044640_76f82a
importance: 6
confidence: 0.75
---
# Summary

The agent ran a check using pip on both hermes-mcp and miniconda-mcp to verify their versions.

## Facts
- Tool: terminal
Command: /Users/davec/.hermes/hermes-agent/venv/bin/python3 -c \“import mcp; print(hermes-mcp, getattr(mcp,'__version__','?'))\" 2>&1; pip show mcp 2>/dev/null | grep -i version;
- Command: /opt/homebrew/Caskroom/miniconda/base/bin/python3 -c \“import mcp; print(miniconda-mcp, getattr(mcp,'__version__','?'))\" 2>&1 | head -2;

_Importance: 6 · Confidence: 0.75_
