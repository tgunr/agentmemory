---
type: file_edit
title: Git working tree cleanup instructions
description: No subtitle provided
resource: agentmemory://observation/obs_ms6qvnlz_a35f6c69ad7e
tags: ["Git workflow", "file_edit"]
timestamp: 2026-07-29T23:57:39.523041+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 6
confidence: 0.9
---
# Summary

When working on a local branch, the user must verify that upstream changes don't break their work before committing. The drift between local and upstream branches can be resolved using a `git reset --hard` operation with a backup branch to insure against loss of progress.

## Facts
- Local branches should not be patched without verifying the upstream changes first.
- The drift between local and upstream is a common source of build break symptoms.

## Concepts
- Git workflow

## Files
- `/references/upstream-merge-testing.md`

_Importance: 6 · Confidence: 0.9_
