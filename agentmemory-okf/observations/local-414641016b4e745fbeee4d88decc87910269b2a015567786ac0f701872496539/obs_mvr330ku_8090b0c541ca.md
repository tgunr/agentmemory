---
type: file_write
title: Pruning apt on a Debian/PVE host for efficiency
description: Determine if packages from Homebrew/Linuxbrew are redundant
resource: agentmemory://observation/obs_mvr330ku_8090b0c541ca
tags: ["package management", "Homebrew", "file_write"]
timestamp: 2026-10-27T19:33:48.842780+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 8
confidence: 0.9
---
# Summary

Identify potential duplicates between apt and brew, and ensure only core packages are kept

## Facts
- Homebrew has 90 formulae, but only 20 real tools
- Using apt-mark showmanual can normalise brew names and find exact matches to be core system packages

## Concepts
- package management
- Homebrew

## Files
- `/home/user.references/package-pruning.md`
- `/home/user.references/bmc-out-of-band-access.md`

_Importance: 8 · Confidence: 0.9_
