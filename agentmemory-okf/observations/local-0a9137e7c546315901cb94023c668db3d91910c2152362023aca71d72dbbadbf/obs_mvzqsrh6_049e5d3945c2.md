---
type: file_write
title: Failed to execute qm command on remote machine
description: pve.local ssh connection encountered error
resource: agentmemory://observation/obs_mvzqsrh6_049e5d3945c2
tags: ["file_write"]
timestamp: 2026-11-02T20:59:50.677093+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 6
confidence: 0.75
---
# Summary

Tool 'terminal' failed to execute command 'qm screenshot' on pve.local due to an unknown command. The 'ls' command also failed with the file '/tmp/vm100.ppm' not found.

## Facts
- Command 'qm screenshot' was unknown and resulted in an error
- File '/tmp/vm100.ppm' was accessed by 'ls' command, which failed due to file not existing

## Files
- `/tmp/vm100.ppm`

_Importance: 6 · Confidence: 0.75_
