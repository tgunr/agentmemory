---
type: decision
title: Patch profile-management skill with additional pitfalls
description: Added warnings about mounted dev repos and desktop slash command coordination
resource: agentmemory://observation/obs_mrp3csgy_a74a4249b027
tags: ["git worktree", "npm workspaces", "desktop slash commands", "vitest testing", "decision"]
timestamp: 2026-07-17T15:27:03.198907+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 7
confidence: 1
---
# Summary

The profile-management skill was updated to document critical operational gotchas discovered during development. New pitfalls include handling mounted dev repos that can silently lose uncommitted work when remounted, coordination requirements across 4 files for desktop slash commands, and test toolchain setup for the desktop app. This knowledge capture prevents future developers from encountering the same issues.

## Facts
- Tool skill_manage was used with action 'patch'
- Added warning about git worktrees mitigating silent data loss from remounted volumes like /Volumes/AI/
- Added documentation about 4 required edits for new desktop slash commands across multiple files
- Added note about desktop test toolchain using npm workspaces symlinks

## Concepts
- git worktree
- npm workspaces
- desktop slash commands
- vitest testing

## Files
- `SKILL.md (profile-management)`

_Importance: 7 · Confidence: 1_
