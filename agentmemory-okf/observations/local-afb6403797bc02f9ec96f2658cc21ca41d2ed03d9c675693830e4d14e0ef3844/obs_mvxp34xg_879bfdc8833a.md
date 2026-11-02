---
type: Error
title: Failed patch operation on memory tool
description: No entry matched patch target, retrying with old_text
resource: agentmemory://observation/obs_mvxp34xg_879bfdc8833a
tags: ["post-commit hooks", "pre-commit script", "error"]
timestamp: 2026-11-01T10:36:23.088139+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 8
confidence: 1
---
# Summary

The patch operation failed due to no matching entry, and was retried with the original text. The tool usage was: 4,030/4,096.

## Facts
- Runtime usage: 4,030/4,096
- Operations: patch, content: "(commits land on main; lefthook pre-commit runs ruff — needs PATH=$PWD/.venv/bin:$, and eslint-clean desktop files: npx eslint --fix first)", old_text: "(tracks tg/main; origin-block pre-commit hook doesn't fire, commits OK)"
- Target: memory

## Concepts
- post-commit hooks
- pre-commit script

_Importance: 8 · Confidence: 1_
