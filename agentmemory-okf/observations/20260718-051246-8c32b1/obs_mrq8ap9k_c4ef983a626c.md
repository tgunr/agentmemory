---
type: file_write
title: Projects sidebar reference doc created
description: Documents SQLite schema, session association logic, and debugging approach for Hermes Desktop sidebar
resource: agentmemory://observation/obs_mrq8ap9k_c4ef983a626c
tags: ["SQLite schema design", "project sidebar architecture", "session-project auto-association", "backend-first debugging", "RPC endpoints (projects.tree, projects.project_sessions)", "single source of truth pattern", "Tauri/Electron thin renderer pattern", "file_write"]
timestamp: 2026-07-18T10:33:09.989447+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

A comprehensive reference document was created capturing non-obvious architectural knowledge about the Hermes Desktop Projects sidebar. It documents the SQLite schema, automatic session-to-project association mechanism, and a backend-first debugging philosophy. This preserves critical knowledge from a retired projects skill to prevent future regressions.

## Facts
- File written to /Users/davec/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/references/projects-sidebar-and-consolidation.md (9374 bytes)
- Projects sidebar backed by ~/.hermes/projects.db (global SQLite, not per-profile) — single source of truth
- Schema: projects table (id, slug, name, description, icon, color, board_slug, primary_path, created_at, archived) and project_folders table (project_id, path, label, is_primary, added_at)
- Sessions auto-associate to projects when session cwd or git_repo_root falls under any project_folders.path — no manual linking
- Retired projects.yaml pattern should not be revived (was disconnected from sidebar)
- Project tree built authoritatively on backend in tui_gateway/project_tree.py, exposed via projects.tree and projects.project_sessions RPCs
- Electron app is thin renderer — debug backend data before touching frontend
- Includes Python script for bulk project registration with primary/secondary folder support
- Session cwd backfill query: UPDATE sessions SET cwd='/path/to/project' WHERE id='&lt;sid&gt;' in ~/.hermes/state.db

## Concepts
- SQLite schema design
- project sidebar architecture
- session-project auto-association
- backend-first debugging
- RPC endpoints (projects.tree, projects.project_sessions)
- single source of truth pattern
- Tauri/Electron thin renderer pattern

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/references/projects-sidebar-and-consolidation.md`
- `tui_gateway/project_tree.py`
- `~/.hermes/projects.db`
- `~/.hermes/state.db`

_Importance: 6 · Confidence: 1_
