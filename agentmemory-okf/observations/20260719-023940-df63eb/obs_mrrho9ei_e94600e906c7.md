---
type: FileRead
title: GNUmakefile bootstrap build rules for V compiler
description: Lines 190-219 showing v1/v2 compilation and platform-specific configuration
resource: agentmemory://observation/obs_mrrho9ei_e94600e906c7
tags: ["compiler bootstrapping", "GNU make build system", "cross-platform compilation", "NetBSD paxctl", "fileread"]
timestamp: 2026-07-19T07:43:25.335959+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 6
confidence: 1
---
# Summary

Read GNUmakefile showing multi-stage bootstrap compilation of the V compiler itself, involving v1 and v2 intermediate builds with platform-specific adjustments for NetBSD and legacy Mac support. The build system handles both standard and legacy compilation paths before finalizing the V executable.

## Facts
- File has 423 total lines, 12857 bytes, truncated read showing lines 190-219
- Bootstrap process compiles v1 then v2 executables with C99, pthread, and math libraries
- NetBSD-specific paxctl +m calls for stack protection on compiled binaries
- Legacy support through TMPLEGACY directory and MacportsLegacySupport library
- Post-bootstrap runs TCC detection and GitHub problem matchers registration

## Concepts
- compiler bootstrapping
- GNU make build system
- cross-platform compilation
- NetBSD paxctl

## Files
- `/Volumes/alpha/sources/v/GNUmakefile`

_Importance: 6 · Confidence: 1_
