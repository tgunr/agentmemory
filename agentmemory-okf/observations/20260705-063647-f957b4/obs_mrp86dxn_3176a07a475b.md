---
type: Search
title: Found SessionInfo interface and cwd/git_repo_root type definitions
description: Search in hermes.ts for session-related types returned 5 matches
resource: agentmemory://observation/obs_mrp86dxn_3176a07a475b
tags: ["SessionInfo interface", "cwd type definition", "git_repo_root type", "search"]
timestamp: 2026-07-17T17:42:02.503223+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Search found the SessionInfo interface and related type definitions for session context including working directory and git repository root paths. This reveals the type structure for managing session state in the desktop application.

## Facts
- 5 total matches found in hermes.ts
- SessionInfo interface defined at line 318 with cwd and git_repo_root properties
- Line 214 shows cwd?: string
- Lines 320 and 330 show cwd and git_repo_root with null union types
- Line 399 has another cwd?: string declaration

## Concepts
- SessionInfo interface
- cwd type definition
- git_repo_root type

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/types/hermes.ts`

_Importance: 5 · Confidence: 1_
