---
type: file_write
title: Write better-sqlite3 binding troubleshooting guide to skill
description: Documenting native addon build fixes, temp dir module resolution, and tsx traps
resource: agentmemory://observation/obs_mroy4imp_69ffbf6ceb22
tags: ["better-sqlite3 native bindings", "prebuild-install", "NODE_PATH module resolution", "tsx top-level await CJS trap", "vitest testing setup", "file_write"]
timestamp: 2026-07-17T13:00:39.117064+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A troubleshooting reference document was created for the agentmemory-debugging skill to resolve better-sqlite3 native binding errors encountered during vitest tests for hermes-sessions.ts. It provides actionable fixes for missing prebuilt binaries, NODE_PATH configuration for temporary directories, and tsx CJS top-level await limitations.

## Facts
- File written to skill 'agentmemory-debugging' at references/better-sqlite3-binding.md
- Absolute path: /Users/davec/.hermes/profiles/ai/skills/debugging/agentmemory-debugging/references/better-sqlite3-binding.md
- Documents fix for missing better-sqlite3 .node addon using prebuild-install in pnpm directory
- Explains running from temp dirs requires copying the package or setting NODE_PATH=/Volumes/AI/agentmemory/node_modules
- Notes tsx top-level await trap: must wrap script in async function main(){...}; main(); due to default cjs mode

## Concepts
- better-sqlite3 native bindings
- prebuild-install
- NODE_PATH module resolution
- tsx top-level await CJS trap
- vitest testing setup

## Files
- `references/better-sqlite3-binding.md`
- `/Users/davec/.hermes/profiles/ai/skills/debugging/agentmemory-debugging/references/better-sqlite3-binding.md`
- `src/state/hermes-sessions.ts`

_Importance: 5 · Confidence: 1_
