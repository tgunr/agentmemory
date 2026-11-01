---
type: FileRead
title: Fix for Re-Injecting TERMINAL_CWD
description: Workaround for terminal command hanging due to cwd leak at Samba mount.
resource: agentmemory://observation/obs_mvw9y3ci_bbc7f7f52bd4
tags: ["Caveat for TERMINAL_CWD", "fileread"]
timestamp: 2026-10-31T10:44:47.343206+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 5
confidence: 0.9
---
# Summary

A terminal command hang occurred due to the cwd leak at the Samba mount. A patch was applied to fix the issue and the leak is still open work.

## Facts
- The login hook that sets the `TERMINAL_CWD` environment variable was not located in this session.
- A patch to re-inject the `TERMINAL_CWD` at login and fix the leak was applied.

## Concepts
- Caveat for TERMINAL_CWD

_Importance: 5 · Confidence: 0.9_
