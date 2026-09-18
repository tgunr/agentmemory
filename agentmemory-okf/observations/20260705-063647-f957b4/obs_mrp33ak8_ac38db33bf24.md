---
type: FileRead
title: Projects store state management patterns
description: Optimistic updates with snapshot/restore and rollback
resource: agentmemory://observation/obs_mrp33ak8_ac38db33bf24
tags: ["optimistic updates", "state snapshot/restore", "error rollback", "state reconciliation", "store pattern", "gateway RPC", "fileread"]
timestamp: 2026-07-17T15:19:40.085416+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The file implements optimistic state management for projects with a snapshot/restore pattern. When createProject() is called, it captures current state, applies optimistic updates immediately for instant UI feedback, then persists to backend. If the backend call fails, it restores the snapshot to maintain consistency.

## Facts
- ProjectsSnapshot interface contains projects, tree, and active state
- snapshotProjects() captures current state from $projects, $projectTree, $activeProjectId stores
- restoreProjects() reverts state by setting all three stores
- persistOrRollback() awaits optimistic write and calls restoreProjects() on error
- reconcileProjects() triggers refreshProjects() and refreshProjectTree()
- projectInfoToTreeNode() maps ProjectInfo to SidebarProjectTree for instant UI feedback
- createProject() checks $projectsRpcAvailable before making gatewayRequest to 'projects.create'

## Concepts
- optimistic updates
- state snapshot/restore
- error rollback
- state reconciliation
- store pattern
- gateway RPC

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`

_Importance: 5 · Confidence: 1_
