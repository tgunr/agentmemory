---
type: file_edit
title: Terminal: pgrep and command execution
description: Running command to verify app uptime on macOS
resource: agentmemory://observation/obs_mvujcvut_a8ff6003a3f1
tags: ["pgrep", "file_edit"]
timestamp: 2026-10-30T05:32:41.666738+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 1
---
# Summary

The script executed the command to retrieve process information and verify the mini app's uptime on macOS.

## Facts
- pgrep -fl «MacOS/[H]ermes$» | head -3; echo “--- mini app uptime:”
- pgrep -f “MacOS/[H]ermes$” | head -1; P = (pgrep -f “MacOS/[H]ermes$” | head -1)
- [ -n “$P” ] && ps -p $P -o pid=,lstart= | tail -1 || echo “not running”

## Concepts
- pgrep

_Importance: 6 · Confidence: 1_
