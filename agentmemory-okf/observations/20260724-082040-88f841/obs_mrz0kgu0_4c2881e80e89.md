---
type: file_edit
title: "Wrong fix (looks right, fails its own regression test)"
description: Nice catch on profile directory leakage.
resource: agentmemory://observation/obs_mrz0kgu0_4c2881e80e89
tags: ["file_edit"]
timestamp: 2026-07-24T14:06:44.270718+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.75
---
# Summary

This is a fix for a bug where a profile directory leak occurs when transitioning between profiles. The fix involves using a context variable to read the correct profile directory.

## Facts
- Total number of commits in the hermes-agent repository
- The `HERMES_HOME` variable used to store profile directories is not inherited by child processes

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/references/desktop-cwd-profile-leak.md`

_Importance: 7 · Confidence: 0.75_
