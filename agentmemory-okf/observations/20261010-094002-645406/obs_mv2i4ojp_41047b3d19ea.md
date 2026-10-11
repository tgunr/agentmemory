---
type: file_edit
title: Submodule worktree analysis
description: Git submodules and merge state
resource: agentmemory://observation/obs_mv2i4ojp_41047b3d19ea
tags: ["Git submodules", "Merge states", "Submodule worktree", "file_edit"]
timestamp: 2026-10-10T14:40:46.402970+00:00
source: agentmemory
session_id: 20261010_094002_645406
importance: 5
confidence: 1
---
# Summary

This post_tool_call script analyzes the Git submodule worktree, checking for merge states, unmerged files, and staged/unstaged file counts.

## Facts
- Tool: terminal
- Hook: post_tool_call
- Command: cat .git 2>&1; echo \"---\";...

## Concepts
- Git submodules
- Merge states
- Submodule worktree

## Files
- `/Users/davec/.hermes/.git/modules/hermes-agent`
- `/Users/davec/.hermes/.git/MERGE_MSG`
- `/Users/davec/.hermes/.git/MERGE_HEAD`

_Importance: 5 · Confidence: 1_
