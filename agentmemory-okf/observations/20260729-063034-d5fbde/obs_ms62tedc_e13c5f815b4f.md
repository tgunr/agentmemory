---
type: FileRead
title: render helpers desktop code review of Hermes Git worktree functionality
description: Review of render helpers and VISUAL worktree enhancer in desktop app.
resource: agentmemory://observation/obs_ms62tedc_e13c5f815b4f
tags: ["Hermes Git Worktree", "fileread"]
timestamp: 2026-07-29T12:44:03.449466+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 8
confidence: 0.9
---
# Summary

The desktop app is reviewing its render helpers and VISUAL worktree enhancer, which are covered by tests on the backend. The current code pinning trunk to the top, followed by kanban, with the rest of the worktrees ordered alphabetically.

## Facts
- The Hermes Git worktree groups are covered by tests, but this file only covers the thin render helpers and visual worktree enhancers.
- Trunk is pinned to the top, kanban to the bottom, with other worktrees ordered by recency.

## Concepts
- Hermes Git Worktree

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-groups.test.ts`

_Importance: 8 · Confidence: 0.9_
