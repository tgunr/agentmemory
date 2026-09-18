---
type: FileRead
title: Grep command fails in App.tsx
description: Fails to find \"Home\\|home\" pattern in /Users/davec/.hermes/hermes-agent/web/src/App.tsx
resource: agentmemory://observation/obs_ms7c9z4k_7831b71bfbcc
tags: ["fileread"]
timestamp: 2026-07-30T09:56:39.567828+00:00
source: agentmemory
session_id: 20260730_044312_76bb72
importance: 5
confidence: 0.75
---
# Summary

The grep command failed to find the specified pattern in the App.tsx file due to an unexpected match. This is likely related to case insensitivity and/or Unicode issues.

## Facts
- The command used was grep -n &quot;Home\\|home&quot;.
- Returned a non-zero exit code of 1.

## Files
- `/Users/davec/.hermes/hermes-agent/web/src/App.tsx`

_Importance: 5 · Confidence: 0.75_
