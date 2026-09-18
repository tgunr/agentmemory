---
type: file_write
title: Document SMB + Homebrew gmake permission issue
description: Workaround for V compiler builds on SMB mounts
resource: agentmemory://observation/obs_mrrhuaju_7d9c2fdf0ae7
tags: ["SMB mounts", "Homebrew gmake", "permission denied", "macOS builds", "V compiler", "PATH resolution", "build environment", "file_write"]
timestamp: 2026-07-19T07:48:06.759398+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 6
confidence: 1
---
# Summary

Documented a specific macOS build environment issue where Homebrew gmake fails to execute files on SMB mounts with "Permission denied" errors, while Apple's /usr/bin/make succeeds. The file provides reproduction steps, diagnostic transcript, and the minimal workaround of using /usr/bin/make explicitly, avoiding the need to copy the entire source tree to local disk.

## Facts
- Homebrew gmake (/opt/homebrew/bin/gmake) fails with "Permission denied" when executing files on SMB mounts, while /usr/bin/make works
- Issue occurs in background/script shells where Homebrew is ahead in PATH, not in interactive login shells
- File permissions and xattrs are correct; execution works via direct shell invocation
- Root cause: Homebrew gmake cannot execute files on SMB mounts despite proper exec bits
- Workaround: Explicitly use /usr/bin/make by prepending /usr/bin to PATH
- Affects V compiler builds at /Volumes/alpha/sources/v on SMB mount

## Concepts
- SMB mounts
- Homebrew gmake
- permission denied
- macOS builds
- V compiler
- PATH resolution
- build environment

## Files
- `/Users/davec/.hermes/skills/software-development/macos-native-build/references/smb-gmake-gotcha.md`

_Importance: 6 · Confidence: 1_
