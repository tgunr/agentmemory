---
type: file_edit
title: git-auto-commit script updated
description: No changes detected in main script, but submodule-related issues found.
resource: agentmemory://observation/obs_mrw6nlrl_40d8828656d4
tags: ["file_edit"]
timestamp: 2026-07-22T14:33:49.803626+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 6
confidence: 0.75
---
# Summary

The git-auto-commit script was modified to include treatment of submodule modifications by default, with warnings for uncommitted changes in submodules. The daemon's skip logic has also been tweaked to notify users about needing to commit within the submodule.

## Facts
- Merged submodule commit logic from a new string to an existing one.
- Created a diff file with the updated logic.

## Files
- `/Users/davec/.hermes/scripts/git-auto-commit.py`

_Importance: 6 · Confidence: 0.75_
