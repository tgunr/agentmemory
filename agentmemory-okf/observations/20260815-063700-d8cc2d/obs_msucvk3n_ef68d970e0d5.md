---
type: Observation
title: Run AppleScript with error handling
description: No input, no arguments
resource: agentmemory://observation/obs_msucvk3n_ef68d970e0d5
tags: ["script errors", "AppleScript", "observation"]
timestamp: 2026-08-15T12:32:08.576279+00:00
source: agentmemory
session_id: 20260815_063700_d8cc2d
importance: 7
confidence: 1
---
# Summary

The tool terminal was called with a single command containing AppleScript. The script contained an error, and no output was expected; however, the tool exited instead. An error occurs due to the script syntax.

## Facts
- Tool: terminal
- Command: osascript /Users/davec/tq_run.applescript 2>&1; echo “---osascript exit=$?---”; echo “If macOS shows ‘wants to control Terminal’, click Allow.”
- Output: /Users/davec/tq_run.applescript:33:39: script error: Expected end of line but found “script”. (-2741) If macOS shows ‘wants to control Terminal’, click Allow.

## Concepts
- script errors
- AppleScript

## Files
- `none`

_Importance: 7 · Confidence: 1_
