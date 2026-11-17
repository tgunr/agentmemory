---
type: FileRead
title: Failed click on BoltAI window
description: Re-read coordinates from a fresh get_window_state screenshot.
resource: agentmemory://observation/obs_mwjj4ruv_815ad4e99a7f
tags: ["pixel click", "electron/chromium window", "fileread"]
timestamp: 2026-11-16T17:20:37.626448+00:00
source: agentmemory
session_id: local-63bd570472d7430dec4c581f71cae3d0df384a8d17f2f6bf3a098d733b1fba30
importance: 7
confidence: 1
---
# Summary

A user attempted to click on an element within BoltAI, but the click event was rejected. The recommended course of action is to re-issue the click action with a foreground delivery mode.

## Facts
- click action outside window 10484's frame
- Failure code: tool_invocation_failed
- Verdict: escalate

## Concepts
- pixel click
- electron/chromium window

_Importance: 7 · Confidence: 1_
