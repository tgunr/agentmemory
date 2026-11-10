---
type: CommandRun
title: Diff and tail files
description: Modified SKILL.md files with various integrations
resource: agentmemory://observation/obs_mw9tqjhd_2d46b3d3d882
tags: ["Git diff", "File comparison", "Tails", "commandrun"]
timestamp: 2026-11-09T22:19:47.614855+00:00
source: agentmemory
session_id: local-341d2b7168c8fc9da50160a6bcfae68a13fc60b88ce13a00bd988450251a9438
importance: 6
confidence: 1
---
# Summary

The hermes tool was run in the terminal to compare and tail the SKILL.md files with various integrations

## Facts
- Command: cd ~/.hermes && git diff --stat -- skills/apple/macos-integrations/SKILL.md skills/macos/samba-mount-access/SKILL.md skills/productivity/productivity-tools/SKILL.md skills/software-development/factor-build/SKILL.md skills/software-development/git-workflows/SKILL.md
- Command output:
- 2>&1 | tail -20

## Concepts
- Git diff
- File comparison
- Tails

## Files
- `/Skills/*.md`

_Importance: 6 · Confidence: 1_
