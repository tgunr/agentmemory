---
type: FileRead
title: Re-join histories in repo
description: Git filter-repo, commit tree, and directory history
resource: agentmemory://observation/obs_mwalfbtg_21608b7c2a8b
tags: ["Git filter-repo, commit tree, directory history", "git revision history, git for-each-ref", "fileread"]
timestamp: 2026-11-10T11:14:53.712815+00:00
source: agentmemory
session_id: local-e1125060688edc01601a1c41bbcd4927aa4a0634cda8b94c012c878353651b60
importance: 8
confidence: 1
---
# Summary

To rejoin histories in a FactorWork repository: use git filter-repo to flatten
    history and preserve paths, then re-join with --to-subdirectory-filter and git
    commit-tree. This commit maintains the full history from one branch while
    integrating another.

## Facts
- 2012: FactorWork vocab dirs split in bitbucket repos; history lost
- 2026: Full history re-join in master repo using filter-repo and commit tree
- git rev-parse master^{tree}, git revision history
- git for-each-ref, git log --full-history --

## Concepts
- Git filter-repo, commit tree, directory history
- git revision history, git for-each-ref

## Files
- `/opt/homebrew/bin/bash`
- `/tmp/octo.sh`

_Importance: 8 · Confidence: 1_
