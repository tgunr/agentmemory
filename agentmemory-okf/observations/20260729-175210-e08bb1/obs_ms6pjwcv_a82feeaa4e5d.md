---
type: FileRead
title: Desktop application typecheck failed with errors
description: NPM lifecycle script failed with error: Lifecycle script `typecheck` failed with error:
resource: agentmemory://observation/obs_ms6pjwcv_a82feeaa4e5d
tags: ["TypeScript definition errors", "fileread"]
timestamp: 2026-07-29T23:20:31.369160+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 4
confidence: 0.9
---
# Summary

The desktop application's build process failed to compile TypeScript, resulting in a failed NPM lifecycle script. The specific errors seen were related to missing properties on type definitions.

## Facts
- TypeScript compilation failed at /Users/davec/.hermes/hermes-agent/apps/desktop

## Concepts
- TypeScript definition errors

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/tsconfig.electron.json`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/tsconfig.e2e.json`

_Importance: 4 · Confidence: 0.9_
