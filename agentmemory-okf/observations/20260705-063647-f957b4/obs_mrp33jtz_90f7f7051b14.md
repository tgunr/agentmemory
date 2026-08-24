---
type: FileRead
title: Read projects.ts store managing project tree and repo scanning
description: Lines 255-344 of 801 total lines in desktop store file
resource: agentmemory://observation/obs_mrp33jtz_90f7f7051b14
tags: ["optimistic eviction pattern", "project tree reconciliation", "desktop Git crawler integration", "RPC gateway requests", "fileread"]
timestamp: 2026-07-17T15:19:52.099850+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The file implements project tree management with optimistic UI updates using tombstone reconciliation to handle session evictions gracefully. It includes desktop-specific filesystem scanning via native Git crawler and manages project creation inputs including optional idea documentation.

## Facts
- refreshProjectTree() fetches ProjectTreePayload with preview_limit: 3 and reconciles optimistic eviction layer using tombstone Set to prevent unbounded growth
- fetchProjectSessions() retrieves fully hydrated lanes (repo->lane->session rows) for a specific project via projects.project_sessions RPC
- scanAndRecordRepos() performs one-per-app filesystem scan using desktopGit() native crawler, then calls projects.record_repos and refreshes tree
- CreateProjectInput interface defines project creation fields: name, folders, primaryPath, slug, description, icon, color, boardSlug, use, and optional idea written to IDEA.md
- Uses store variables: $projectTreeLoading, $projectTree, $activeProjectId, $removedSessionIds
- didScanRepos flag prevents repeated scans unless force=true

## Concepts
- optimistic eviction pattern
- project tree reconciliation
- desktop Git crawler integration
- RPC gateway requests

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`

_Importance: 5 · Confidence: 1_
