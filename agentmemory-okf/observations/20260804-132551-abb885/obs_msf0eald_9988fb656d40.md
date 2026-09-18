---
type: file_edit
title: Profile Resolution Troubleshooting
description: Mixed profile issues in Hermes
resource: agentmemory://observation/obs_msf0eald_9988fb656d40
tags: ["file_edit"]
timestamp: 2026-08-04T18:46:15.066748+00:00
source: agentmemory
session_id: 20260804_132551_abb885
importance: 7
confidence: 0.75
---
# Summary

The problem occurs when a long-running backend spawns under the sticky profile, overriding the CLI flag. Clearing the sticky profile and restarting the gateway and TUI/Desktop app fixes the issue.

## Facts
- CLI flag `-p` is ignored, replaced by backend-provided profile at runtime
- The `hermes_cli/main.py` sets `HERMES_HOME` before parsing the first `-p`/`--profile` flag

## Files
- `/Users/davec/.hermes(profiles/cc/skills/autonomous-ai-agents/hermes-workspace-context/references/profile-resolution-troubleshooting.md`

_Importance: 7 · Confidence: 0.75_
