---
type: CommandRun
title: Failed post_tool_call for skill_manage on fleet-shared-scripts
description: Created a failed skill due to long description
resource: agentmemory://observation/obs_mvzkcfeb_90cfabf2f313
tags: ["character limit error with file", "skill manage commands", "commandrun"]
timestamp: 2026-11-02T17:59:10.830163+00:00
source: agentmemory
session_id: local-84924181f2b8f5385af1d974cbcb819f851702ed9d8cc3ec9f480e0336829d57
importance: 6
confidence: 0.9
---
# Summary

The post_tool_call for the skill_manage tool on fleet-shared-scripts encountered an error. The error occurred because the description of the skill exceeded the 60-character limit for the skill index, causing the skills to be rolled back.

## Facts
- The skill manage tool failed to create a skill on fleet-shared-scripts due to character limit issues.

## Concepts
- character limit error with file
- skill manage commands

## Files
- `/root/bin/.../script`

_Importance: 6 · Confidence: 0.9_
