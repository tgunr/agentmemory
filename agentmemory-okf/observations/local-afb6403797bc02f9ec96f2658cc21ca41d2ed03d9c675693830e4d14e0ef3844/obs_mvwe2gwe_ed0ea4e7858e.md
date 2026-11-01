---
type: file_edit
title: Fix Hermes slash command generation
description: No longer clip descriptions, use skill body instead
resource: agentmemory://observation/obs_mvwe2gwe_ed0ea4e7858e
tags: ["React hooks", "file_edit"]
timestamp: 2026-10-31T12:40:09.993864+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 0.9
---
# Summary

The `hermes-slash-command-dispatch` command's generation was fixed to prevent descriptions over 60 characters. This change addresses a bug that would clip descriptions.

## Facts
- Operation failed with error description
- Command touched: hermes-slash-command-dispatch

## Concepts
- React hooks

## Files
- `cli.py`

_Importance: 7 · Confidence: 0.9_
