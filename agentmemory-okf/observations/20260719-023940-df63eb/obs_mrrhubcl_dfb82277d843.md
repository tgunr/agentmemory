---
type: file_write
title: Write SMB mount make compatibility check script
description: Detects Homebrew gmake exec issues on SMB-mounted directories on macOS
resource: agentmemory://observation/obs_mrrhubcl_dfb82277d843
tags: ["macOS SMB mount compatibility", "Homebrew gmake exec issues", "Shell script mount detection", "Build environment validation", "file_write"]
timestamp: 2026-07-19T07:48:07.794751+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 5
confidence: 1
---
# Summary

A shell script was created to detect and warn about Homebrew gmake's inability to execute freshly-built binaries on SMB-mounted directories. The script validates the build environment and provides a workaround by suggesting the use of /usr/bin/make with an explicit PATH.

## Facts
- Script checks if current directory is on an SMB mount using df and mount commands
- Detects if `make` resolves to Homebrew's gmake which cannot exec bootstrap binaries on SMB mounts
- Provides fix: use /usr/bin/make with explicit PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
- Written to skill 'macos-native-build' at /Users/davec/.hermes/skills/software-development/macos-native-build/scripts/check_make_on_smb.sh

## Concepts
- macOS SMB mount compatibility
- Homebrew gmake exec issues
- Shell script mount detection
- Build environment validation

## Files
- `scripts/check_make_on_smb.sh`
- `/Users/davec/.hermes/skills/software-development/macos-native-build/scripts/check_make_on_smb.sh`

_Importance: 5 · Confidence: 1_
