---
type: file_edit
title: samba-mount-access
description: solve TCC error when writing to macOS Samba mounts via SSH backend
resource: agentmemory://observation/obs_msu3nv6c_efae56a9657a
tags: ["TCC sandbox", "SSH-terminal backend", "Samba mounts", "file_edit"]
timestamp: 2026-08-15T08:14:13.132583+00:00
source: agentmemory
session_id: cron_9dfd463ca7d0_20260815_030042
importance: 7
confidence: 0.9
---
# Summary

The SSH backend of the skill_view tool can't write to macOS Samba mounts. Use `ssh` instead and perform actions on the native filesystem.

## Facts
- The agent's SSH terminal backend cannot write to Samba mounts
- TCC sandbox denying the backend process, not a share permission problem

## Concepts
- TCC sandbox
- SSH-terminal backend
- Samba mounts

## Files
- `/Volumes/Work`

_Importance: 7 · Confidence: 0.9_
