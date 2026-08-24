---
type: file_edit
title: Find and grep utility functions in desktop apps
description: Examined the location of desktop controller utilities in app directories.
resource: agentmemory://observation/obs_ms6op0zw_b9729b0a1846
tags: ["file_edit"]
timestamp: 2026-07-29T22:56:31.048593+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 6
confidence: 0.75
---
# Summary

The tool found the relevant utility functions and printed their locations. This process can help organize app code and ensure consistency.

## Facts
- Executed a command using `cd` to find utilities in the specified directory structure.
- The search operation was only for files with `.ts` or `.tsx` extensions, filtering out node modules.

## Files
- `.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-list-actions.ts`

_Importance: 6 · Confidence: 0.75_
