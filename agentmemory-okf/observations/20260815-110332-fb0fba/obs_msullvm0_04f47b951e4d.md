---
type: Error
title: Skill Manage error
description: Failed creation of TurboQuant-MLX skill
resource: agentmemory://observation/obs_msullvm0_04f47b951e4d
tags: ["mlops", "error"]
timestamp: 2026-08-15T16:36:33.475029+00:00
source: agentmemory
session_id: 20260815_110332_fb0fba
importance: 5
confidence: 0.9
---
# Summary

The creation of TurboQuant-MLX skill failed due to description length issue. Error detected in skill manage tool usage observation.

## Facts
- Description is 175 chars — new skills must fit the 60-char system-prompt budget (one sentence, trigger first, ends with a period). The skill index truncates longer descriptions to 57 chars + '...', destroying the routing signal. Move detail into the skill body.

## Concepts
- mlops

_Importance: 5 · Confidence: 0.9_
