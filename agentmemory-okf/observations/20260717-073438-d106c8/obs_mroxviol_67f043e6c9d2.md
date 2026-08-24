---
type: CommandRun
title: Test script fails due to missing hermes-sessions.mjs module
description: Attempted to verify session title resolution logic against SQLite state DB
resource: agentmemory://observation/obs_mroxviol_67f043e6c9d2
tags: ["Node.js ESM module resolution", "SQLite database querying", "Hermes session state management", "Missing build artifact", "commandrun"]
timestamp: 2026-07-17T12:53:39.281307+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A test script was executed to verify session title resolution functions against the Hermes SQLite state database. The execution failed because the compiled module hermes-sessions.mjs was not found in the dist/state/ directory, indicating a missing build artifact or incorrect path.

## Facts
- Command attempted to run a Node.js script importing /Volumes/AI/agentmemory/dist/state/hermes-sessions.mjs
- Script used Python to query ~/.hermes/profiles/ai/state.db for a session ID and title
- Node.js v22.22.3 threw ERR_MODULE_NOT_FOUND for the missing module
- The dist/state/hermes-sessions.mjs file does not exist in the expected path

## Concepts
- Node.js ESM module resolution
- SQLite database querying
- Hermes session state management
- Missing build artifact

## Files
- `/Volumes/AI/agentmemory/dist/state/hermes-sessions.mjs`
- `~/.hermes/profiles/ai/state.db`

_Importance: 5 · Confidence: 1_
