---
type: CommandRun
title: Make build failed due to permission denied on executable v1
description: Build process attempted to run ./v1 but lacked execute permissions
resource: agentmemory://observation/obs_mrrhp4i7_bc78a2642b0c
tags: ["build permissions", "V compiler self-hosting", "makefile execution error", "commandrun"]
timestamp: 2026-07-19T07:44:05.645392+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 6
confidence: 1
---
# Summary

The make build process failed because the compiled v1 binary lacked execute permissions, preventing the V compiler self-building process from proceeding. This is a permissions issue in the build chain where v1 needs to be executable to compile v2.

## Facts
- Command: "make 2>&1 | tail -50" exited with code 0 but build failed
- SSH tunnel already running with PID 8167
- macOS ProductVersion 27.0 BuildVersion 26A5378n detected
- Error: "./v1: Permission denied" when trying to execute compiled binary
- GNUmakefile line 201 failed during "all" target build
- Build chain: v.c → v1 → v2 via ./v1 -no-parallel -o v2 -gc none cmd/v

## Concepts
- build permissions
- V compiler self-hosting
- makefile execution error

## Files
- `/Volumes/alpha/sources/v/vc/v.c`
- `/Volumes/alpha/sources/v/GNUmakefile`

_Importance: 6 · Confidence: 1_
