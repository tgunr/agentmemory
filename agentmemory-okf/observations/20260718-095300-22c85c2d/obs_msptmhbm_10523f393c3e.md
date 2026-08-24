---
type: file_edit
title: Fix okf_mirror.sh bug in replace operation
description: No hardcode of 'Bearer ***'; bypass HTTP and read KV store directly for a durable fix.
resource: agentmemory://observation/obs_msptmhbm_10523f393c3e
tags: ["i3 binary", "mem::export function", "iii invocation-routing bug", "bypass HTTP", "file_edit"]
timestamp: 2026-08-12T08:22:07.662606+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 8
confidence: 0.65
---
# Summary

The okf_mirror.sh replacement operation fixed a bug causing hardcoded access to API tokens when calling the iii-engine's mem::export function, which is essential for ensuring secure memory operations.

## Concepts
- i3 binary
- mem::export function
- iii invocation-routing bug
- bypass HTTP

## Files
- `/opt/homebrew/Cellar/node/26.5.0 (shell is v22)`

_Importance: 8 · Confidence: 0.65_
