---
type: FileRead
title: Reviewed desktop project store initialization
description: Top of the renderer-side project state module
resource: agentmemory://observation/obs_mrp8e7x7_2cecf9c2e889
tags: ["Nanostores state management", "JSON-RPC project storage", "multi-folder workspaces", "per-profile persistence", "sidebar session grouping", "fileread"]
timestamp: 2026-07-17T17:48:07.957590+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The beginning of the desktop project store establishes cached Nanostores state for gateway-backed, per-profile projects. It also indicates that project data drives sidebar session grouping and repository/lane overview behavior.

## Facts
- The file contains 801 lines and is 28,092 bytes; only lines 1-25 were read.
- Projects are first-class per-profile named multi-folder workspaces served through projects.* JSON-RPC methods backed by a per-profile projects.db store.
- The sidebar groups sessions by project-folder membership, while renderer atoms maintain a cached view.
- $projects is initialized as atom&lt;ProjectInfo[]&gt;([]), and $activeProjectId as atom&lt;null | string&gt;(null).
- The module imports gateway, session, profile refresh, notification, persistence, desktop filesystem, Git, layout, and workspace grouping utilities.

## Concepts
- Nanostores state management
- JSON-RPC project storage
- multi-folder workspaces
- per-profile persistence
- sidebar session grouping

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/projects.ts`

_Importance: 3 · Confidence: 1_
