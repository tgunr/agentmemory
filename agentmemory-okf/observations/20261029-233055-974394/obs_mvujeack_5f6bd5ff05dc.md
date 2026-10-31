---
type: FileRead
title: Git stash and directory listing
description: List of modified files after Git stash
resource: agentmemory://observation/obs_mvujeack_5f6bd5ff05dc
tags: ["Git stash", "fileread"]
timestamp: 2026-10-30T05:33:47.105452+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 8
confidence: 1
---
# Summary

A user executed Git stash show on a hermes-agent to inspect modified files, followed by extraction of the application bundle and listing of release build and application directories.

## Facts
- Command executed on Terminal
- Git stash show --stat on hermes-agent
- Application bundle extraction
- Release build and application directory listing

## Concepts
- Git stash

## Files
- `/Applications/Hermes.app/Contents/Resources/app.asar`
- `/Applications/Hermes.app/Contents/Resources/app.asar.unpacked/dist/assets`

_Importance: 8 · Confidence: 1_
