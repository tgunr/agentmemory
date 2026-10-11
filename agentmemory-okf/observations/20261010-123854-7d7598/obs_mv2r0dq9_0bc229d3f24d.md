---
type: FileRead
title: Tool usage: PrusaSlicer
description: Loaded 3MF file and exported as STL file
resource: agentmemory://observation/obs_mv2r0dq9_0bc229d3f24d
tags: ["PrusaSlicer", "3DFactoring", "fileread"]
timestamp: 2026-10-10T18:49:22.296303+00:00
source: agentmemory
session_id: 20261010_123854_7d7598
importance: 8
confidence: 1
---
# Summary

A 3MF file was loaded and exported as an STL file using PrusaSlicer. The command also printed the output directory and a summary of the export process.

## Facts
- Command: PS=\"/Applications/PrusaSlicer-3.0.0-alpha12.app/Contents/MacOS/PrusaSlicer\"\nD=$(mktemp -d /tmp/hermes-psfix-XXXXXX); echo \"WORKDIR=$D\"\n
- Output: /tmp/hermes-psfix-CUaOLY/stack_ok.3mf
- Error message: No such file or directory

## Concepts
- PrusaSlicer
- 3DFactoring

## Files
- `/tmp/hermes-psfix-CUaOLY/stack_ok.3mf`

_Importance: 8 · Confidence: 1_
