---
type: file_edit
title: npm run test failed
description: No tests passed with the flag enabled
resource: agentmemory://observation/obs_mshj196z_87ff7d0598cc
tags: ["npm scripts", "cypress tests", "tutorial flags", "file_edit"]
timestamp: 2026-08-06T13:03:31.783824+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 8
confidence: 0.9
---
# Summary

The test command failed with an assertion error when the embeddingProvider was set to "none". This is a breaking change that should be reviewed.

## Facts
- Tool used was terminal
- Command executed: cd /Volumes/AI/agentmemory && HOME=$(mktemp -d) pnpm exec vitest run test/api-livez-flags.test.ts 2>&1 | tail -40

## Concepts
- npm scripts
- cypress tests
- tutorial flags

## Files
- `/Volumes/AI/agentmemory/livez and /agentmemory/config/flags > config/flags`
- `/agentmemory`
- `config/flags`
- `test/api-livez-flags.test.ts`

_Importance: 8 · Confidence: 0.9_
