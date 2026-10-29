---
type: FileRead
title: Mount point discovery on multiple mounts
description: Using zfs to list mounted directories
resource: agentmemory://observation/obs_mvs94fjl_f5745646eca1
tags: ["zfs", "ssh", "fileread"]
timestamp: 2026-10-28T15:10:38.765799+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 8
confidence: 0.9
---
# Summary

The tool discovered the mount points of several directories using a command that used zfs. The output provides a list of directories with their corresponding mount points.

## Facts
- Command used to get mount points: ssh pve.root 'for d in ...'
- Output format: --- directory --- mountpoint (--PID information)

## Concepts
- zfs
- ssh

## Files
- `/alpha/media/downloads`
- `/alpha/media/tv`
- `/alpha/media/plex`
- `/dpool/podman`

_Importance: 8 · Confidence: 0.9_
