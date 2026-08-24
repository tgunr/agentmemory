---
type: decision
title: Created macos-native-build skill for SMB mount build pitfall
description: Documenting Homebrew gmake EACCES issue on smbfs-mounted source trees
resource: agentmemory://observation/obs_mrrht107_c419708b51df
tags: ["macOS native build toolchain", "SMB mount exec permission pitfall", "Homebrew gmake vs system make PATH resolution", "V compiler bootstrap v1 v2 v", "smbfs nodev nosuid mount flags", "agent skill creation", "decision"]
timestamp: 2026-07-19T07:47:07.732990+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 7
confidence: 1
---
# Summary

A new agent skill was created to capture a recurring macOS build failure: Homebrew's GNU Make (gmake) fails with "Permission denied" when trying to execute freshly-compiled bootstrap binaries on an SMB-mounted volume. The root cause is an EACCES/EPERM at exec on smbfs. The documented workaround is to force the system /usr/bin/make by explicitly setting PATH, which resolves the issue without needing chmod, xattr changes, or copying the repo to local disk.

## Facts
- Skill "macos-native-build" created in category "software-development"
- Skill stored at /Users/davec/.hermes/skills/software-development/macos-native-build/SKILL.md
- Documents pitfall: Homebrew /opt/homebrew/bin/gmake cannot exec bootstrap binaries on SMB-mounted /Volumes/alpha (smbfs, nodev, nosuid)
- Fix: use system /usr/bin/make with PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH" instead of gmake
- Affects V compiler bootstrap (v1→v2→v), and any build that compiles-then-executes a helper binary on smbfs
- Interactive shells resolve make→/usr/bin/make but background/script shells may have Homebrew ahead in PATH causing gmake to be used
- Referenced diagnostic files: scripts/check_make_on_smb.sh, references/smb-gmake-gotcha.md

## Concepts
- macOS native build toolchain
- SMB mount exec permission pitfall
- Homebrew gmake vs system make PATH resolution
- V compiler bootstrap v1 v2 v
- smbfs nodev nosuid mount flags
- agent skill creation

## Files
- `/Users/davec/.hermes/skills/software-development/macos-native-build/SKILL.md`

_Importance: 7 · Confidence: 1_
