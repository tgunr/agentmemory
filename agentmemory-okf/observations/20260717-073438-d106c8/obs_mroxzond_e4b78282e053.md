---
type: Error
title: Hermes session verification script failed - module not found
description: better-sqlite3 module not accessible from temp directory
resource: agentmemory://observation/obs_mroxzond_e4b78282e053
tags: ["Node.js module resolution", "SQLite database testing", "Temporary directory isolation", "Hermes session management", "error"]
timestamp: 2026-07-17T12:56:53.636042+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

The verification script for hermes-sessions.ts failed because it was executed from a temporary directory that doesn't have access to the node_modules in /Volumes/AI/agentmemory. The better-sqlite3 module couldn't be resolved, preventing the tests from running. This is a path resolution issue - the script needs to either run from the project directory or have node_modules accessible.

## Facts
- Verification script created in /var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes-verify-2RDDtW/verify.ts
- Script tested resolveSessionTitle, lookupHermesSessionByKey, and lookupHermesSessionTitle functions
- Error: Cannot find module 'better-sqlite3' when running from temp directory
- Script attempted to test against both mock DB and real DB at ~/.hermes/profiles/ai/state.db
- Exit code 1 - verification failed

## Concepts
- Node.js module resolution
- SQLite database testing
- Temporary directory isolation
- Hermes session management

## Files
- `/Volumes/AI/agentmemory/src/state/hermes-sessions.ts`
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes-verify-2RDDtW/verify.ts`

_Importance: 4 · Confidence: 1_
