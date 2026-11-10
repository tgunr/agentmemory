---
type: file_edit
title: Clang with Sed fails on dwgtest project
description: t.c compilation failure
resource: agentmemory://observation/obs_mw9g68m0_250fc8c15df9
tags: ["segmentation fault", "file_edit"]
timestamp: 2026-11-09T16:00:05.396724+00:00
source: agentmemory
session_id: local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b
importance: 7
confidence: 0.9
---
# Summary

The Clang compiler failed with a segmentation fault on the dwgtest project when compiled with Sed, while successfully compiling the same project using ./t.

## Facts
- Compilation of t.c succeeds with ./t out/in.dwg back.dxf
- Clang fails with Segmentation fault

## Concepts
- segmentation fault

## Files
- `/opt/homebrew/opt/libredwg/lib/libredwg.dylib`
- `/opt/homebrew/bin/bash`
- `/tmp/dwgtest/t.c`
- `/tmp/dwgtest/out/in.dwg`
- `/tmp/dwgtest/back.dxf`

_Importance: 7 · Confidence: 0.9_
