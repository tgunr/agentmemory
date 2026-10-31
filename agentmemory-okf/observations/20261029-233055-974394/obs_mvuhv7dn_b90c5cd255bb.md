---
type: file_edit
title: ESLint and TypeScript build failed
description: No errors in key files, but syntax errors in i18n files
resource: agentmemory://observation/obs_mvuhv7dn_b90c5cd255bb
tags: ["ESLint", "TypeScript", "file_edit"]
timestamp: 2026-10-30T04:50:57.173634+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 8
confidence: 0.9
---
# Summary

The build process for Desktop application failed due to syntax errors in ESLint checks.

## Facts
- Tool used: terminal
- Command executed: npx tsc -p tsconfig.json --noEmit && npx eslint src/store/projects.ts src/i18n/en_projects.ts src/i18n/types_projects.ts src/app/chat/sidebar/session-actions-menu.tsx && npm run i18n:keys >/dev/null && npm run build 2>&1 | tail -4

## Concepts
- ESLint
- TypeScript

## Files
- `/Users/davec/.hermes/tools/node-26.7.0-darwin-arm64/bin`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/tsconfig.json`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/i18n/en_projects.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/i18n/types_projects.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/session-actions-menu.tsx`

_Importance: 8 · Confidence: 0.9_
