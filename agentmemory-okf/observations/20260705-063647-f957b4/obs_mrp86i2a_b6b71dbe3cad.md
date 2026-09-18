---
type: FileRead
title: Read projectIdForCwd function implementation
description: Project ownership logic for working directories
resource: agentmemory://observation/obs_mrp86i2a_b6b71dbe3cad
tags: ["project ownership resolution", "longest path matching", "worktree handling", "reactive store state", "path containment logic", "fileread"]
timestamp: 2026-07-17T17:42:07.855287+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Read the projectIdForCwd function which determines which project owns a given working directory. The function uses longest path matching across project roots, repo paths, and worktree groups to handle linked worktrees that exist outside the main repo root.

## Facts
- File contains 801 total lines, 28092 bytes
- Read lines 156-175 showing projectIdForCwd function
- Function finds owning project for cwd using longest path match
- Handles project paths, repo roots, and worktree-lane paths
- Uses underPath utility for path containment checking
- Iterates through $projectTree reactive store

## Concepts
- project ownership resolution
- longest path matching
- worktree handling
- reactive store state
- path containment logic

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`

_Importance: 2 · Confidence: 1_
