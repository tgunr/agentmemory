---
type: file_edit
title: Find references to sessionMatchesStoredId in Hermes Agent Desktop
description: Grep command run
resource: agentmemory://observation/obs_ms6orcmw_1ffdde9ad0fc
tags: ["React hooks", "TypeScript type checking", "file_edit"]
timestamp: 2026-07-29T22:58:19.443767+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 8
confidence: 0.9
---
# Summary

The output of the `grep` command reveals multiple occurrences of `sessionMatchesStoredId` in various TypeScript files within the `/src/app` directory.

## Facts
- Command: cd ~/.hermes/hermes-agent/apps/desktop && grep -rn "sessionMatchesStoredId" src/ --include="*.ts" --include="*.tsx" 2>&1
- Found file references in:

## Concepts
- React hooks
- TypeScript type checking

## Files
- `/src/app/chat/sidebar/session-actions-menu.tsx`
- `/src/app/chat/index.tsx`

_Importance: 8 · Confidence: 0.9_
