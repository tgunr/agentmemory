---
type: FileRead
title: Reviewed sidebar session group model
description: Inspected grouping metadata for repository, worktree, profile, and kanban lanes.
resource: agentmemory://observation/obs_mrp889kj_5f52a7c3c078
tags: ["TypeScript interfaces", "sidebar session grouping", "Git worktrees", "kanban lane aggregation", "pagination callbacks", "fileread"]
timestamp: 2026-07-17T17:43:30.160192+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The read examined the core sidebar group interface used to organize sessions into repository and worktree lanes. The model explicitly supports a pinned home lane and consolidation of potentially hundreds of kanban task worktrees into one synthetic row.

## Facts
- SidebarSessionGroup includes id, label, nullable path, SessionInfo sessions, loading pagination fields, sourceId, totalCount, and mode values profile, source, or workspace.
- Optional isMain marks a repository main checkout, isHome marks the pinned primary checkout lane labeled from the live branch with main as fallback, and isKanban marks a synthetic lane combining task worktrees under &lt;repo&gt;/.worktrees/t_*.
- Optional color applies to profile groups in the all-profiles view and is absent for workspace groups.
- The file contains 589 lines; only lines 12-36 were read.

## Concepts
- TypeScript interfaces
- sidebar session grouping
- Git worktrees
- kanban lane aggregation
- pagination callbacks

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-groups.ts`

_Importance: 3 · Confidence: 1_
