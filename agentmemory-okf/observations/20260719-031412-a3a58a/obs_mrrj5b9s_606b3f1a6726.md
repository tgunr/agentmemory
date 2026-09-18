---
type: Error
title: skill_manage patch failed: read-before-write required for v-compiler-build skill
description: User attempted to patch SKILL.md without first loading content via skill_view
resource: agentmemory://observation/obs_mrrj5b9s_606b3f1a6726
tags: ["skill management", "read-before-write pattern", "error"]
timestamp: 2026-07-19T08:24:40.525528+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

A skill patch operation failed due to missing prerequisite read step. The skill_manage tool requires content to be loaded via skill_view before accepting patch operations, enforcing a read-before-write workflow to prevent accidental overwrites.

## Facts
- Tool: skill_manage with action 'patch'
- Skill name: v-compiler-build
- Error: Refusing background curator patch - SKILL.md content not loaded in review turn
- Requirement: Must call skill_view(name) before patching

## Concepts
- skill management
- read-before-write pattern

## Files
- `v-compiler-build/SKILL.md`

_Importance: 4 · Confidence: 1_
