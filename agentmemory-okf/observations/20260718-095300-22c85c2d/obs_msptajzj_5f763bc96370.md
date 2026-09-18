---
type: file_write
title: Failed write_file action for skill &quot;agentmemory-hermes-integration&quot;
description: User-owned skills are off-limits to autonomous curation
resource: agentmemory://observation/obs_msptajzj_5f763bc96370
tags: ["Curator management and user-owned skills", "file_write"]
timestamp: 2026-08-12T08:12:51.242189+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

The background curator is preventing a write_file action for the specified skill. The issue arises from the skill being user-owned, which restricts its interaction with the autonomous curator. To address this, the user must employ the hermes curator command to adopt the skill, enabling it to participate in curation.

## Facts
- Background curator is refusing write_file for the given skill.
- The reason is that the skill is not curator-managed and user-owned skills are off-limits to autonomous curation.

## Concepts
- Curator management and user-owned skills

_Importance: 7 · Confidence: 0.9_
