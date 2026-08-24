---
type: CommandRun
title: Explore kilo-hooks tree and session-start scripts
description: Listing lifecycle hook scripts and locating session-start modules
resource: agentmemory://observation/obs_mroxh7yp_d71f24058bbb
tags: ["session lifecycle hooks", "shell scripting", "agentmemory plugin", "file discovery", "commandrun"]
timestamp: 2026-07-17T12:42:32.203035+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Executed a terminal command to map the file structure of the agentmemory-kilo-hooks directory and locate session-start related files in the agentmemory plugin. This establishes the baseline layout for session lifecycle hooks and the compiled JS entrypoint.

## Facts
- Servers/agentmemory-kilo-hooks contains lifecycle scripts: session-start.sh, session-end.sh, agentmemory-stop.sh, cleanup-stale-sessions.sh, agentmemory-standalone.sh, and agentmemory-wrapper.sh
- /Volumes/AI/agentmemory/plugin/scripts contains session-start.mjs and its source map session-start.mjs.map
- Backup and swap files exist for agentmemory-wrapper.sh (.bak and #...#)

## Concepts
- session lifecycle hooks
- shell scripting
- agentmemory plugin
- file discovery

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-end.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-stop.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/cleanup-stale-sessions.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-standalone.sh`
- `/Volumes/AI/agentmemory/plugin/scripts/session-start.mjs`

_Importance: 4 · Confidence: 1_
