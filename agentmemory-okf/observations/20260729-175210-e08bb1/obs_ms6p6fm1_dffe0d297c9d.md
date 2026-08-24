---
type: FileRead
title: Missing exports in build output
description: Npm command produces error message.
resource: agentmemory://observation/obs_ms6p6fm1_dffe0d297c9d
tags: ["npm build command", "Missing exports error", "JavaScript export issues", "fileread"]
timestamp: 2026-07-29T23:10:03.137793+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 5
confidence: 0.9
---
# Summary

During terminal call, the process of running a build command showed errors related to missing exports.

## Facts
- Cd to .hermes/hermes-agent/apps/desktop, ran npm run build with | grep, and checked for missing exports
- The output searched for "Missing export" and found matches in src/store/session.ts

## Concepts
- npm build command
- Missing exports error
- JavaScript export issues

## Files
- `.hermes/hermes-agent/apps/desktop/npm-debug.log`

_Importance: 5 · Confidence: 0.9_
