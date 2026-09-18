---
type: FileRead
title: Desktop CWD Notes
description: (authoritative sources checked during the session)
resource: agentmemory://observation/obs_ms60loc8_2a9fdb2f77ed
tags: ["Desktop CWD semantics", "fileread"]
timestamp: 2026-07-29T11:42:03.894258+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 7
confidence: 0.9
---
# Summary

Post-tool call hook detail and summary of HermesDesktop CWD notes. The output provides summaries from various documentation sources.
It matters because it explains the semantics of the `--cwd` setting for Desktop chat sessions, detailing when to use launch settings vs profile settings for Workspace Control.
Thus, this tool call is important because it illustrates technical concept application in context.

## Facts
- The CWD directory is set with `--cwd` or by setting an explicit `terminal.cwd` in the profile's config.
- `--cwd` is an **initial launch setting** for Desktop chat sessions, not a live command that retargets an already-running Desktop app or existing session.

## Concepts
- Desktop CWD semantics

## Files
- `references/desktop-cwd.md`

_Importance: 7 · Confidence: 0.9_
