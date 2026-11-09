---
type: file_edit
title: samba-mount-access
description: Use when Samba writes fail, hang, or crawl.
resource: agentmemory://observation/obs_mw8e4mcw_ede376d8963b
tags: ["TCC sandbox", "Samba-mount-access", "file_edit"]
timestamp: 2026-11-08T22:15:04.493473+00:00
source: agentmemory
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
importance: 8
confidence: 0.9
---
# Summary

The agent's SSH terminal backend cannot write to Samba mounts due to the macOS TCC sandbox. Write commands fail, with Permission denied (EACCES) instead of Operation not permitted (EPERM / TCC).

## Facts
- SSH terminal backend cannot write to Samba mounts and is blocked by macOS TCC sandbox.
- Samba writes fail due to TCC sandbox denying backend process.

## Concepts
- TCC sandbox
- Samba-mount-access

## Files
- `/Volumes/davec/.openclaw`

_Importance: 8 · Confidence: 0.9_
