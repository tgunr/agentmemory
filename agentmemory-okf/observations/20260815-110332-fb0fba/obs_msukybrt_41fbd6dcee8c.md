---
type: file_edit
title: samba-mount-access
description: Use when the SSH backend can't write to macOS Samba mounts.
resource: agentmemory://observation/obs_msukybrt_41fbd6dcee8c
tags: ["TCC sandbox", "Samba mounts", "file_edit"]
timestamp: 2026-08-15T16:18:14.673334+00:00
source: agentmemory
session_id: 20260815_110332_fb0fba
importance: 7
confidence: 0.9
---
# Summary

The use of Samba mounts with the SSH backend can fail due to a TCC (Terminal Services Configuration) sandboxing issue, where only reads are allowed but writes are blocked. A workaround is to push edited files via `rsync -e ssh` instead of trying to execute commands on the mount.

## Facts
- The agent's SSH terminal backend cannot write to Samba mounts due to a TCC sandbox constraint.

## Concepts
- TCC sandbox
- Samba mounts

## Files
- `/Volumes/davec`

_Importance: 7 · Confidence: 0.9_
