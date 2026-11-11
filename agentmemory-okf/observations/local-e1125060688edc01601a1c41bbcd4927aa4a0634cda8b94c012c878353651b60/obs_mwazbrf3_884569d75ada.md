---
type: file_write
title: Script for cloning and mirroring Bitbucket repositories
description: Mirror files over 100MB, refusing GitHub's 100MB limit
resource: agentmemory://observation/obs_mwazbrf3_884569d75ada
tags: ["Repository mirroring", "Bitbucket", "GitHub", "file_write"]
timestamp: 2026-11-10T17:44:01.930519+00:00
source: agentmemory
session_id: local-e1125060688edc01601a1c41bbcd4927aa4a0634cda8b94c012c878353651b60
importance: 8
confidence: 1
---
# Summary

The script successfully cloned and mirrored Bitbucket repositories, refusing files over 100MB and exceeding GitHub's 100MB limit.

## Facts
- Mirrored files over 100MB without exceeding GitHub's 100MB limit
- Verified that script runs successfully
- Resolved issues with directory creation and file paths

## Concepts
- Repository mirroring
- Bitbucket
- GitHub

## Files
- `/private/tmp/bb_move_big.sh`

_Importance: 8 · Confidence: 1_
