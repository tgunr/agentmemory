---
type: file_edit
title: Skills configuration update
description: Background curator patch refused due to unauthenticated skill.
resource: agentmemory://observation/obs_msuoykk8_772afc6c3da4
tags: ["skill configuration", "background curator", "user-owned skills", "file_edit"]
timestamp: 2026-08-15T18:10:24.532608+00:00
source: agentmemory
session_id: 20260815_120838_c6e364
importance: 6
confidence: 0.9
---
# Summary

The skills' configuration update request was refused by the background curator due to an unauthenticated skill. The requested patch for 'turboquant-mlx-run' could only be done through adoption, hence the user needs to run the command to opt this in.

## Facts
- scheduled background curator patch failed due to user-owned skill
- skill 'turboquant-mlx-run' is not curator-managed and thus cannot be patched.

## Concepts
- skill configuration
- background curator
- user-owned skills

_Importance: 6 · Confidence: 0.9_
