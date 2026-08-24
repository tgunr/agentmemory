---
type: FileRead
title: Viewed V compiler build skill for macOS network mounts
description: Retrieved skill documentation for building vlang/v compiler from source
resource: agentmemory://observation/obs_mrrj4o4e_17fcd5105492
tags: ["V language compiler build process", "macOS SMB/NFS network mount issues", "gmake permission denied bootstrap trap", "Apple make vs Homebrew gmake", "PATH sanitization for build tools", "Bootstrap compilation sequence (v1, v2, v)", "fileread"]
timestamp: 2026-07-19T08:24:10.520789+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 6
confidence: 1
---
# Summary

Retrieved skill documentation for building the V language compiler from source on macOS. The skill documents a critical trap where Homebrew's gmake fails on network-mounted checkouts due to permission issues when spawning the bootstrap binary, and provides the workaround using Apple's bundled make with a sanitized PATH.

## Facts
- Skill name: v-compiler-build, located at software-development/v-compiler-build/SKILL.md
- On macOS SMB/NFS mounts, Homebrew's gmake (/opt/homebrew/bin/gmake) fails with "Permission denied" when spawning bootstrap binary v1
- Solution: Use Apple's bundled /usr/bin/make (GNU Make 3.81) with sanitized PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
- Build sequence: clones vc/ and thirdparty/tcc/, compiles v1 from vc/v.c, builds v2, then final v binary
- Verification: ./v version should print "V 0.5.2 &lt;hash&gt;" with ~6MB binary size
- Local canonical checkout: /Volumes/alpha/sources/v (SMB mount)
- Built binary lands at repo root as executable 'v'

## Concepts
- V language compiler build process
- macOS SMB/NFS network mount issues
- gmake permission denied bootstrap trap
- Apple make vs Homebrew gmake
- PATH sanitization for build tools
- Bootstrap compilation sequence (v1, v2, v)

## Files
- `software-development/v-compiler-build/SKILL.md`
- `/Volumes/alpha/sources/v`

_Importance: 6 · Confidence: 1_
