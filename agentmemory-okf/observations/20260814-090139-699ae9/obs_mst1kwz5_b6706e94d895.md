---
type: file_edit
title: Run after a Hermes desktop/cli restart to verify TERMINAL_CWD leak and gateway cwd.
description: 
resource: agentmemory://observation/obs_mst1kwz5_b6706e94d895
tags: ["Terminal CWD leak", "Gateway process cwd", "MCP config loaded cleanly", "SSH terminal backend cwd", "file_edit"]
timestamp: 2026-08-14T14:28:10.094256+00:00
source: agentmemory
session_id: 20260814_090139_699ae9
importance: 8
confidence: 1
---
# Summary

To verify that the Hermes desktop/cli app's `terminal_cwd` doesn't leak, and the gateway processes run inside their correct cwd, run this checklist after a restart.

## Facts
- The launchd domain re-injects `TERMINAL_CWD:/Volumes/davec` at login.
- Confirm it is NOT set: `launchctl getenv TERMINAL_CWD` → expect empty output."
- The gateway process cwd is local APFS, not Samba.

## Concepts
- Terminal CWD leak
- Gateway process cwd
- MCP config loaded cleanly
- SSH terminal backend cwd

## Files
- `/Volumes/davec`

_Importance: 8 · Confidence: 1_
