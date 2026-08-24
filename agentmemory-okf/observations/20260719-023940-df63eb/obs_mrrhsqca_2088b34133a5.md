---
type: file_write
title: Created skill: v-compiler-build
description: Documented V compiler build process for macOS SMB/NFS mounts
resource: agentmemory://observation/obs_mrrhsqca_2088b34133a5
tags: ["V language compiler build process", "macOS SMB/NFS network mount issues", "gmake permission denied on network filesystems", "bootstrap binary compilation", "PATH manipulation for tool resolution", "skill documentation creation", "file_write"]
timestamp: 2026-07-19T07:46:53.912027+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 6
confidence: 1
---
# Summary

Created a skill documenting how to build the V language compiler from source on macOS when the repository is on an SMB/NFS network mount. The skill captures a critical workaround for Homebrew's gmake failing to spawn the bootstrap binary on network filesystems, requiring use of Apple's bundled make instead.

## Facts
- Skill name: v-compiler-build, category: software-development
- Skill file created at: /Users/davec/.hermes/skills/software-development/v-compiler-build/SKILL.md
- Key issue documented: Homebrew gmake (/opt/homebrew/bin/gmake) fails with "Permission denied" when spawning ./v1 on SMB/NFS network mounts on macOS
- Solution: Use Apple's bundled /usr/bin/make with sanitized PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
- V compiler repo location: /Volumes/alpha/sources/v (SMB mount)
- Build sequence: clones vc/ and thirdparty/tcc/, compiles v1 from vc/v.c, builds v2, then final v binary (~6MB)
- Expected output: "V has been successfully built" followed by version info (V 0.5.2)

## Concepts
- V language compiler build process
- macOS SMB/NFS network mount issues
- gmake permission denied on network filesystems
- bootstrap binary compilation
- PATH manipulation for tool resolution
- skill documentation creation

## Files
- `/Users/davec/.hermes/skills/software-development/v-compiler-build/SKILL.md`

_Importance: 6 · Confidence: 1_
