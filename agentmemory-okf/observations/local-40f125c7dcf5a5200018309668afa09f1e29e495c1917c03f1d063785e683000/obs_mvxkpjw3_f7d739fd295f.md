---
type: file_edit
title: Edited use-statusbar-items.tsx
description: No linter for .tsx files, skipped after edit
resource: agentmemory://observation/obs_mvxkpjw3_f7d739fd295f
tags: ["import statements", "file_edit"]
timestamp: 2026-11-01T08:33:50.830868+00:00
source: agentmemory
session_id: local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000
importance: 6
confidence: 1
---
# Summary

Tool patch edited the use-statusbar-items.tsx script with a new import statement, which was skipped by the linting process due to lack of support for .tsx files.

## Facts
- Tool: patch
- Hook: post_tool_call
- Path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx
- Old file contents:
- import { $projectTree, projectNameForCwd } from '@/store/projects')
- New file contents:
- import { $activeProjectId, $projectTree, enterProject, projectNameForCwd } from '@/store/projects'\nimport { ALL_PROJECTS, $projectScope, exitProjectScope } from '@/store/project-scope}

## Concepts
- import statements

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx`

_Importance: 6 · Confidence: 1_
