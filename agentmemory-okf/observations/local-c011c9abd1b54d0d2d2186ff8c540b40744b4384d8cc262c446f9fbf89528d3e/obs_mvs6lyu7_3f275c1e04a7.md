---
type: file_edit
title: SSH probe on ttyS0
description: Write probe output to ttyS0
resource: agentmemory://observation/obs_mvs6lyu7_3f275c1e04a7
tags: ["SSH", "TtyS0", "Getty", "Login", "file_edit"]
timestamp: 2026-10-28T14:00:18.075188+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 7
confidence: 0.9
---
# Summary

The terminal tool executed a shell command that wrote probe output to ttyS0, retrieved getty processes, and displayed login sessions.

## Facts
- Tool: terminal
- Command: ssh pve.root '...'

## Concepts
- SSH
- TtyS0
- Getty
- Login

## Files
- `/dev/ttyS0`

_Importance: 7 · Confidence: 0.9_
