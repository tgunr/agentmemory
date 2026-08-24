---
type: file_edit
title: Patch to correct gateway `TERMINAL_CWD` and project workspace
description: Edit of key configuration for skill «hermes-workspace-context»
resource: agentmemory://observation/obs_mrz0iy8m_0487b3d59a8e
tags: ["Terminal CWD leakage in Hermes", "Project workspace vs user session", "Skill management patching", "file_edit"]
timestamp: 2026-07-24T14:05:33.521493+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 8
confidence: 0.9
---
# Summary

The gateway's `TERMINAL_CWD` property can leak the launch profile's cwd, impacting session and project work. A patch corrects this issue and updates the skill's «Start Work» button workflow.

## Facts
- Background curator refusing background patch due to unloaded current SKILL content.
- Leak in `<web_server.py:_resolve_chat_argv>` causes gateway `TERMINAL_CWD` issues when switching profiles.

## Concepts
- Terminal CWD leakage in Hermes
- Project workspace vs user session
- Skill management patching

## Files
- `~/.hermes/projects.db`

_Importance: 8 · Confidence: 0.9_
