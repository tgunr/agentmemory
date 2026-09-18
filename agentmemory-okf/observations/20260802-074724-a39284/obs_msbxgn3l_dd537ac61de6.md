---
type: file_edit
title: Hermes Desktop Build Error - Session Not Found
description: Detailed stderr output from the 'hermes desktop build' command
resource: agentmemory://observation/obs_msbxgn3l_dd537ac61de6
tags: ["stale persisted session tile", "file_edit"]
timestamp: 2026-08-02T15:00:47.210092+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 6
confidence: 0.9
---
# Summary

Herpes Desktop encountered a runtime error when launching, but the `hermes-desktop-build` command executed successfully. The issue likely stems from a stale persisted session tile and should be resolved by clearing persisted state.

## Facts
- The 'fs.Stats constructor is deprecated.' warning is not a build error.
- This session lookup error occurs due to a stale persisted tile in Electron localStorage.

## Concepts
- stale persisted session tile

## Files
- `references/runtime-session-not-found.md`

_Importance: 6 · Confidence: 0.9_
