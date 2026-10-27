---
type: FileRead
title: Syncs the shell's CWD to the active profile's terminal.cwd
description: Runs <code>profile_cwd_sync.sh</code> in <code>/Users/davec/.hermes/scripts</code>
resource: agentmemory://observation/obs_mvpbtc19_a3b70b648788
tags: ["YAML parsing and path manipulation", "fileread"]
timestamp: 2026-10-26T14:02:41.320983+00:00
source: agentmemory
session_id: local-ae1a5b948491b8b77d70f559dd306964d65a32edfc28edb0ddf32cb16bcf1f6e
importance: 8
confidence: 0.9
---
# Summary

The script reads the <code>config.yaml</code> and sets the <code>TERMINAL_CWD</code> variable, fixing the shell's CWD to the active profile's terminal.cwd.

## Facts
- Script reads <code>config.yaml</code> and sets <code>TERMINAL_CWD</code> variable
- Script fixes the shell's CWD to the active profile's terminal.cwd

## Concepts
- YAML parsing and path manipulation

## Files
- `/Users/davec/.hermes/scripts/profile_cwd_sync.sh`

_Importance: 8 · Confidence: 0.9_
