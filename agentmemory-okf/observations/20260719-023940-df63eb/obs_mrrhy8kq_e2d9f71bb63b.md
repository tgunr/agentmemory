---
type: FileRead
title: Reviewed Unix symlink setup and fallback behavior
description: V tool installs its executable link with Termux and user-local handling.
resource: agentmemory://observation/obs_mrrhy8kq_e2d9f71bb63b
tags: ["symbolic link installation", "Unix permissions fallback", "user-local binaries", "Termux support", "PATH configuration", "fileread"]
timestamp: 2026-07-19T07:51:10.823680+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 3
confidence: 1
---
# Summary

The Unix implementation prefers the normalized configured location, normally /usr/local/bin, but handles permission failures by installing into the current user's ~/.local/bin. It also supports Termux explicitly and provides PATH guidance after a successful fallback.

## Facts
- setup_symlink normalizes the requested directory, creates it if absent, removes any existing v link, and symlinks vexe to it.
- If the initial symlink fails, it retries at ~/.local/bin/v, creates ~/.local/bin when needed, and warns if that directory is absent from PATH.
- If no home directory exists or the fallback fails, it prints the original failure, suggests sudo, and exits with status 1.
- default_link_dir returns /data/data/com.termux/files/usr/bin under Termux and /usr/local/bin otherwise.
- symlink_path joins the selected link directory with the filename v.

## Concepts
- symbolic link installation
- Unix permissions fallback
- user-local binaries
- Termux support
- PATH configuration

## Files
- `/Volumes/alpha/sources/v/cmd/tools/vsymlink/vsymlink_nix.c.v`

_Importance: 3 · Confidence: 1_
