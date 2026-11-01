---
type: file_edit
title: Terminal command runs helm refresh
description: Command uses shell-level background wrappers, cannot be executed with background=true
resource: agentmemory://observation/obs_mvx0gj9a_98daf3462f8a
tags: ["background wrappers", "file_edit"]
timestamp: 2026-10-31T23:06:57.787416+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 5
confidence: 0.9
---
# Summary

The terminal command ran a helm refresh, but the command uses shell-level background wrappers that prevent Hermes from tracking the process. An alternative command structure should be used to ensure Hermes can track the process and run readiness checks and tests.

## Facts
- Foreground command uses shell-level background wrappers (nohup/disown/setsid)
- Command: rm -f /tmp/hermes-refresh.log; nohup python3 /tmp/hermes-refresh.py >/dev/null 2>&1 & sleep 2;

## Concepts
- background wrappers

_Importance: 5 · Confidence: 0.9_
