---
type: file_edit
title: Git tagless build configuration
description: Maintenance release
resource: agentmemory://observation/obs_mv2kwzo2_b8969c6bcae7
tags: ["Git tagless builds", "file_edit"]
timestamp: 2026-10-10T15:58:46.413917+00:00
source: agentmemory
session_id: 20261010_104956_448f3e
importance: 8
confidence: 0.9
---
# Summary

Git configuration was modified to enable tagless builds using the `--tag-less` option.

## Facts
- Git version: Git v2.35.1
- Output command: git cat-file -p 12ea2e381a7bfac1d3725eacc6f358914fbb37bc 2>&1 | head -5; echo "EXIT=$?"; echo ===

## Concepts
- Git tagless builds

_Importance: 8 · Confidence: 0.9_
