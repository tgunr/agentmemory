---
type: FileRead
title: Reading workspace-groups.ts session project assignment logic
description: Lines 335-384 of 589 total lines covering liveSessionProjectId function
resource: agentmemory://observation/obs_mrp32ez3_a5b89ca0f6dc
tags: ["session management", "workspace grouping", "path matching algorithm", "git repository detection", "fileread"]
timestamp: 2026-07-17T15:18:59.147674+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Read the liveSessionProjectId function which assigns live worktree sessions to project lanes based on path matching. The function handles edge cases like kanban worktrees and sessions outside repo boundaries, then iterates through explicit projects to find the best matching folder path. An upsertSession helper follows for maintaining sorted session state.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-groups.ts
- Read lines 335-384 (truncated output showing 50 lines)
- Function liveSessionProjectId determines project ID for live sessions
- Returns null for cwd-less sessions, kanban-task worktrees, or worktrees outside repo root
- Uses git_repo_root or falls back to cwd for repo root detection
- Matches sessions to projects by checking if cwd/repoRoot is under project folder paths
- Function upsertSession maintains sorted session list by started_at timestamp

## Concepts
- session management
- workspace grouping
- path matching algorithm
- git repository detection

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-groups.ts`

_Importance: 5 · Confidence: 1_
