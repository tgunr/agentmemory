---
type: CommandRun
title: Clear stale CEF singleton locks for eufyMake Studio
description: Resolves app launch issues caused by leftover lock files from crashed processes
resource: agentmemory://observation/obs_mrrsoh3h_2d2d0d055e92
tags: ["CEF singleton locks", "macOS application user data paths", "stale lock file cleanup", "process termination", "commandrun"]
timestamp: 2026-07-19T12:51:31.081487+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

Executed a shell script to clean up stale Chromium Embedded Framework (CEF) singleton lock files in the eufyMake Studio user data directory. This resolves application launch failures caused by leftover locks from previously crashed or improperly terminated instances.

## Facts
- Target directory: ~/Library/Application Support/eufyMake Studio Profile/CEF/UserData
- Removed stale CEF lock files: SingletonLock, SingletonSocket, SingletonCookie, LOCK
- Force-killed stray eufyStudio processes using pkill -9
- Command required user approval due to security scan flagging mass deletion and force kill

## Concepts
- CEF singleton locks
- macOS application user data paths
- stale lock file cleanup
- process termination

## Files
- `~/Library/Application Support/eufyMake Studio Profile/CEF/UserData/SingletonLock`
- `~/Library/Application Support/eufyMake Studio Profile/CEF/UserData/SingletonSocket`
- `~/Library/Application Support/eufyMake Studio Profile/CEF/UserData/SingletonCookie`
- `~/Library/Application Support/eufyMake Studio Profile/CEF/UserData/LOCK`

_Importance: 5 · Confidence: 1_
