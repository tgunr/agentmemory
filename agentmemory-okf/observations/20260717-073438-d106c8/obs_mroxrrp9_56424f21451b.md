---
type: Error
title: node-gyp not found for better-sqlite3 build
description: Native module build failed due to missing node-gyp binary
resource: agentmemory://observation/obs_mroxrrp9_56424f21451b
tags: ["node-gyp", "native module compilation", "better-sqlite3", "pnpm workspace build", "error"]
timestamp: 2026-07-17T12:50:44.345924+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

Attempted to rebuild the better-sqlite3 native module via node-gyp but the binary is not available in the current PATH or node_modules. The fallback npm script was also not triggered, suggesting the shell may have swallowed the `||` chain. This blocks native module compilation for the agentmemory project.

## Facts
- Working directory: /Volumes/AI/agentmemory/node_modules/.pnpm/better-sqlite3@12.11.1/node_modules/better-sqlite3
- Error: "timeout: failed to run command 'node-gyp': No such file or directory"
- Fallback `npm run build-release` did not execute (exit_code 0 but error present)
- Used --nodedir derived from process.execPath
- Command wrapped in `timeout 300` to prevent hanging

## Concepts
- node-gyp
- native module compilation
- better-sqlite3
- pnpm workspace build

## Files
- `/Volumes/AI/agentmemory/node_modules/.pnpm/better-sqlite3@12.11.1/node_modules/better-sqlite3`

_Importance: 7 · Confidence: 1_
