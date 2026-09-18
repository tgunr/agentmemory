---
type: file_write
title: Skill manage: Terminal CWD leak fix and regression test
description: User reports desktop sessions landing in the wrong directory
resource: agentmemory://observation/obs_mrz0k4v5_a38e2c14253b
tags: ["Terminal CWD leak", "Contextvars for config scoping", "file_write"]
timestamp: 2026-07-24T14:06:28.765267+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 1
---
# Summary

Skill manage has a bug where the child processes inherit the launch profile's TERMINAL_CWD instead of the requested one. This causes desktop sessions to land in the wrong directory. The fix involves introducing a contextvar that scopes the config read and changes the spawned child's env.

## Facts
- The gateway process env carries a stale TERMINAL_CWD.
- The child env dict inherits the launch profile's TERMINAL_CWD, not the requested profile's.
- The bridge reads the terminal.cwd via os.environ['HERMES_HOME'] of the running process, not the env dict being assembled.

## Concepts
- Terminal CWD leak
- Contextvars for config scoping

## Files
- `/Volumes/davec/stale-samba`
- `/Users/davec/correct-workspace#endif`

_Importance: 7 · Confidence: 1_
