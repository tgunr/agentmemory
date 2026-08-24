---
type: file_edit
title: Failed container run command
description: No output from getent hosts db
resource: agentmemory://observation/obs_msrap5dr_c517be5681f6
tags: ["file_edit"]
timestamp: 2026-08-13T09:07:51.801940+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 7
confidence: 0.85
---
# Summary

The command to run the `getent hosts db` command inside a container failed with an exit code of 2.

## Facts
- Taken at: 2026-08-13T09:07:51.801940+00:00
- Command was: ssh pve.root 'podman exec docmost_docmost_1 getent hosts db'
- Timeout of 60 seconds was set
- Exit code was 2, indicating failure

_Importance: 7 · Confidence: 0.85_
