---
type: CommandRun
title: Verify file locations and skill references in ~/.hermes
description: Checking session_move.py location and projects skill usage
resource: agentmemory://observation/obs_mrq88y7x_d0ef8713eeba
tags: ["file path verification", "skill configuration", "command references", "hermes workspace structure", "commandrun"]
timestamp: 2026-07-18T10:31:48.281943+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

Terminal command verified that session_move.py is not at the root ~/.hermes/ level but exists in the hermes-workspace-context skill scripts directory. Also confirmed that the 'projects' skill is properly referenced in config.yaml with three command definitions (project-detect, project-list, project-stats) pointing to the productivity/projects skill scripts.

## Facts
- ~/.hermes/session_move.py does not exist at root level
- Real session_move.py location: ~/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/scripts/session_move.py (5814 bytes, Jun 17)
- projects skill referenced in /Users/davec/.hermes/skills/productivity/projects/SKILL.md
- config.yaml lines 627-636 define project-detect, project-list, project-stats commands
- These commands point to python3 ~/.hermes/skills/productivity/projects/scripts/projects.py

## Concepts
- file path verification
- skill configuration
- command references
- hermes workspace structure

## Files
- `/Users/davec/.hermes/session_move.py`
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/scripts/session_move.py`
- `/Users/davec/.hermes/skills/productivity/projects/SKILL.md`
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/skills/productivity/projects/scripts/projects.py`

_Importance: 4 · Confidence: 1_
