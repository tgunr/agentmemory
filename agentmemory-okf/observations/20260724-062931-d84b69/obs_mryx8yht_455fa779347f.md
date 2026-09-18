---
type: FileRead
title: Xcode config search and dump
description: Search for Xcode ACP agent configuration details
resource: agentmemory://observation/obs_mryx8yht_455fa779347f
tags: ["ACP agent config persistence in external directories", "fileread"]
timestamp: 2026-07-24T12:33:48.445754+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 8
confidence: 0.9
---
# Summary

Xcode search and dump reveals persistent storage of ACP agent config. This confirms previous findings about Xcode's behavior around these configurations.

## Facts
- Persists ACP config in external agents directory
- Xcode plist prefs export for agent-related settings

## Concepts
- ACP agent config persistence in external directories

## Files
- `/Users/davec/Library/Application Support/CrashReporter/external_agents/claude-code-acp`

_Importance: 8 · Confidence: 0.9_
