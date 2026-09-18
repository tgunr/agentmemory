---
type: file_edit
title: Revised workflow for divergent trees in repos
description: Merging two repo branches with diverged changes while preserving updates
resource: agentmemory://observation/obs_msksjv27_aabbfb0f6324
tags: ["git workflow for divergent trees", "file_edit"]
timestamp: 2026-08-08T19:53:15.003021+00:00
source: agentmemory
session_id: 20260808_125857_de0ebf
importance: 6
confidence: 0.9
---
# Summary

The task presents a challenging situation when a project's working copy has been moved to a new location while leaving the Git behind at the old path. Thus, handling divergent changes from these two trees requires careful intervention and meticulous management. By back up first and updating branch history properly (step 3), and by fixing absolute paths baked into build files and tracking updates separately through .gitignore and git status commands, users can finally merge their diverged files efficiently and update their source code with more efficiency.

## Facts
- The workflow involves a careful merge process, where the newer iteration of the app is compared against the old iterations.

## Concepts
- git workflow for divergent trees

## Files
- `/skills/diff Git workflow documentation.md`

_Importance: 6 · Confidence: 0.9_
