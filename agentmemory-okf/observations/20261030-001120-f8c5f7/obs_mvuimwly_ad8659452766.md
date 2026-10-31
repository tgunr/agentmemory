---
type: file_edit
title: terminal: grep for substitute_template_vars
description: crowsing code to find string
resource: agentmemory://observation/obs_mvuimwly_ad8659452766
tags: ["grep", "file_edit"]
timestamp: 2026-10-30T05:12:29.584314+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 6
confidence: 0.9
---
# Summary

The code was searched for the string \"substitute_template_vars\". All relevant files were found.

## Facts
- cd ~/.hermes/hermes-agent && grep -rn \"substitute_template_vars\" --include=*.py . | grep -v test | grep -v worktrees

## Concepts
- grep

## Files
- `./agent/skill_preprocessing.py`

_Importance: 6 · Confidence: 0.9_
