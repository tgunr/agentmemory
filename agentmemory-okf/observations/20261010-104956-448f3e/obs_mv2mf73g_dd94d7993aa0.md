---
type: FileRead
title: Resuming interrupted rebase
description: Git rebase fails due to promisor remote issue
resource: agentmemory://observation/obs_mv2mf73g_dd94d7993aa0
tags: ["Rebase failures", "fileread"]
timestamp: 2026-10-10T16:40:55.463106+00:00
source: agentmemory
session_id: 20261010_104956_448f3e
importance: 7
confidence: 0.9
---
# Summary

When a rebase dies mid-sequence, the error mentions the promisor remote, causing the rebase to stop. The failure happens between picks, indicating that the rebase was interrupted.

## Facts
- The rebase stops when the error mentions the promisor remote.
- The failure happens between picks, not during a conflict resolution.

## Concepts
- Rebase failures

## Files
- `references/rebase-partial-clone.md`

_Importance: 7 · Confidence: 0.9_
