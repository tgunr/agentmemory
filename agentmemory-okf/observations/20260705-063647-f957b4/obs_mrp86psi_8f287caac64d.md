---
type: FileRead
title: Read live-session project resolution logic
description: Inspected how sidebar sessions map to projects and repository lanes
resource: agentmemory://observation/obs_mrp86psi_8f287caac64d
tags: ["sidebar session grouping", "repository root detection", "nested path matching", "Git worktree lanes", "session upsert", "fileread"]
timestamp: 2026-07-17T17:42:17.870019+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The file section defines path-based assignment of live sessions to explicit projects, with repository roots acting as fallback project identities. It also introduces lane classification intended to mirror backend lane IDs and account for newly created sessions whose persisted repository root may not yet exist.

## Facts
- liveSessionProjectId returns null when cwd is empty, is a Kanban worktree directory, or lies outside the resolved repository root.
- For new sessions, git_repo_root falls back to cwd; path containment supports both slash styles.
- The most deeply nested folder match among non-archived explicit projects determines the project ID; otherwise the repository root is used as the ID.
- upsertSession deduplicates by session ID, prepends the updated session, and sorts all rows by started_at descending.
- liveLaneForRepo is documented to classify main checkouts as branch lanes, .worktrees/t_&lt;hex&gt; as Kanban, and other .worktrees/&lt;slug&gt; paths as separate worktree lanes.

## Concepts
- sidebar session grouping
- repository root detection
- nested path matching
- Git worktree lanes
- session upsert

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-groups.ts`

_Importance: 3 · Confidence: 1_
