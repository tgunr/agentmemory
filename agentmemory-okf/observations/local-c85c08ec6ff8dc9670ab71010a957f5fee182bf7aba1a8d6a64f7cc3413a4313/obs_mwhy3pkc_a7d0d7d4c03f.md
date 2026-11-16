---
type: file_write
title: Replaying a personal patch stack onto a fast-moving upstream
description: Audit the finished rebase
resource: agentmemory://observation/obs_mwhy3pkc_a7d0d7d4c03f
tags: ["git workflows", "file_write"]
timestamp: 2026-11-15T14:44:09.894594+00:00
source: agentmemory
session_id: local-c85c08ec6ff8dc9670ab71010a957f5fee182bf7aba1a8d6a64f7cc3413a4313
importance: 8
confidence: 0.9
---
# Summary

Git replays code, not the later commit's cleanup, so a pre-commit gate may fail. Auditing the finished rebase involves two checks: per-commit audit and Git cherry.

## Facts
- Git replays code, not the later commit's cleanup, so a pre-commit gate may fail.
- Auditing the finished rebase involves two checks: per-commit audit and Git cherry

## Concepts
- git workflows

## Files
- `references/patch-stack-replay.md`

_Importance: 8 · Confidence: 0.9_
