---
type: file_write
title: Stale persisted last session id fix
description: Detailed fix for runtime error at desktop launch
resource: agentmemory://observation/obs_msbxhby8_62e779e2bfe3
tags: ["Electron LevelDB localStorage", "cached sessions", "file_write"]
timestamp: 2026-08-02T15:01:19.419257+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 8
confidence: 0.9
---
# Summary

A stale persisted session id in Electron LevelDB localStorage was causing repeated errors when launching packaged Hermes Desktop.

## Facts
- The 404 response came from the backend served by Electron's main process.

## Concepts
- Electron LevelDB localStorage
- cached sessions

## Files
- `/Users/davec/.hermes/profiles/ai/skills/hermes-agent/hermes-desktop-build/references/runtime-session-not-found.md`

_Importance: 8 · Confidence: 0.9_
