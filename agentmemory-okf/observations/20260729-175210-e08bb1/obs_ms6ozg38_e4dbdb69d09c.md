---
type: file_edit
title: Npm error during build
description: Error occurred while running lifecycle script "build" in hermes@0.17.0 workspace.
resource: agentmemory://observation/obs_ms6ozg38_e4dbdb69d09c
tags: ["npm build error", "file_edit"]
timestamp: 2026-07-29T23:04:37.164503+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 8
confidence: 1
---
# Summary

Npm error occurred during the execution of the `build` lifecycle script in the hermes@0.17.0 workspace, indicating a potential issue with the exported functions.

## Facts
- Command executed: npm run build 2>&1 | tail -30
- Output:
[
  │ import { $unreadFinishedSessionIds } from \"@/store/session\";
   │          ────────────┬────────────
   │                      ╰────────────── Missing export
───╯
[
  • "\"$newChatWorkspaceTargetGeneration\" is not exported by \"src/store/session.ts\"."
  • " \" src/app/session/hooks/use-cwd-actions.ts:4:23 "
  • "at aggregateBindingErrorsIntoJsError"
]
- Error location: file:///Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-cwd-actions.ts
- Error message: Lifecycle script `build` failed with error:
            npm
            error
            code 1
            npm
            error path /Users/davec/.hermes/hermes-agent/apps/desktop
            npm
            error workspace hermes@0.17.0
            npm
            error location /Users/davec/.hermes/hermes-agent/apps/desktop
            npm
            error command failed
            npm
            command sh -c node scripts/assert-root-install.mjs && node scripts/write-build-stamp.mjs && vite build && node scripts/bundle-electron-main.mjs && node scripts/stage-native-deps.mjs",

## Concepts
- npm build error

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src	app/session/hooks/use-cwd-actions.ts`

_Importance: 8 · Confidence: 1_
