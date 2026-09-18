---
type: FileRead
title: Syncs the shell's CWD to the active profile's terminal.cwd
description: script reads configuration.yaml from HERMES_HOME
resource: agentmemory://observation/obs_mssue603_6b48fd3a1067
tags: ["YAML handling", "config bridge ordering", "fileread"]
timestamp: 2026-08-14T11:06:57.885369+00:00
source: agentmemory
session_id: 20260814_055249_05a0a4
importance: 8
confidence: 0.9
---
# Summary

The script reads profile_cwd_sync.sh to sync the shell's CWD.
It is triggered when the Desktop GUI switches profiles. This process involves reading the correct profile's config.yaml and fixing the.cwd at shell startup.

## Facts
- Script fixes a bug in web_server.py config bridge ordering
- Handles YAML block in config.yaml

## Concepts
- YAML handling
- config bridge ordering

## Files
- `/Users/davec/.hermes/scripts/profile_cwd_sync.sh`

_Importance: 8 · Confidence: 0.9_
