---
type: file_edit
title: Redundant shell wrapper prevents Hermes tracking
description: No background process for the foreground command
resource: agentmemory://observation/obs_mws8yw1d_25bc3e3de092
tags: ["file_edit"]
timestamp: 2026-11-22T19:46:02.543374+00:00
source: agentmemory
session_id: 20260806_084129_e170ed
importance: 7
confidence: 0.85
---
# Summary

Running the command with shell-level background wrappers prevents Hermes from tracking the process. It's recommended to run the command with the wrapper removed and run readiness checks and tests in separate commands.

## Facts
- Command:
- open \"/Volumes/projects/UV/Camera Grid/scripts/perforated_mask_app.py\" --args 2>/dev/null
- nohup python3 \"/Volumes/projects/UV/Camera Grid/scripts/perforated_mask_app.py\" > /tmp/mask_app.log 2>&1 &amp;echo \"PID: $!\"\;

## Files
- `/Volumes/projects/UV/Camera Grid/scripts/perforated_mask_app.py`

_Importance: 7 · Confidence: 0.85_
