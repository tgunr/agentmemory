---
type: file_edit
title: Dotfile management
description: Manage symlinked dotfiles and resolve symlinks first
resource: agentmemory://observation/obs_mwdglzgu_188e7fc2b85d
tags: ["dotfiles", "symlinks", "file_edit"]
timestamp: 2026-11-12T11:23:24.741917+00:00
source: agentmemory
session_id: local-ac9d33b82a53fc4c400f06256356bf6c4a4d00d1b92d7032de8a60b2d187d420
importance: 8
confidence: 0.9
---
# Summary

The tool manages symlinked dotfiles via a git repo at ~/.startup. Resolve symlinks before writing, and always write to the real path. Commit changes after successful edits.

## Facts
- Files in $HOME are symlinks to their real counterparts under ~/.startup
- Write to the real path, not the symlink in $HOME

## Concepts
- dotfiles
- symlinks

## Files
- `/~/.startup`

_Importance: 8 · Confidence: 0.9_
