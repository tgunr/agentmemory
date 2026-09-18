---
type: FileRead
title: Find Time Machine backup of state.db
description: No Time Machine volume mounted in /Volumes/
resource: agentmemory://observation/obs_mrw6hdua_64f46533e356
tags: ["(macOS path)/Volumes/", "fileread"]
timestamp: 2026-07-22T14:28:59.597067+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 5
confidence: 0.9
---
# Summary

The tool executed the script to find the Time Machine backup of state.db. The backups are located in /Volumes/TimeMachine/Backups.backupdb/<hostname>/<date>/...</facets> Since no Time Machine volume was mounted, local snapshots were checked and some Spotlight searches were also performed.

## Facts
- Time Machine on macOS stores backups in /Volumes/TimeMachine/Backups.backupdb/<hostname>/<date>/...
- Found TM backup db at: /Volumes/Time Machine/Backups.backupdb, /Volumes/com.apple.TimeMachine.localsnapshots/Backups.backupdb

## Concepts
- (macOS path)/Volumes/

## Files
- `/Volumes/Time Machine/Backups.backupdb`
- `/Volumes/com.apple.TimeMachine.localsnapshots/Backups.backupdb`

_Importance: 5 · Confidence: 0.9_
