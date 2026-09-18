---
type: FileRead
title: Hermes Skill: Samba Mount Access
description: Use when the SSH backend can't write to macOS Samba mounts.
resource: agentmemory://observation/obs_msuddudp_53c7ac3aeb34
tags: ["Samba protocol", "fileread"]
timestamp: 2026-08-15T12:46:21.700442+00:00
source: agentmemory
session_id: 20260815_063700_d8cc2d
importance: 6
confidence: 0.9
---
# Summary

The Hermes Skill uses the Samba protocol for writing files on macOS network volumes, but notes that the SSH backend can't write to these mounts. To avoid this, use native filesystem operations with `ssh`. It's recommended to map the share→native path first and push edited files (not just running commands) with `rsync -e ssh`.

## Facts
- The agent's **SSH terminal backend cannot write to Samba mounts** (and even to `/Volumes/Work`, a LOCAL APFS volume).

## Concepts
- Samba protocol

## Files
- `/Users/davec/.hermes/skills/macos/samba-mount-access/SKILL.md`

_Importance: 6 · Confidence: 0.9_
