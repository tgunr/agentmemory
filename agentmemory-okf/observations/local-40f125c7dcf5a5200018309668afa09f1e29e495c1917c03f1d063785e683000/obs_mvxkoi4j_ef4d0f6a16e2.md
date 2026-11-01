---
type: file_edit
title: hermes-agent statusbar-edit
description: Edits statusbar items in hermes-agent
resource: agentmemory://observation/obs_mvxkoi4j_ef4d0f6a16e2
tags: ["React JSX templates", "file_edit"]
timestamp: 2026-11-01T08:33:01.889216+00:00
source: agentmemory
session_id: local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000
importance: 8
confidence: 0.9
---
# Summary

Edits statusbar items to use Hermes's `StatusbarMenuItem` interface.

## Facts
- cd ~/.hermes/hermes-agent/apps/desktop/src && sed -n 486,530p app/shell/hooks/use-statusbar-items.tsx; echo \"=== menu item type:\"; grep -n \"interface StatusbarMenuItem\" -A 25 app/shell/statusbar-controls.tsx 2>/dev/null | head -35

## Concepts
- React JSX templates

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx`

_Importance: 8 · Confidence: 0.9_
