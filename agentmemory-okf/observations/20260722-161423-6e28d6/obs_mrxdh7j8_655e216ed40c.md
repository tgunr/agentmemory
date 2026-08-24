---
type: FileRead
title: Skill manage patch operation
description: Patch operation failed due to unloaded SKILL.md.
resource: agentmemory://observation/obs_mrxdh7j8_655e216ed40c
tags: ["fileread"]
timestamp: 2026-07-23T10:32:34.911877+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 8
confidence: 0.75
---
# Summary

The patch operation failed due to unloaded SKILL.md, which is required before application of changes to model-selection-routing skill. A fix requires reloading or refreshing the SKILL.md to address this issue.

## Facts
- Error message: Refusing background curator patch for skill 'model-selection-routing': the current SKILL.md content has not been loaded in this review turn. Call skill_view(name) for SKILL.md, or skill_view(name, file_path=...) for a supporting file, then retry the write using the content just returned.
- SKILL.md unload issue occurred

_Importance: 8 · Confidence: 0.75_
